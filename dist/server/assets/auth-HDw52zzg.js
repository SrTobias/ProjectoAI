import { T as reactExports, K as jsxRuntimeExports } from "./server-bvgxQfr6.js";
import { u as useNavigate, t as toast } from "./router-LY7BzENe.js";
import { u as useAuth, a as LoaderCircle, L as Languages, S as Select, d as SelectTrigger, e as SelectValue, b as SelectContent, c as SelectItem } from "./select-nHZOmZ0P.js";
import { k as supabase, m as useLang, C as Card, c as CardHeader, e as ChefHat, d as CardTitle, b as CardDescription, a as CardContent, B as Button, s as saveUserLanguage } from "./chef-hat-MyC67ttw.js";
import { I as Input } from "./input-UBFixYsV.js";
import { L as Label } from "./label-BVZWD7Lu.js";
import { T as Tabs, b as TabsList, c as TabsTrigger, a as TabsContent } from "./tabs-CMqfoWAy.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./worker-entry-EldB-nVv.js";
import "node:events";
var package_default = {
  version: "1.1.2"
};
var EXPECTED_MESSAGE_TYPE = "authorization_response";
var DEFAULT_OAUTH_BROKER_URL = "/~oauth/initiate";
var DEFAULT_SUPPORTED_OAUTH_ORIGINS = ["https://oauth.lovable.app", "https://lovable.dev"];
var DEFAULT_MOBILE_DEEP_LINK_REDIRECT_URI = "lovable://oauth-callback";
var DEFAULT_DESKTOP_LOCALHOST_REDIRECT_URI = "http://127.0.0.1/iframe-oauth/callback";
var POPUP_CHECK_INTERVAL_MS = 500;
var IFRAME_FALLBACK_TIMEOUT_MS = 12e4;
function startWebMessageListener(supportedOrigins) {
  let resolvePromise;
  const promise = new Promise((resolve) => {
    resolvePromise = resolve;
  });
  const callback = (e) => {
    const isValidOrigin = supportedOrigins.some((origin) => e.origin === origin);
    if (!isValidOrigin) {
      return;
    }
    const data = e.data;
    if (!data || typeof data !== "object") {
      return;
    }
    if (data.type !== EXPECTED_MESSAGE_TYPE) {
      return;
    }
    resolvePromise(data.response);
  };
  const cleanup = () => {
    window.removeEventListener("message", callback);
  };
  window.addEventListener("message", callback);
  return {
    cleanup,
    messagePromise: promise
  };
}
function getPopupDimensions(isInIframe) {
  const hasBrowserPosition = window.screenX !== 0 || window.screenY !== 0 || !isInIframe;
  const width = hasBrowserPosition ? window.outerWidth * 0.5 : window.screen.width * 0.5;
  const height = hasBrowserPosition ? window.outerHeight * 0.5 : window.screen.height * 0.5;
  const left = hasBrowserPosition ? window.screenX + (window.outerWidth - width) / 2 : (window.screen.width - width) / 2;
  const top = hasBrowserPosition ? window.screenY + (window.outerHeight - height) / 2 : (window.screen.height - height) / 2;
  return { width, height, left, top };
}
function processOAuthResponse(data, expectedState) {
  if (data.state !== expectedState) {
    return { error: new Error("State is invalid") };
  }
  if (data.error) {
    if (data.error === "legacy_flow") {
      return {
        error: new Error("This flow is not supported in Preview mode. Please open the app in a new tab to sign in.")
      };
    }
    return { error: new Error(data.error_description ?? "Sign in failed") };
  }
  if (!data.access_token || !data.refresh_token) {
    return { error: new Error("No tokens received") };
  }
  return {
    tokens: { access_token: data.access_token, refresh_token: data.refresh_token },
    error: null
  };
}
function isDevice() {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod|Android/i.test(ua))
    return true;
  if (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1)
    return true;
  return false;
}
function generateState() {
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    return [...crypto.getRandomValues(new Uint8Array(16))].map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
function createAuth(config = {}) {
  const oauthBrokerUrl = config.oauthBrokerUrl ?? DEFAULT_OAUTH_BROKER_URL;
  const supportedOAuthOrigins = config.supportedOAuthOrigins ?? DEFAULT_SUPPORTED_OAUTH_ORIGINS;
  async function signInWithOAuth(provider, opts = {}) {
    let isInIframe = false;
    try {
      isInIframe = window.self !== window.top;
    } catch {
      isInIframe = true;
    }
    const ua = navigator.userAgent;
    const isMobileApp = /LovableApp\//.test(ua);
    const isDesktopApp = !isMobileApp && /lovable/i.test(ua);
    const state = generateState();
    let redirectUri = opts.redirect_uri ?? window.location.origin;
    if (isMobileApp && isInIframe) {
      redirectUri = DEFAULT_MOBILE_DEEP_LINK_REDIRECT_URI;
    } else if (isDesktopApp && isInIframe) {
      redirectUri = DEFAULT_DESKTOP_LOCALHOST_REDIRECT_URI;
    }
    const params = new URLSearchParams({
      ...opts.extraParams,
      provider,
      redirect_uri: redirectUri,
      state
    });
    if (!isInIframe) {
      window.location.href = `${oauthBrokerUrl}?${params.toString()}`;
      return { error: null, redirected: true };
    }
    if (!isMobileApp && !isDesktopApp) {
      params.set("response_mode", "web_message");
    }
    const url = `${oauthBrokerUrl}?${params.toString()}`;
    const effectiveOrigins = isDesktopApp ? [...supportedOAuthOrigins, window.location.origin] : supportedOAuthOrigins;
    const { messagePromise, cleanup } = startWebMessageListener(effectiveOrigins);
    let popup;
    if (isDevice()) {
      popup = window.open(url, "_blank");
    } else {
      const { width, height, left, top } = getPopupDimensions(isInIframe);
      popup = window.open(url, "oauth", `width=${width},height=${height},left=${left},top=${top}`);
    }
    if (!popup && (isMobileApp || isDesktopApp)) {
      let webViewTimeoutId;
      const webViewTimeoutPromise = new Promise((_, reject) => {
        webViewTimeoutId = setTimeout(() => {
          reject(new Error("OAuth timed out waiting for response"));
        }, IFRAME_FALLBACK_TIMEOUT_MS);
      });
      try {
        const data = await Promise.race([messagePromise, webViewTimeoutPromise]);
        return processOAuthResponse(data, state);
      } catch (error) {
        return { error: error instanceof Error ? error : new Error(String(error)) };
      } finally {
        if (webViewTimeoutId)
          clearTimeout(webViewTimeoutId);
        cleanup();
      }
    }
    if (!popup) {
      cleanup();
      return { error: new Error("Popup was blocked") };
    }
    let popupCheckInterval;
    const popupClosedPromise = new Promise((_, reject) => {
      popupCheckInterval = setInterval(() => {
        if (popup.closed) {
          clearInterval(popupCheckInterval);
          reject(new Error("Sign in was cancelled"));
        }
      }, POPUP_CHECK_INTERVAL_MS);
    });
    try {
      const data = await Promise.race([messagePromise, popupClosedPromise]);
      return processOAuthResponse(data, state);
    } catch (error) {
      return {
        error: error instanceof Error ? error : new Error(String(error))
      };
    } finally {
      clearInterval(popupCheckInterval);
      cleanup();
      popup?.close();
    }
  }
  return {
    signInWithOAuth
  };
}
if (typeof window !== "undefined") {
  window.__lovable_cloud_auth_js_version = package_default.version;
}
function createLovableAuth(config = {}) {
  return createAuth(config);
}
const lovableAuth = createLovableAuth();
const lovable = {
  auth: {
    signInWithOAuth: async (provider, opts) => {
      const result = await lovableAuth.signInWithOAuth(provider, {
        redirect_uri: opts?.redirect_uri,
        extraParams: {
          ...opts?.extraParams
        }
      });
      if (result.redirected) {
        return result;
      }
      if (result.error) {
        return result;
      }
      try {
        await supabase.auth.setSession(result.tokens);
      } catch (e) {
        return { error: e instanceof Error ? e : new Error(String(e)) };
      }
      return result;
    }
  }
};
function AuthPage() {
  const {
    user,
    loading
  } = useAuth();
  const navigate = useNavigate();
  const {
    lang,
    setLang,
    t
  } = useLang();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (user) navigate({
      to: "/"
    });
  }, [user, navigate]);
  const signIn = async () => {
    setBusy(true);
    const {
      error
    } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    setBusy(false);
    if (error) toast.error(error.message);
    else navigate({
      to: "/"
    });
  };
  const signUp = async () => {
    setBusy(true);
    const {
      error
    } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin
      }
    });
    setBusy(false);
    if (error) toast.error(error.message);
    else toast.success(t("accountCreated"));
  };
  const forgotPassword = async () => {
    if (!email) {
      toast.error(t("enterEmailFirst"));
      return;
    }
    setBusy(true);
    const {
      error
    } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`
    });
    setBusy(false);
    if (error) toast.error(error.message);
    else toast.success(t("resetSent"));
  };
  const google = async () => {
    const r = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin
    });
    if (r.error) toast.error(t("googleError"));
  };
  const handleLanguageChange = async (newLang) => {
    setLang(newLang);
    if (user) {
      await saveUserLanguage(user, newLang);
    }
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin" }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen grid place-items-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "w-full max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "text-center relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-4 top-4 flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: lang, onValueChange: (v) => handleLanguageChange(v), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 w-[90px] text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "pt", children: t("langPt") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "en", children: t("langEn") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChefHat, { className: "h-10 w-10 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-3xl", children: t("welcome") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: t("welcomeSub") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "w-full mb-4", onClick: google, children: t("continueGoogle") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-xs text-muted-foreground mb-4", children: t("orEmail") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "signin", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid grid-cols-2 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "signin", children: t("signIn") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "signup", children: t("signUp") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "signin", className: "space-y-3 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: t("email") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", value: email, onChange: (e) => setEmail(e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: t("password") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", value: password, onChange: (e) => setPassword(e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full", onClick: signIn, disabled: busy, children: busy ? "..." : t("signIn") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: forgotPassword, disabled: busy, className: "w-full text-xs text-muted-foreground hover:text-primary underline-offset-4 hover:underline", children: t("forgot") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "signup", className: "space-y-3 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: t("email") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", value: email, onChange: (e) => setEmail(e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: t("password") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", value: password, onChange: (e) => setPassword(e.target.value), minLength: 6 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full", onClick: signUp, disabled: busy, children: busy ? "..." : t("signUp") })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  AuthPage as component
};
