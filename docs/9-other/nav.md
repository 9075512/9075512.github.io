---
title: 前端导航
layoutClass: m-nav-layout
# outline: [2, 3, 4]
---

<script setup>
import { navData } from './nav/navData';

import MNavLinks from './nav/nav.vue'
</script>

# 前端导航

<MNavLinks v-for="(item, index) in navData" :title="item.title" :items="item.items"></MNavLinks>
