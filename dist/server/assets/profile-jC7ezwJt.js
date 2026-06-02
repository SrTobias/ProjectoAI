import { T as reactExports, K as jsxRuntimeExports } from "./server-bvgxQfr6.js";
import { t as toast, g as getStoredTheme, T as THEMES, a as applyTheme, u as useNavigate } from "./router-LY7BzENe.js";
import { u as useAuth, C as Check, a as LoaderCircle } from "./select-nHZOmZ0P.js";
import { h as createLucideIcon, m as useLang, k as supabase, C as Card, c as CardHeader, d as CardTitle, a as CardContent, B as Button, f as cn } from "./chef-hat-MyC67ttw.js";
import { H as Header, U as User } from "./Header-DMi4bBgq.js";
import { D as DislikedIngredients } from "./DislikedIngredients-BUB4QkWZ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./worker-entry-EldB-nVv.js";
import "node:events";
import "./input-UBFixYsV.js";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
];
const Palette = createLucideIcon("palette", __iconNode$1);
const __iconNode = [
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z", key: "4rw317" }],
  [
    "path",
    {
      d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",
      key: "10xrj0"
    }
  ],
  ["path", { d: "m13 12 4-4", key: "1hckqy" }],
  ["path", { d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2", key: "1p4srx" }]
];
const Salad = createLucideIcon("salad", __iconNode);
function DietSelector() {
  const { user } = useAuth();
  const { t } = useLang();
  const [diet, setDiet] = reactExports.useState("omnivore");
  const [loading, setLoading] = reactExports.useState(false);
  const DIET_OPTIONS = [
    { value: "omnivore", label: t("dietOmnivore"), description: t("dietOmnivoreDesc") },
    { value: "vegetarian", label: t("dietVegetarian"), description: t("dietVegetarianDesc") },
    { value: "vegan", label: t("dietVegan"), description: t("dietVeganDesc") }
  ];
  reactExports.useEffect(() => {
    if (!user) return;
    supabase.from("profiles").select("diet").eq("user_id", user.id).maybeSingle().then(({ data }) => {
      if (data?.diet) setDiet(data.diet);
    });
  }, [user]);
  const save = async () => {
    if (!user) return;
    setLoading(true);
    const { error } = await supabase.from("profiles").update({ diet }).eq("user_id", user.id);
    setLoading(false);
    if (error) toast.error(t("dietError"));
    else toast.success(t("dietSaved"));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Salad, { className: "h-5 w-5 text-primary" }),
      t("dietType")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: t("dietDesc") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: DIET_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "label",
        {
          className: `flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${diet === option.value ? "border-primary bg-primary/5" : "border-border hover:bg-secondary/50"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "radio",
                name: "diet",
                value: option.value,
                checked: diet === option.value,
                onChange: () => setDiet(option.value),
                className: "mt-1 h-4 w-4 accent-primary"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: option.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: option.description })
            ] })
          ]
        },
        option.value
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: save, disabled: loading, size: "sm", children: loading ? t("savingDiet") : t("saveDiet") })
    ] })
  ] });
}
function ThemeSelector() {
  const { t } = useLang();
  const [current, setCurrent] = reactExports.useState("warm-sand");
  reactExports.useEffect(() => {
    setCurrent(getStoredTheme());
  }, []);
  const pick = (id) => {
    setCurrent(id);
    applyTheme(id);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "h-5 w-5 text-primary" }),
      t("themeTitle")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: t("themeDesc") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: THEMES.map((th) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => pick(th.id),
          className: cn(
            "relative rounded-lg border-2 p-3 text-left transition-all hover:border-primary/50",
            current === th.id ? "border-primary" : "border-border"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-2", children: th.swatch.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "h-6 w-6 rounded-full border border-black/10",
                style: { backgroundColor: c }
              },
              i
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: th.name }),
              current === th.id && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-primary" })
            ] })
          ]
        },
        th.id
      )) })
    ] })
  ] });
}
function ProfilePage() {
  const {
    user,
    session,
    loading
  } = useAuth();
  const [busy, setBusy] = reactExports.useState(false);
  const navigate = useNavigate();
  const {
    t
  } = useLang();
  reactExports.useEffect(() => {
    if (!loading && !user) navigate({
      to: "/auth"
    });
  }, [loading, user, navigate]);
  const handleResetPassword = () => {
    navigate({
      to: "/reset-password"
    });
  };
  const handleDeleteAccount = async () => {
    if (!window.confirm(t("deleteAccountConfirmation"))) return;
    if (!session?.access_token) {
      toast.error(t("somethingWrong"));
      return;
    }
    setBusy(true);
    const response = await fetch("/api/delete-account", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session.access_token}`
      }
    });
    setBusy(false);
    if (!response.ok) {
      const data = await response.json().catch(() => null);
      toast.error(data?.error ?? t("somethingWrong"));
      return;
    }
    await supabase.auth.signOut();
    toast.success(t("accountDeleted"));
    navigate({
      to: "/auth"
    });
  };
  if (loading || !user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto px-4 py-10 max-w-3xl space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl", children: t("profileTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: t("profileSub") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-5 w-5 text-primary" }),
          t("account")
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            t("email"),
            ": ",
            user.email
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full sm:w-auto", variant: "secondary", onClick: handleResetPassword, disabled: busy, children: t("resetPassword") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full sm:w-auto", variant: "destructive", onClick: handleDeleteAccount, disabled: busy, children: busy ? "..." : t("deleteAccount") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DietSelector, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeSelector, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DislikedIngredients, {})
    ] })
  ] });
}
export {
  ProfilePage as component
};
