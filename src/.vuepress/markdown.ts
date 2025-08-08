import { ThemeMarkdownOptions } from "vuepress-theme-hope";

const options: ThemeMarkdownOptions = {
    vPre: true,
    // 启用任务列表
    tasklist: true,
    // 启用组件
    component: true,
    // 启用文件包含
    include: true,
    // 启用 figure
    figure: true,
    // 启用图片懒加载
    imgLazyload: true,
    // 启用图片标记
    imgMark: true,
    // 启用图片大小
    imgSize: true,
    // 启用脚注
    footnote: true,
    // 启用标签页
    tabs: true,
    // 启用代码标签页
    codeTabs: true,
    // 启用下角标
    sub: true,
    // 启用上角标
    sup: true,
    // 启用剧透覆盖
    spoiler: true,
    // 启用CSS属性支持
    attrs: true,
    // 启用标记
    mark: true,
    // 启用对齐
    align: true,
    // 启用ECharts支持
    echarts: true,
    // 启用代码高亮
    highlighter: {
        type: "shiki", // or "prismjs"

        notationDiff: true,
        notationFocus: true,
        notationHighlight: true,
        notationErrorLevel: true,
        notationWordHighlight: true
    },
};

export default options;
