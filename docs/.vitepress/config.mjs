import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "泥屁屁",
  titleTemplate: "webTools",
  description: "webTools",
  lang: "zh",
  // base: "/webTools/",
  lastUpdatedText: "上次更新", // 上次更新时间显示文本
  lastUpdated: true, // 显示页面最后更新时间
  cleanUrls: "without-subfolders", // 删除路径中的.html后缀
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
    lineNumbers: true, // 显示行号
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    outline: {
      label: "目录",
      level: "deep",
    },
    sidebar: generateSidebar({
      /*
       * For detailed instructions, see the links below:
       * https://github.com/jooy2/vitepress-sidebar#options
       */
      documentRootPath: "/docs",
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      includeFolderIndexFile: false, // 是否展示文件夹中index.md
      useFolderTitleFromIndexFile: true,
      sortMenusByFrontmatterOrder:true,
      collapsed: false, // 是否展开
      excludeFiles: ["markdown-examples.md", "api-examples.md"],
    }),
    nav: [
      { text: "🚀首页", link: "/" },
      { text: "🧰前端导航", link: "/9-other/nav" },
      { text: "📣每日60秒", link: "/9-other/60s" },
      { text: "🐳关于我们", link: "/9-other/team" },
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },

    docFooter: {
      // 文档底部文本
      prev: "上一节",
      next: "下一节",
    },
    externalLinkIcon: true,
    returnToTopLabel: "返回顶部",
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: "菜单",
    footer: {
      message: "本文档遵循 MIT 协议",
      copyright:
        'Copyright © 2023 ❤️ <a href="https://github.com/9075512">泥屁屁</a>',
    },
    // sidebar: [
    // 	{
    // 		text: '🔥开始',
    // 		items: [{ text: '二十个知识点，学前端必知！', link: '/web' }],
    // 	},
    // 	{
    // 		text: '🍊前端',
    // 		items: [{ text: '数组常用方法', link: '/arrTools' }],
    // 	},
    // 	{
    // 		text: '🍉杂七杂八',
    // 		items: [
    // 			{ text: '每天60秒读懂世界', link: '/60s' },
    // 			{ text: '关于我们', link: '/team' },
    // 		],
    // 	},
    // ],

    socialLinks: [{ icon: "github", link: "https://github.com/9075512" }],
  },
});
