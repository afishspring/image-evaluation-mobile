<template>
    <div class="card">
      <img :src="data.img" alt="Image" class="card-img">
      <div class="card-body">
        <img :src="data.avatar" alt="Avatar" class="avatar">
        <h3 class="title">{{ data.title }}</h3>
        <p class="user">{{ data.user }}</p>
        <div @click="toggleLike">
          <img v-if="state.liked" src="@/assets/like.svg" alt="Liked" class="icon" />
          <img v-else src="@/assets/dislike.svg" alt="Not Liked" class="icon" />
        </div>
      </div>
    </div>
  </template>
  
<script setup>
import { defineProps, reactive } from 'vue';

const props = defineProps({
  data: Object
});

const state = reactive({
  liked: props.data.liked
});

const toggleLike = () => {
  state.liked = !state.liked;
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
}

.card-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card-body {
  padding: 16px;
  position: relative;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.title {
  font-size: 1.2em;
  margin: 0.5em 0;
}

.user {
  color: #555;
}

.icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  bottom: 16px;
  right: 16px;
}
</style>
