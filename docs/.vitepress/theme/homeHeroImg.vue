<script setup>
import { useData } from 'vitepress';
import { ref, onMounted } from 'vue';
import 'animate.css/animate.min.css';

import lottie from 'lottie-web'
import data from '../../public/animation/2.json'


// 实例化
onMounted(() => {
  const icon = document.getElementById('animation')
  lottie.loadAnimation({
    container: icon, // 包含动画的dom元素
    renderer: 'svg', // 渲染出来的是什么格式
    loop: true, // 循环播放
    autoplay: true, // 自动播放
    animationData: data, // 动画json的路径
  })


});


</script>

<template>
  <div id="animation" class="image"></div>
</template>
<style scoped>
#animation {
  width: 100%;
  height: 100%;
}


.image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    max-width: 200px;
    max-height: 200px;
    transform: translate(-50%, -50%);
}
@media (min-width: 640px) {
  .image {
    max-width: 200px;
    max-height: 200px;
   
    transform: translate(-50%, -50%) scale(1.7);
  }
}
</style>
