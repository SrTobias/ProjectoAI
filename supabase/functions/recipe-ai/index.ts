// Recipe AI edge function - generates recipes via Lovable AI Gateway
import { z } from "npm:zod@3.23.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const BodySchema = z.object({
  mode: z.enum(["pantry", "dish", "surprise"]),
  disliked: z.array(z.string()).max(100).default([]),
  pantry: z.array(z.string()).max(100).optional(),
  dish: z.string().max(200).optional(),
  diet: z.enum(["omnivore", "vegetarian", "vegan"]).default("omnivore"),
  servings: z.number().min(1).max(50).optional(),
  lang: z.enum(["pt", "en"]).default("pt"),
});

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten() }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const { mode, disliked, pantry, dish, diet, servings, lang } = parsed.data;
    const language = lang === "en" ? "en" : "pt";

    const dietText =
      diet === "vegan"
        ? language === "en"
          ? "The user is VEGAN. Do NOT use meat, fish, shellfish, eggs, dairy, honey, or any animal-derived products. Use only plant-based ingredients."
          : "O utilizador é VEGANO. NÃO uses carne, peixe, marisco, ovos, laticínios, mel ou qualquer produto de origem animal. Usa apenas ingredientes de origem vegetal."
        : diet === "vegetarian"
        ? language === "en"
          ? "The user is VEGETARIAN. Do NOT use meat, fish, or shellfish. You may use eggs, milk, cheese and other dairy products."
          : "O utilizador é VEGETARIANO. NÃO uses carne, peixe ou marisco. Podes usar ovos, leite, queijo e outros laticínios."
        : "";

    const dislikedTxt =
      language === "en"
        ? disliked.length
          ? `The user DOES NOT like these ingredients (avoid them ALWAYS): ${disliked.join(", ")}.`
          : ""
        : disliked.length
        ? `O utilizador NÃO gosta destes ingredientes (evita-os SEMPRE): ${disliked.join(", ")}.`
        : "";

    const servingsText = servings
      ? language === "en"
        ? `for exactly ${servings} people`
        : `para exatamente ${servings} pessoas`
      : "";

    let userPrompt = "";
    if (mode === "pantry") {
      userPrompt =
        language === "en"
          ? `${dietText}
${dislikedTxt}
Available ingredients at home: ${(pantry ?? []).join(", ")}.
Create a recipe exactly for ${servings} people using these ingredients (you can assume salt, pepper, oil, water). Use quantities appropriate for ${servings} servings. Include all ingredients with quantities and clearly note any essential missing ingredients.`
          : `${dietText}
${dislikedTxt}
Ingredientes disponíveis em casa: ${(pantry ?? []).join(", ")}.
Cria uma receita exatamente para ${servings} pessoas usando estes ingredientes (podes assumir sal, pimenta, azeite, água). Usa quantidades apropriadas para ${servings} doses. Indica claramente se faltam ingredientes essenciais.`;
    } else if (mode === "dish") {
      userPrompt =
        language === "en"
          ? `${dietText}
${dislikedTxt}
The user wants to make: "${dish}". Create a recipe exactly for ${servings} people. Use ingredient quantities appropriate for ${servings} servings. Give the complete recipe respecting the diet. List all required ingredients with quantities.`
          : `${dietText}
${dislikedTxt}
O utilizador quer fazer: "${dish}". Cria uma receita exatamente para ${servings} pessoas. Usa quantidades apropriadas para ${servings} doses. Dá a receita completa respeitando o regime alimentar. Lista todos os ingredientes necessários (com quantidades).`;
    } else {
      userPrompt =
        language === "en"
          ? `${dietText}
${dislikedTxt}
Suggest a delicious and varied dish of your choice (Portuguese, Mediterranean or international cuisine). Surprise the user! Create a recipe exactly for ${servings} people and use ingredient quantities appropriate for ${servings} servings.`
          : `${dietText}
${dislikedTxt}
Sugere um prato delicioso e variado à escolha (cozinha portuguesa, mediterrânica ou internacional). Surpreende! Cria uma receita exatamente para ${servings} pessoas e usa quantidades apropriadas para ${servings} doses.`;
    }

    const systemPrompt =
      language === "en"
        ? "You are an experienced chef that returns practical recipes in English. Always respond using the return_recipe function. Always make the recipe for the requested number of servings. Do not change the number of servings; the recipe must be exactly for the number of people requested."
        : "És um chef experiente que dá receitas práticas em português europeu. Responde SEMPRE através da função return_recipe. Faz a receita para o número de pessoas solicitado. Não mudes o número de pessoas; a receita deve ser exatamente para o número de pessoas pedido.";

    const tool = {
      type: "function",
      function: {
        name: "return_recipe",
        description: language === "en" ? "Returns a structured recipe in English." : "Devolve uma receita estruturada em português.",
        parameters: {
          type: "object",
          properties: {
            title: { type: "string", description: "Nome do prato" },
            description: {
              type: "string",
              description: language === "en" ? "Short appetizing description (1-2 sentences)" : "Descrição curta e apetitosa (1-2 frases)",
            },
            servings: {
              type: "string",
              description: language === "en" ? `Servings, exactly ${servings} people` : `Doses, exatamente ${servings} pessoas`,
            },
            time: {
              type: "string",
              description: language === "en" ? "Total time, e.g. '45 min'" : "Tempo total, ex: '45 min'",
            },
            ingredients: {
              type: "array",
              items: { type: "string" },
              description: language === "en" ? "List of ingredients with quantities" : "Lista de ingredientes com quantidades",
            },
            instructions: {
              type: "array",
              items: { type: "string" },
              description: language === "en" ? "Preparation steps, clear and ordered" : "Passos de preparação, claros e ordenados",
            },
            missing_ingredients: {
              type: "array",
              items: { type: "string" },
              description: language === "en" ? "Essential missing ingredients (empty if none)" : "Ingredientes essenciais que faltam (vazio se nenhum)",
            },
          },
          required: ["title", "description", "servings", "time", "ingredients", "instructions"],
          additionalProperties: false,
        },
      },
    };

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        tools: [tool],
        tool_choice: { type: "function", function: { name: "return_recipe" } },
      }),
    });

    if (!res.ok) {
      const txt = await res.text();
      if (res.status === 429) {
        return new Response(JSON.stringify({ error: "Limite de pedidos atingido. Tenta daqui a pouco." }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
      if (res.status === 402) {
        return new Response(JSON.stringify({ error: "Créditos de IA esgotados. Adiciona créditos nas definições." }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
      throw new Error(`AI gateway ${res.status}: ${txt}`);
    }

    const data = await res.json();
    const call = data.choices?.[0]?.message?.tool_calls?.[0];
    if (!call) throw new Error("Sem resposta estruturada da IA");
    const recipe = JSON.parse(call.function.arguments);

    recipe.servings = language === "en" ? `${servings} people` : `${servings} pessoas`;

    return new Response(JSON.stringify({ recipe }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("recipe-ai error", e);
    const msg = e instanceof Error ? e.message : "Erro desconhecido";
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
