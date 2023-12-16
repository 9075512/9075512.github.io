<!-- .vitepress/theme/Layout.vue -->

<script setup lang="ts">
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { nextTick, provide, watch } from 'vue';
import { ref, onMounted } from 'vue';
import homeHeroInfo from './homeHeroInfo.vue';
import homeHeroImg from './homeHeroImg.vue';
import giscus from './giscus.vue'
import { useRoute, useRouter } from 'vitepress'
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import './rainbow.scss';
// useRouter({
// 	onBeforeRouteChange: () => {
// 		nprogress.start();
// 	},
// 	onAfterRouteChanged: () => {
// 		nprogress.done(true);
// 	}
// })
// const route = useRoute()
// const router = useRouter()
// watch(() => {
// 	nprogress.start();
// 	console.log(router);
	
// 	route.path
// 	nprogress.done(true);
// })

const { isDark } = useData();
const { Layout } = DefaultTheme;
const enableTransitions = () =>
	'startViewTransition' in document &&
	window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
	if (!enableTransitions()) {
		isDark.value = !isDark.value;
		return;
	}

	const clipPath = [
		`circle(0px at ${x}px ${y}px)`,
		`circle(${Math.hypot(
			Math.max(x, innerWidth - x),
			Math.max(y, innerHeight - y)
		)}px at ${x}px ${y}px)`,
	];

	await document.startViewTransition(async () => {
		isDark.value = !isDark.value;
		await nextTick();
	}).ready;

	document.documentElement.animate(
		{ clipPath: isDark.value ? clipPath.reverse() : clipPath },
		{
			duration: 300,
			easing: 'ease-in',
			pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
		}
	);
});

</script>

<template>
	<Layout>
		<template #home-hero-info>
			<homeHeroInfo />
		</template>
		<template #home-hero-image>
			<homeHeroImg />
		</template>
		<template #doc-after>
			<giscus />
		</template>
		
	</Layout>
	
</template>

<style>
#nprogress .bar {
	background: var(--vp-c-brand);
}

#nprogress .spinner-icon {
	border-top-color: var(--vp-c-brand);
	border-left-color: var(--vp-c-brand);
}

::view-transition-old(root),
::view-transition-new(root) {
	animation: none;
	mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
	z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
	z-index: 9999;
}

.VPSwitchAppearance {
	width: 22px !important;
}

.VPSwitchAppearance .check {
	transform: none !important;
}
</style>
<style type="text/css">
.first-loading-wrp {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 90vh;
	min-height: 90vh;
}

.first-loading-wrp>h1 {
	font-size: 30px;
	font-weight: bolder;
}

.first-loading-wrp .loading-wrp {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 98px;
}

.dot {
	position: relative;
	box-sizing: border-box;
	display: inline-block;
	width: 64px;
	height: 64px;
	font-size: 64px;
	transform: rotate(45deg);
	animation: antRotate 1.2s infinite linear;
}

.dot i {
	position: absolute;
	display: block;
	width: 28px;
	height: 28px;
	background-color: #1890ff;
	border-radius: 100%;
	opacity: 0.3;
	transform: scale(0.75);
	transform-origin: 50% 50%;
	animation: antSpinMove 1s infinite linear alternate;
}

.dot i:nth-child(1) {
	top: 0;
	left: 0;
}

.dot i:nth-child(2) {
	top: 0;
	right: 0;
	-webkit-animation-delay: 0.4s;
	animation-delay: 0.4s;
}

.dot i:nth-child(3) {
	right: 0;
	bottom: 0;
	-webkit-animation-delay: 0.8s;
	animation-delay: 0.8s;
}

.dot i:nth-child(4) {
	bottom: 0;
	left: 0;
	-webkit-animation-delay: 1.2s;
	animation-delay: 1.2s;
}

@keyframes antRotate {
	to {
		-webkit-transform: rotate(405deg);
		transform: rotate(405deg);
	}
}

@-webkit-keyframes antRotate {
	to {
		-webkit-transform: rotate(405deg);
		transform: rotate(405deg);
	}
}

@keyframes antSpinMove {
	to {
		opacity: 1;
	}
}

@-webkit-keyframes antSpinMove {
	to {
		opacity: 1;
	}
}
</style>
