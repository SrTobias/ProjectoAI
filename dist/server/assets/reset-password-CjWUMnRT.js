import { T as reactExports, K as jsxRuntimeExports } from "./server-bvgxQfr6.js";
import { u as useNavigate, t as toast } from "./router-LY7BzENe.js";
import { m as useLang, k as supabase, C as Card, c as CardHeader, e as ChefHat, d as CardTitle, b as CardDescription, a as CardContent, B as Button } from "./chef-hat-MyC67ttw.js";
import { I as Input } from "./input-UBFixYsV.js";
import { L as Label } from "./label-BVZWD7Lu.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./worker-entry-EldB-nVv.js";
import "node:events";
function ResetPasswordPage() {
  const navigate = useNavigate();
  const {
    t
  } = useLang();
  const [password, setPassword] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  const [ready, setReady] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes("type=recovery") || hash.includes("access_token")) {
      setReady(true);
    } else {
      supabase.auth.getSession().then(({
        data
      }) => {
        if (data.session) setReady(true);
        else {
          toast.error(t("invalidLink"));
          navigate({
            to: "/auth"
          });
        }
      });
    }
  }, [navigate, t]);
  const update = async () => {
    if (password.length < 6) {
      toast.error(t("minChars"));
      return;
    }
    setBusy(true);
    const {
      error
    } = await supabase.auth.updateUser({
      password
    });
    setBusy(false);
    if (error) toast.error(error.message);
    else {
      toast.success(t("passwordUpdated"));
      navigate({
        to: "/"
      });
    }
  };
  if (!ready) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen grid place-items-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "w-full max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChefHat, { className: "h-10 w-10 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-3xl", children: t("newPassword") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: t("newPasswordSub") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: t("newPassword") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", value: password, onChange: (e) => setPassword(e.target.value), minLength: 6 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full", onClick: update, disabled: busy, children: busy ? "..." : t("updatePassword") })
    ] })
  ] }) });
}
export {
  ResetPasswordPage as component
};
