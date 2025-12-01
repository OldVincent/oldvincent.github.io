import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "/resume",
    {
      text: "Insights",
      icon: "pixelarticons:article-multiple",
      prefix: "insights/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Reports",
      icon: "mdi:note-edit",
      prefix: "reports/",
      children: "structure",
      collapsible: true,
    },
  ],
});
