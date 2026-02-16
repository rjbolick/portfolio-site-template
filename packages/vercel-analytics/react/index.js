const React = require("react");
const Script = require("next/script").default;

function Analytics() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      Script,
      {
        id: "vercel-analytics-init",
        strategy: "afterInteractive",
      },
      "window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };"
    ),
    React.createElement(Script, {
      src: "/_vercel/insights/script.js",
      strategy: "afterInteractive",
    })
  );
}

module.exports = {
  Analytics,
};
