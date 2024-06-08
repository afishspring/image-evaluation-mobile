<template>
  <div class="card">
    <img :src="data.img" alt="Image" class="card-img">
    <div class="card-body">
      <div class="header">
        <img :src="data.avatar" alt="Avatar" class="avatar">
        <div>
          <h3 class="title">{{ data.title }}</h3>
          <p class="user">{{ data.user }}</p>
        </div>
      </div>
      <div @click="toggleLike">
        <img v-if="state.liked" src="@/assets/like.svg" alt="Liked" class="icon" />
        <img v-else src="@/assets/dislike.svg" alt="Not Liked" class="icon" />
      </div>
      <p class="totalLike">{{ state.like }}</p>
    </div>
  </div>
</template>
<script setup>
import { defineProps, reactive } from 'vue';

const props = defineProps({
  data: Object
});

const state = reactive({
  liked: props.data.liked,
  like: props.data.like
});

const toggleLike = () => {
  state.liked = !state.liked;
  state.like += state.liked ? 1 : -1;
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: white
}

.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 10px;
  position: relative;
}

.header {
  display: flex;
  align-items: center;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 16px;
}

.title {
  font-size: 1.2em;
  margin: 0;
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
  right: 50px;
}

.totalLike {
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  bottom: 12px;
  right: 16px;
}
</style>
