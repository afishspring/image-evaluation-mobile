<template>
    <Waterfall :data='data' :col='col' />
</template>

<script setup>
import { ref } from 'vue';
//import waterfall from 'vue-waterfall2'
import Waterfall from '@/components/waterFall1.vue'
const data = ref(generateData(1));
const col = ref(1);

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

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
}
</style>
