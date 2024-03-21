import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "/resume",
    {
      text: "Posts",
      icon: "pixelarticons:article-multiple",
      prefix: "posts/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Notes",
      icon: "mdi:note-edit",
      prefix: "notes/",
      children: "structure",
      collapsible: true,
    },
  ],
});
