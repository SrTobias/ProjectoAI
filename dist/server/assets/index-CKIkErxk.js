import { T as reactExports, K as jsxRuntimeExports } from "./server-bvgxQfr6.js";
import { t as toast, u as useNavigate } from "./router-LY7BzENe.js";
import { u as useAuth, a as LoaderCircle, S as Select, d as SelectTrigger, e as SelectValue, b as SelectContent, c as SelectItem } from "./select-nHZOmZ0P.js";
import { a as Heart, H as Header } from "./Header-DMi4bBgq.js";
import { h as createLucideIcon, m as useLang, C as Card, c as CardHeader, d as CardTitle, B as Button, a as CardContent, k as supabase, b as CardDescription } from "./chef-hat-MyC67ttw.js";
import { I as Input } from "./input-UBFixYsV.js";
import { L as Label } from "./label-BVZWD7Lu.js";
import { B as Badge, u as useProfilePrefs, I as INGREDIENTS, C as ChipInput, t as toLocalized } from "./DislikedIngredients-BUB4QkWZ.js";
import { T as Tabs, b as TabsList, c as TabsTrigger, a as TabsContent } from "./tabs-CMqfoWAy.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./worker-entry-EldB-nVv.js";
import "node:events";
const __iconNode$8 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$8);
const __iconNode$7 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$6);
const __iconNode$5 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
];
const Wallet = createLucideIcon("wallet", __iconNode);
function RecipeDisplay({ recipe, extra }) {
  const { user } = useAuth();
  const { t } = useLang();
  const [servingsCount, setServingsCount] = reactExports.useState(() => {
    const m = recipe.servings?.match(/(\d+)/);
    return m ? parseInt(m[1], 10) : 2;
  });
  reactExports.useEffect(() => {
    const m = recipe.servings?.match(/(\d+)/);
    setServingsCount(m ? parseInt(m[1], 10) : 2);
  }, [recipe.servings]);
  const originalServings = (() => {
    const m = recipe.servings?.match(/(\d+)/);
    return m ? parseInt(m[1], 10) : 2;
  })();
  function adjustIngredient(text) {
    try {
      const fracMatch = text.match(/(\d+\/\d+)/);
      const numMatch = fracMatch || text.match(/(\d+[.,]?\d*)/);
      if (!numMatch) return text;
      const numStr = numMatch[0];
      let val;
      if (numStr.includes("/")) {
        const [a, b] = numStr.split("/");
        val = Number(a) / Number(b);
      } else {
        val = parseFloat(numStr.replace(",", "."));
      }
      const ratio = servingsCount / (originalServings || 1);
      const newVal = Math.round(val * ratio * 100) / 100;
      const formatted = Number.isInteger(newVal) ? String(newVal) : newVal.toFixed(2).replace(/\.00$/, "");
      return text.replace(numStr, formatted);
    } catch (e) {
      return text;
    }
  }
  const save = async () => {
    if (!user) return toast.error(t("needLogin"));
    const { error } = await supabase.from("favorites").insert({
      user_id: user.id,
      title: recipe.title,
      description: recipe.description,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions
    });
    if (error) toast.error(t("saveError"));
    else toast.success(t("savedToFavorites"));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-3xl", children: recipe.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: recipe.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-3 text-sm text-muted-foreground items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center border rounded-md overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => setServingsCount(Math.max(1, servingsCount - 1)), children: "-" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 text-sm", children: servingsCount }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => setServingsCount(servingsCount + 1), children: "+" })
            ] })
          ] }),
          recipe.time && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }),
            recipe.time
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: save, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4" }),
        " ",
        t("save")
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
      recipe.missing_ingredients && recipe.missing_ingredients.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-start p-3 rounded-md bg-accent/30 border border-accent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-primary shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: t("missingIngredients") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: recipe.missing_ingredients.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: i }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-2", children: t("ingredients") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: recipe.ingredients.map((i, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-foreground", children: "·" }),
          adjustIngredient(i)
        ] }, idx)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-2", children: t("preparation") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-3", children: recipe.instructions.map((step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium", children: idx + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pt-0.5", children: step })
        ] }, idx)) })
      ] }),
      extra
    ] })
  ] });
}
function distanceKm(a, b) {
  const R = 6371;
  const dLat = (b.latitude - a.latitude) * Math.PI / 180;
  const dLon = (b.longitude - a.longitude) * Math.PI / 180;
  const lat1 = a.latitude * Math.PI / 180;
  const lat2 = b.latitude * Math.PI / 180;
  const h = Math.sin(dLat / 2) ** 2 + Math.sin(dLon / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
  return 2 * R * Math.asin(Math.sqrt(h));
}
function ModeForm({ mode }) {
  const { disliked, diet } = useProfilePrefs();
  const { t, lang } = useLang();
  const [pantry, setPantry] = reactExports.useState([]);
  const [dish, setDish] = reactExports.useState("");
  const [servings, setServings] = reactExports.useState(2);
  const [loading, setLoading] = reactExports.useState(false);
  const [recipe, setRecipe] = reactExports.useState(null);
  const [places, setPlaces] = reactExports.useState([]);
  const [findingPlaces, setFindingPlaces] = reactExports.useState(false);
  const [userLoc, setUserLoc] = reactExports.useState(null);
  const [sortBy, setSortBy] = reactExports.useState("distance");
  const [estimate, setEstimate] = reactExports.useState(null);
  const [estimating, setEstimating] = reactExports.useState(false);
  const pantrySuggestions = INGREDIENTS.slice(0, 10).map((p) => lang === "en" ? p.en : p.pt);
  const estimatePrices = async () => {
    if (!recipe) return;
    setEstimating(true);
    setEstimate(null);
    const { data, error } = await supabase.functions.invoke("estimate-prices", {
      body: { ingredients: recipe.ingredients }
    });
    setEstimating(false);
    if (error || data?.error) return toast.error(data?.error ?? t("priceError"));
    setEstimate(data.estimate);
  };
  const showPlaces = mode === "dish" || mode === "surprise";
  const generate = async () => {
    if (mode === "pantry" && pantry.length === 0) return toast.error(t("addSomeIngredients"));
    if (mode === "dish" && !dish.trim()) return toast.error(t("sayWhichDish"));
    if (!servings || servings < 1) return toast.error(t("enterServings"));
    setLoading(true);
    setRecipe(null);
    setPlaces([]);
    const { data, error } = await supabase.functions.invoke("recipe-ai", {
      body: { mode, disliked, pantry, dish: dish.trim(), diet, servings, lang }
    });
    setLoading(false);
    if (error || data?.error) {
      toast.error(data?.error ?? t("recipeError"));
      return;
    }
    setRecipe(data.recipe);
  };
  const findSupermarkets = () => {
    if (!navigator.geolocation) return toast.error(t("geoUnavailable"));
    setFindingPlaces(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        setUserLoc({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
        const { data, error } = await supabase.functions.invoke("find-supermarkets", {
          body: { latitude: pos.coords.latitude, longitude: pos.coords.longitude, radius: 5e3 }
        });
        setFindingPlaces(false);
        if (error || data?.error) return toast.error(data?.error ?? t("supermarketError"));
        setPlaces(data.places ?? []);
        if ((data.places ?? []).length === 0) toast.info(t("noSupermarkets"));
      },
      () => {
        setFindingPlaces(false);
        toast.error(t("noLocation"));
      }
    );
  };
  const sortedPlaces = [...places].sort((a, b) => {
    if (sortBy === "rating") return (b.rating ?? 0) - (a.rating ?? 0);
    if (userLoc && a.location && b.location) {
      return distanceKm(userLoc, a.location) - distanceKm(userLoc, b.location);
    }
    return 0;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        mode === "pantry" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-2xl", children: t("pantryTitle") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: t("pantryDesc") })
        ] }),
        mode === "dish" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-2xl", children: t("dishTitle") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: t("dishDesc") })
        ] }),
        mode === "surprise" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-2xl", children: t("surpriseTitle") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: t("surpriseDesc") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        mode === "pantry" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-2 block", children: t("ingredientsHome") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChipInput, { value: pantry, onChange: setPantry, placeholder: t("pantryPlaceholder"), suggestions: pantrySuggestions })
        ] }),
        mode === "dish" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-2 block", htmlFor: "dish", children: t("dishName") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "dish", value: dish, onChange: (e) => setDish(e.target.value), placeholder: t("dishPlaceholder"), maxLength: 200 })
        ] }),
        disliked.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          t("avoiding"),
          ":",
          " ",
          disliked.map((d) => toLocalized(d, lang === "en" ? "en" : "pt")).join(", ")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: generate, disabled: loading, size: "lg", className: "w-full sm:w-auto", children: [
          loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
          loading ? t("cooking") : t("generateRecipe")
        ] })
      ] })
    ] }),
    recipe && /* @__PURE__ */ jsxRuntimeExports.jsx(
      RecipeDisplay,
      {
        recipe,
        extra: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mb-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: t("estimatedCost") }),
              !estimate && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: estimatePrices, disabled: estimating, variant: "outline", size: "sm", children: [
                estimating ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-4 w-4" }),
                estimating ? t("calculating") : t("estimatePrices")
              ] })
            ] }),
            estimate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border bg-card p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 text-sm", children: estimate.items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  it.name,
                  it.note && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs", children: [
                    " (",
                    it.note,
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium tabular-nums", children: [
                  it.estimated_eur.toFixed(2),
                  " €"
                ] })
              ] }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t mt-2 pt-2 font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("totalEstimated") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tabular-nums", children: [
                  estimate.total_eur.toFixed(2),
                  " €"
                ] })
              ] }),
              estimate.disclaimer && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: estimate.disclaimer })
            ] })
          ] }),
          showPlaces && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mb-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: t("whereToBuy") }),
              places.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: sortBy, onValueChange: (v) => setSortBy(v), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-44", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "distance", children: t("closest") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "rating", children: t("bestRated") })
                ] })
              ] })
            ] }),
            places.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: findSupermarkets, disabled: findingPlaces, variant: "outline", children: [
              findingPlaces ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
              findingPlaces ? t("searching") : t("findSupermarkets")
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: sortedPlaces.map((p) => {
              const dist = userLoc && p.location ? distanceKm(userLoc, p.location) : null;
              const name = p.displayName?.text ?? "";
              const searchQuery = encodeURIComponent(
                `${name} ${recipe.ingredients.slice(0, 5).join(" ")}`
              );
              const searchUrl = `https://www.google.com/search?q=${searchQuery}`;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between items-start gap-3 p-3 rounded-md border bg-card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: p.formattedAddress }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs flex items-center gap-3 mt-1 text-muted-foreground", children: [
                    p.rating && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-accent text-accent" }),
                      " ",
                      p.rating.toFixed(1)
                    ] }),
                    dist !== null && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: dist < 1 ? `${Math.round(dist * 1e3)} m` : `${dist.toFixed(1)} km` })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 items-end shrink-0", children: [
                  p.googleMapsUri && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.googleMapsUri, target: "_blank", rel: "noreferrer", className: "text-sm text-primary inline-flex items-center gap-1", children: [
                    t("view"),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: searchUrl, target: "_blank", rel: "noreferrer", className: "text-xs text-muted-foreground hover:text-primary inline-flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-3 w-3" }),
                    " ",
                    t("searchList")
                  ] })
                ] })
              ] }, p.id);
            }) })
          ] })
        ] })
      }
    )
  ] });
}
function Index() {
  const {
    user,
    loading
  } = useAuth();
  const navigate = useNavigate();
  const {
    t
  } = useLang();
  reactExports.useEffect(() => {
    if (!loading && !user) navigate({
      to: "/auth"
    });
  }, [loading, user, navigate]);
  if (loading || !user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto px-4 py-10 max-w-3xl space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "text-center space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl", children: t("homeTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: t("homeSub") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "pantry", className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid grid-cols-3 w-full h-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "pantry", className: "py-2", children: t("tabPantry") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "dish", className: "py-2", children: t("tabDish") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "surprise", className: "py-2", children: t("tabSurprise") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "pantry", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModeForm, { mode: "pantry" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "dish", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModeForm, { mode: "dish" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "surprise", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModeForm, { mode: "surprise" }) })
      ] })
    ] })
  ] });
}
export {
  Index as component
};
