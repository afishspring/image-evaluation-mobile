<template>
    <Waterfall :col="col" :data="data"/>
</template>

<script setup>
import { ref } from 'vue';
import Waterfall from '@/components/waterFall.vue';

const data = ref(generateData(10));
const col = ref(10);

function generateData(length) {
    const placeholderImg = "https://via.placeholder.com/150";
    const placeholderAvatar = "https://via.placeholder.com/50";
    const data = [];

    for (let i = 0; i < length; i++) {
        data.push({
            img: placeholderImg,
            title: `Title ${i + 1}`,
            avatar: placeholderAvatar,
            user: `User ${i + 1}`,
            liked: Math.random() > 0.5 // 随机生成 true 或 false
        });
    }

    console.log(data)

    return data;
}





</script>

<style scoped></style>
