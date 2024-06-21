<template>
    <div id="app">
        <BookMarks v-if="showSidebar" />
        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import BookMarks from '@/components/BookMarks.vue';

const route = useRoute();
const showSidebar = ref(true);

const updateSidebarVisibility = () => {
    showSidebar.value = route.path !== '/login';
};

watch(route, () => {
    updateSidebarVisibility();
});

onMounted(() => {
    updateSidebarVisibility();
});
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
    height: 100vh;
    background-attachment: fixed;
    background-size: cover;
}

#app {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #2c3e50;
}

.content {
    margin-left: 20%;
    width: 70%;
    height: 100vh;
    padding: 20px;
    display: flex;
    /* overflow-y: auto; */
}
</style>