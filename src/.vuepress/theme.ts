import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import author from "./author.js"
import plugins from "./plugins.js";
import markdown from "./markdown.js";

export default hopeTheme({
  hostname: "https://oldvincent.github.io",

  author: {
    name: "Haoyu Jia",
    url: "https://github.com/OldVincent",
  },

  logo: "/logo.svg",

  repo: "OldVincent/oldvincent.github.io",
  repoDisplay: false,

  // 页脚
  footer: "A developer who stops learning is a developer who starts dying.",
  displayFooter: true,

  docsRepo: "OldVincent/oldvincent.github.io",
  docsDir: "src",
  docsBranch: "main",
  // 是否显示最新更新时间
  lastUpdated: true,
  // 是否显示文章编辑者
  contributors: false,
  // 是否显示编辑链接
  editLink: false,

  markdown: markdown,

  pageInfo: ["Author", "Date", "Word", "ReadingTime", "Category", "Tag"],

  // 设置暗黑模式为手动切换
  darkmode: "toggle",

  // 介绍栏
  blog: author,
  // 导航栏
  navbar,
  // 侧边栏
  sidebar,

  // 博客相关数据热更新
  hotReload: true,

  plugins: plugins
});
