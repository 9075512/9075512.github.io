<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
const props = defineProps({
    title: String,
    items: Array
})


</script>
<template>
    <h2 v-if="title" :id="title" tabindex="-1">
        {{ title }}
        <a class="header-anchor" :href="`#${title}`" aria-hidden="true"></a>
    </h2>
    <div class="m-nav-links">
       
            <a v-for="(item, index) in items" :key="index" class="m-nav-link" :href="item.link" target="_blank" rel="noreferrer">
                <article class="box">
                    <div class="box-header">
                        <template v-if="!item.noIcon">
                            <div v-if="item.svg" class="icon" v-html="item.svg"></div>
                            <div v-else-if="item.icon && typeof item.icon === 'string'" class="icon">
                                <img :src="withBase(item.icon)" :alt="title"
                                    onerror="this.parentElement.style.display='none'" />
                            </div>
                        </template>
                        <h5 v-if="title" class="title" >
                            {{ item.title }}
                        </h5>
                    </div>
                    <!-- <Badge class="badge" /> -->
                    <p v-if="item.desc" class="desc">{{ item.desc }}</p>
                </article>
            </a>
        
    </div>
</template>

<style lang="scss" scoped>
a {
    text-decoration: none;
}
.box-header{
    display: flex;
    align-items: center;
}
.m-nav-link::after{
   content: '' !important;
   display: none !important;
}
.m-nav-links {
    
    --m-nav-gap: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-row-gap: var(--m-nav-gap);
    grid-column-gap: var(--m-nav-gap);
    grid-auto-flow: row dense;
    justify-content: center;
    margin-top: var(--m-nav-gap);
}

@each $media, $size in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px) {
    @media (min-width: $media) {
        .m-nav-links {
            grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
        }
    }
}

@media (min-width: 960px) {
    .m-nav-links {
        --m-nav-gap: 20px;
    }
}

.m-nav-link {
    --m-nav-icon-box-size: 40px;
    --m-nav-icon-size: 24px;
    --m-nav-box-gap: 12px;

    display: block;
    border: 1px solid var(--vp-c-bg-soft);
    border-radius: 8px;
    height: 100%;
    background-color: var(--vp-c-bg-soft);
    transition: all 0.25s;

    &:hover {
        box-shadow: var(--vp-shadow-2);
        border-color: var(--vp-c-brand);
        text-decoration: initial;
        background-color: var(--vp-c-gray-1);
    }

    .box {
        display: flex;
        flex-direction: column;
        position: relative;
        padding: var(--m-nav-box-gap);
        // height: 100%;
        color: var(--vp-c-text-1);

        &.has-badge {
            padding-top: calc(var(--m-nav-box-gap) + 2px);
        }

        &-header {
            display: flex;
            align-items: center;
        }
    }

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: calc(var(--m-nav-box-gap) - 2px);
        border-radius: 6px;
        width: var(--m-nav-icon-box-size);
        height: var(--m-nav-icon-box-size);
        font-size: var(--m-nav-icon-size);
        background-color: var(--vp-c-gray-3);
        transition: background-color 0.25s;

        :deep(svg) {
            width: var(--m-nav-icon-size);
            fill: currentColor;
        }

        :deep(img) {
            border-radius: 4px;
            width: var(--m-nav-icon-size);
        }
    }

    .title {
        overflow: hidden;
        flex-grow: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 16px;
        font-weight: 600;

        &:not(.no-icon) {
            line-height: var(--m-nav-icon-box-size);
        }
    }

    .badge {
        position: absolute;
        top: 2px;
        right: 0;
        transform: scale(0.8);
    }

    .desc {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-grow: 1;
        margin: calc(var(--m-nav-box-gap) - 2px) 0 0;
        // line-height: 1.5;
        font-size: 12px;
        color: var(--vp-c-text-2);
    }
}

@media (max-width: 960px) {
    .m-nav-link {
        --m-nav-icon-box-size: 36px;
        --m-nav-icon-size: 20px;
        --m-nav-box-gap: 8px;

        .title {
            font-size: 14px;
        }
    }
}</style>
