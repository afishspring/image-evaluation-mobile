<template>
    <div class="sidebar">
        <div v-for="(bookmark, index) in bookmarks" :key="index"
            :class="['bookmark', { active: activeRoute === bookmark.route }]" @click="navigate(bookmark.route)"
            :style="{ backgroundColor: bookmark.color }">
            <span class="bookmark-text">{{ bookmark.name }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const bookmarks = [
    { name: '作品展示', route: '/creation', color: '#EF9C66' },
    { name: '图片评分', route: '/evaluation', color: '#FCDC94' },
    { name: '个人主页', route: '/user', color: '#C8CFA0' },
    { name: '退出登录', route: '/', color: '#78ABA8' },
];

const activeRoute = ref(route.path);

const navigate = (path) => {
    router.push(path);
    activeRoute.value = path;
};

watch(route, (newRoute) => {
    activeRoute.value = newRoute.path;
});
</script>

<style scoped>
.sidebar {
    width: 10%;
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding-top: 20px;
    align-items: center;
}

.bookmark {
    width: 150%;
    padding: 10px;
    cursor: pointer;
    transition: transform 0.3s ease;
    clip-path: polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%);
    color: white;
    text-align: center;
    position: relative;
    height: 10vh;
}

.bookmark.active {
    transform: translateX(30px);
}

.bookmark-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>