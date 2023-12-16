---
order: 10
---

<script setup>
import { ref } from 'vue'
import { VPTeamMembers } from 'vitepress/theme'

let hitokoto = ref('')
// 获取一言
async function fetchHitokoto() {
  const response = await fetch('https://v1.hitokoto.cn')
  const { uuid, hitokoto: hitokotoText } = await response.json()
  hitokoto.value = hitokotoText
}
const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/67473225?v=4',
    name: '叽叽',
    title: '一个菜鸡前端开发',
    links: [
      { icon: 'github', link: 'https://github.com/9075512' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  }
]
fetchHitokoto()
</script>

# 关于我们

<p :class="$style.hitokoto" @click="fetchHitokoto()">{{ hitokoto }}</p>

<VPTeamMembers size="small" :members="members" />

https://wzue.cn

<style module>
  .hitokoto {
    cursor: pointer;
    font-weight: 600;
    background: var(--vp-home-hero-name-background);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: var(--vp-home-hero-name-color);
    -webkit-user-select: none; /* Chrome和Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* 其他非标准浏览器 */
    transition: all 1s;
  }
</style>
