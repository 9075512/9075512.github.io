// https://vitepress.dev/guide/custom-theme
import { h, watch } from "vue";
import DefaultTheme from "vitepress/theme";
import "./style.css";

import { useData } from "vitepress";

import Layout from "./Layout.vue";
import {
  AntDesignContainer,
  ElementPlusContainer,
  NaiveUIContainer,
} from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";


export default {
  ...DefaultTheme,
  Layout: () => {
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "doc-after": () => h(giscus),
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component("demo-preview", ElementPlusContainer);
    
    // if (typeof window !== 'undefined') {
    //   watch(
    //     () => router.route.data.relativePath,
    //     () => updateHomePageStyle(location.pathname === '/webTools/'),
    //     { immediate: true }
    //   )
    // }
  },
};
// Speed up the rainbow animation on home page
function updateHomePageStyle(value) {
  let homePageStyle = ''
  if (value) {
    if (homePageStyle) return;
    homePageStyle = document.createElement("style");
    homePageStyle.innerHTML = `
	  :root {
		animation: rainbow 12s linear infinite !important;
	  }`;
    document.body.appendChild(homePageStyle);
  } else {
    if (!homePageStyle) return;

    homePageStyle.remove();
    homePageStyle = undefined;
  }
}
// updateHomePageStyle(true)