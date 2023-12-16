---
title: 集成giscus评论组件
---

# 集成giscus评论组件

### 简介

这里简单贴一下[giscus官网](https://github.com/giscus/giscus)介绍的优点

> - [开源](https://github.com/giscus/giscus)。🌏
> - 没有跟踪，没有广告，永远免费。📡 🚫
> - 不需要数据库。所有数据都存储在 GitHub 讨论中。
> - 支持[自定义主题](https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#data-theme)！🌗
> - 支持[多种语言](https://github.com/giscus/giscus/blob/main/CONTRIBUTING.md#adding-localizations)。🌐
> - [可广泛配置](https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md)。🔧
> - 自动从 GitHub 获取新评论和编辑。🔃
> - [可以自托管](https://github.com/giscus/giscus/blob/main/SELF-HOSTING.md)！🤳
> - giscus 与 React、Vue 或 Svelte 结合使用(这个vue有坑)
> - 可以非常方便的从gitalk和utterances中迁移

### 封装

使用giscus vue版本会有一点小坑，可以在[该Issue](https://github.com/vuejs/vitepress/issues/1776)中详细看到，所以这里使用giscus提供的原生的JS版进行封装使用：

```vue
<template>
	<div class="comments">
		<component
			v-if="showComment"
			src="https://giscus.app/client.js"
			:is="'script'"
			:key="title"
			:data-repo="giscusConfig.repo"
			:data-repo-id="giscusConfig.repoId"
			:data-category="giscusConfig.category"
			:data-category-id="giscusConfig.categoryId"
			:data-mapping="giscusConfig.mapping"
			:data-strict="giscusConfig.strict"
			:data-reactions-enabled="giscusConfig.reactionsEnabled"
			:data-emit-metadata="giscusConfig.emitMetadata"
			:data-input-position="giscusConfig.inputPosition"
			:data-lang="giscusConfig.lang"
			:data-theme="giscusConfig.theme"
			:data-loading="giscusConfig.loading"
		/>
	</div>
</template>
<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import { useData, useRoute } from "vitepress";

const route = useRoute();

const { title } = useData();

// params generate in https://giscus.app/zh-CN
const giscusConfig = reactive({
	repo: "justin3go/justin3go.github.io",
	repoId: "XXX",
	category: "Q&A",
	categoryId: "XXX",
	mapping: "title",
	strict: "0",
	reactionsEnabled: "1",
	emitMetadata: "0",
	inputPosition: "top",
	theme: "light",
	lang: "zh-CN",
	loading: "lazy",
});

const showComment = ref(true);
watch(
	() => route.path,
	() => {
		showComment.value = false;
		setTimeout(() => {
			showComment.value = true;
		}, 200);
	},
	{
		immediate: true,
	}
);
</script>
<style>
/* // TODO 使用giscus自定义主题结合vitepress主题切换 */
.comments {
	background-color: #ffffff;
	padding: 20px;
	border-radius: 10px;
}
</style>
```

注意上述你不知道怎么填的参数都生成至该网站[giscus.app](https://giscus.app/zh-CN)，这里就不一步步演示了，很简单的可视化操作。

上述代码可以在[github这个位置](https://github.com/Justin3go/justin3go.github.io/blob/master/docs/.vitepress/theme/components/comment.vue)找到，细心的读者可能注意到了留下的`TODO: 使用giscus自定义主题结合vitepress主题切换`，这是因为当前giscus的自定义主题还处于实验性版本，所以就没去做白/夜模式切换适配了，目前仅加了和白色背景保证黑夜模式下可读。

### 使用

封装后使用就非常简单了，由于vitepress提供了[全局doc的插槽](https://vitepress.dev/guide/extending-default-theme#layout-slots)，所以我们直接在定义所有的文章下面`doc-after`都有该评论组件:

```js
// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import "./style.css";
import comment from "./components/comment.vue";

export default {
	...Theme,
	Layout: () => {
		return h(Theme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
			"doc-after": () => h(comment),
		});
	},
	// ...
};
```

::: tip
转自[Justin3go](https://justin3go.com/%E5%8D%9A%E5%AE%A2/2023/06/06%E7%AE%80%E5%8D%95%E4%BC%98%E5%8C%96%E4%B8%8B%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E9%A6%96%E9%A1%B5(%E8%BF%81%E7%A7%BBvitepress-beta%E7%89%88).html#%E9%9B%86%E6%88%90giscus%E8%AF%84%E8%AE%BA%E7%BB%84%E4%BB%B6)
:::