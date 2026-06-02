import { K as jsxRuntimeExports, T as reactExports } from "./server-bvgxQfr6.js";
import { h as createLucideIcon, f as cn, j as cva, m as useLang, k as supabase, C as Card, c as CardHeader, d as CardTitle, a as CardContent, B as Button } from "./chef-hat-MyC67ttw.js";
import { u as useAuth } from "./select-nHZOmZ0P.js";
import { I as Input } from "./input-UBFixYsV.js";
import { t as toast } from "./router-LY7BzENe.js";
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }]
];
const Ban = createLucideIcon("ban", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
function ChipInput({ value, onChange, placeholder, suggestions }) {
  const { t } = useLang();
  const [draft, setDraft] = reactExports.useState("");
  const add = (raw) => {
    const v = raw.trim().toLowerCase();
    if (!v) return;
    if (value.includes(v)) return;
    onChange([...value, v]);
    setDraft("");
  };
  const remove = (v) => onChange(value.filter((x) => x !== v));
  const onKey = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      add(draft);
    } else if (e.key === "Backspace" && !draft && value.length) {
      remove(value[value.length - 1]);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-2 min-h-[2rem]", children: value.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-sm py-1 pr-1", children: [
      v,
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => remove(v), className: "ml-1 hover:text-destructive", "aria-label": `Remover ${v}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" }) })
    ] }, v)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: draft,
        onChange: (e) => setDraft(e.target.value),
        onKeyDown: onKey,
        onBlur: () => draft && add(draft),
        placeholder: placeholder ?? t("typeAndEnter"),
        maxLength: 60
      }
    ),
    suggestions && suggestions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap gap-1", children: suggestions.filter((s) => !value.includes(s)).slice(0, 8).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => add(s),
        className: "text-xs px-2 py-1 rounded-full border border-border bg-background hover:bg-secondary transition",
        children: [
          "+ ",
          s
        ]
      },
      s
    )) })
  ] });
}
const INGREDIENTS = [
  { key: "mushrooms", en: "mushrooms", pt: "cogumelos" },
  { key: "coriander", en: "coriander", pt: "coentros" },
  { key: "olives", en: "olives", pt: "azeitonas" },
  { key: "anchovies", en: "anchovies", pt: "anchovas" },
  { key: "blue_cheese", en: "blue cheese", pt: "queijo azul" },
  { key: "garlic", en: "garlic", pt: "alho" },
  { key: "onion", en: "onion", pt: "cebola" },
  { key: "pepper", en: "pepper", pt: "pimento" },
  { key: "seafood", en: "seafood", pt: "marisco" },
  { key: "liver", en: "liver", pt: "fígado" }
];
function toLocalized(labelOrKey, lang) {
  const lower = labelOrKey.trim().toLowerCase();
  const found = INGREDIENTS.find((p) => p.key === lower || p.en === lower || p.pt === lower);
  if (found) return lang === "en" ? found.en : found.pt;
  return labelOrKey;
}
function toCanonical(labelOrKey) {
  const lower = labelOrKey.trim().toLowerCase();
  const found = INGREDIENTS.find((p) => p.key === lower || p.en === lower || p.pt === lower);
  if (found) return found.key;
  return lower;
}
function DislikedIngredients() {
  const { user } = useAuth();
  const { t, lang } = useLang();
  const [rawList, setRawList] = reactExports.useState([]);
  const [list, setList] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const suggestions = INGREDIENTS.map((p) => lang === "en" ? p.en : p.pt);
  reactExports.useEffect(() => {
    if (!user) return;
    supabase.from("profiles").select("disliked_ingredients").eq("user_id", user.id).maybeSingle().then(({ data }) => {
      const raw = data?.disliked_ingredients ?? [];
      setRawList(raw);
      setList(raw.map((it) => toLocalized(it, lang === "en" ? "en" : "pt")));
    });
  }, [user, lang]);
  const save = async () => {
    if (!user) return;
    setLoading(true);
    const canonical = rawList.length > 0 ? rawList : list.map((l) => toCanonical(l));
    const { error } = await supabase.from("profiles").update({ disliked_ingredients: canonical }).eq("user_id", user.id);
    setLoading(false);
    if (error) toast.error(t("saveError"));
    else {
      setRawList(canonical);
      toast.success(t("prefsSaved"));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ban, { className: "h-5 w-5 text-primary" }),
      t("dislikedTitle")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: t("dislikedDesc") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChipInput, { value: list, onChange: setList, placeholder: t("dislikedPlaceholder"), suggestions }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: save, disabled: loading, size: "sm", children: loading ? t("saving") : t("savePrefs") })
    ] })
  ] });
}
function useProfilePrefs() {
  const { user } = useAuth();
  const [disliked, setDisliked] = reactExports.useState([]);
  const [diet, setDiet] = reactExports.useState("omnivore");
  reactExports.useEffect(() => {
    if (!user) return;
    supabase.from("profiles").select("disliked_ingredients, diet").eq("user_id", user.id).maybeSingle().then(({ data }) => {
      if (data?.disliked_ingredients) setDisliked(data.disliked_ingredients);
      if (data?.diet) setDiet(data.diet);
    });
  }, [user]);
  return { disliked, diet };
}
export {
  Badge as B,
  ChipInput as C,
  DislikedIngredients as D,
  INGREDIENTS as I,
  toLocalized as t,
  useProfilePrefs as u
};
