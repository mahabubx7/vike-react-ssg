import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setCount((count2) => count2 + 1), children: [
    "Counter ",
    count
  ] });
}
function Page() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Welcome" }),
    "This page is:",
    /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: "Rendered to HTML." }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Interactive. ",
        /* @__PURE__ */ jsx(Counter, {})
      ] })
    ] })
  ] });
}
export {
  Page
};
