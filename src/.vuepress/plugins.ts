import { ThemePluginsOptions } from "vuepress-theme-hope";

const options: ThemePluginsOptions = {
  blog: true,
    search: true,
    
    icon: {
      assets: "iconify",
    },

    components: {
        components: ["Badge", "VPCard"],
    },
};

export default options;