import { T as reactExports, K as jsxRuntimeExports } from "./server-bvgxQfr6.js";
import { u as useNavigate, t as toast } from "./router-LY7BzENe.js";
import { u as useAuth, a as LoaderCircle } from "./select-nHZOmZ0P.js";
import { h as createLucideIcon, m as useLang, k as supabase, C as Card, a as CardContent, c as CardHeader, d as CardTitle, b as CardDescription, B as Button } from "./chef-hat-MyC67ttw.js";
import { H as Header, a as Heart } from "./Header-DMi4bBgq.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./worker-entry-EldB-nVv.js";
import "node:events";
const __iconNode = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
function FavoritesPage() {
  const {
    user,
    loading
  } = useAuth();
  const navigate = useNavigate();
  const {
    t
  } = useLang();
  const [favs, setFavs] = reactExports.useState([]);
  const [fetching, setFetching] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (!loading && !user) navigate({
      to: "/auth"
    });
  }, [loading, user, navigate]);
  reactExports.useEffect(() => {
    if (!user) return;
    supabase.from("favorites").select("*").order("created_at", {
      ascending: false
    }).then(({
      data,
      error
    }) => {
      if (error) toast.error(error.message);
      else setFavs(data ?? []);
      setFetching(false);
    });
  }, [user]);
  const remove = async (id) => {
    const {
      error
    } = await supabase.from("favorites").delete().eq("id", id);
    if (error) toast.error(error.message);
    else {
      setFavs((f) => f.filter((x) => x.id !== id));
      toast.success(t("favRemoved"));
    }
  };
  if (loading || !user || fetching) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto px-4 py-10 max-w-3xl space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl", children: t("favTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: t("favSub") })
      ] }),
      favs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "py-12 text-center text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-10 w-10 mx-auto mb-3 opacity-40" }),
        t("favEmpty")
      ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: favs.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-2xl", children: f.title }),
            f.description && /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "mt-1", children: f.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: () => remove(f.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-2", children: t("ingredients") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc pl-5 text-sm space-y-1", children: f.ingredients.map((i, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: i }, idx)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-2", children: t("preparation") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "list-decimal pl-5 text-sm space-y-1", children: f.instructions.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: s }, idx)) })
          ] })
        ] })
      ] }, f.id)) })
    ] })
  ] });
}
export {
  FavoritesPage as component
};
