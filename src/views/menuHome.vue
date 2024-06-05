<template>
    <waterfall :col='col' :data="data">
        <img v-if="item.img" :lazy-src="item.img" alt="加载错误" />
    </waterfall>
</template>

<script setup>
import waterfall from '@/components/waterFall.vue'
</script>

<style scoped></style>