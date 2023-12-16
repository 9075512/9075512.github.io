<script setup>
import { useData } from 'vitepress';
import { ref, onMounted } from 'vue';
import TypeIt from 'typeit';
import 'animate.css/animate.min.css';
const hitokotoId = ref(null);
const instance = ref(null);

let hitokoto = [
	'无情不似多情苦，一寸还成千万缕。',
	'曲高必然和寡，英雄总是孤独。',
	'生者，生者，路化冰河。',
	'无所畏惧，你最好有心理准备。',
];

// 实例化
onMounted(() => {
	new TypeIt('#hitokoto', {
		strings: hitokoto,
		cursorChar: '💖', //用于光标的字符。HTML也可以
		speed: 150,
		lifeLike: true, // 使打字速度不规则
		cursor: true, //在字符串末尾显示闪烁的光标
		breakLines: false, // 控制是将多个字符串打印在彼此之上，还是删除这些字符串并相互替换
		loop: true, //是否循环
	}).go();

});



// 获取一言
async function fetchHitokoto() {
	const response = await fetch('https://v1.hitokoto.cn');
	const { uuid, hitokoto: hitokotoText } = await response.json();
	hitokotoId.value = uuid;
	hitokoto.value = hitokotoText;
}
// 打开一言
function openHitokoto() {
	window.open(`https://hitokoto.cn/?uuid=${hitokotoId.value}`);
}
// fetchHitokoto();
</script>

<template>
	<h1 class="name">
		<span class="clip">泥屁屁</span>
	</h1>
	<p class="text animate__animated animate__bounceInLeft">webTools</p>
	<p id="hitokoto" class="tagline" alt="点击刷新一言"></p>
	
</template>
<style  scoped>
.name {
	/* color: var(--vp-home-hero-name-color); */
}

.name,
.text {
	max-width: 392px;
	letter-spacing: -0.4px;
	line-height: 40px;
	font-size: 32px;
	font-weight: 700;
	white-space: pre-wrap;
}
.clip {
	background: var(--vp-home-hero-name-background);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: var(--vp-home-hero-name-color);
	animation: shadow 1s forwards;
	
}
@keyframes shadow {
	from {
		letter-spacing: -50px;
		filter: blur(10px);
	}
	to {
		letter-spacing: 10px;
		filter: blur(0px);
	}
}

.tagline {
	padding-top: 8px;
	max-width: 392px;
	line-height: 28px;
	font-size: 18px;
	font-weight: 500;
	white-space: pre-wrap;
	color: var(--vp-c-brand);
	cursor: pointer;
	-webkit-user-select: none; /* Chrome和Safari */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none; /* 其他非标准浏览器 */
}
@media (min-width: 960px) {
	.name,
	.text {
		margin: 0;
		line-height: 64px;
		font-size: 56px;
	}
}
@media (min-width: 640px) {
	.name,
	.text {
		max-width: 576px;
		line-height: 56px;
		font-size: 48px;
	}
}
@media (min-width: 960px) {
	.tagline {
		line-height: 36px;
		font-size: 24px;
	}
}
@media (min-width: 640px) {
	.tagline {
		padding-top: 12px;
		max-width: 576px;
		line-height: 32px;
		font-size: 20px;
	}
}
#animation{
	height: 500px;
}
</style>
