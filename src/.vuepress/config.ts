import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Code Enthusiast",
  description: "Haoyu's Personal Website",

  head: [
    ["link", {rel: "preconnect", href: "https://fonts.googleapis.com"}],
    ["link", {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: ""}],

    // Fonts from Google Font CDN
    ["link", {
      href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Noto+Sans+JP:wght@100..900&family=Noto+Sans+SC:wght@100..900&family=REM:ital,wght@0,100..900;1,100..900&display=swap",
      rel: "stylesheet"
    }],
  ],
  
  theme,
});