import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "Home",
    link: "/",
    icon: "ion:home"
  },
  {
    text: "Insights",
    link: "/insights/README.md",
    icon: "ion:document-text"
  },
  {
    text: "Reports",
    link: "/reports/README.md",
    icon: "ion:library"
  },
  {
    text: "Links",
    icon: "fa-solid:link",
    children: [
      {
        text: "Personal",
        children: [
          { text: "GitHub", icon: "mdi:github", link: "https://github.com/OldVincent" },
          { text: "NuGet", icon: "simple-icons:nuget", link: "https://www.nuget.org/profiles/VincentJia" },
        ],
      },
      {
        text: "Organization",
        children: [
          { text: "Pygmalions", icon: "vaadin:group", link: "https://github.com/Pygmalions" },
          { text: "UTokyo JSK Lab", icon: "ion:school", link: "http://www.jsk.t.u-tokyo.ac.jp/" }
        ]
      },
    ],
  },
]);
