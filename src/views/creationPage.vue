<template>
    <div>
      <div class="controls">
        <label for="columns">Columns: </label>
        <input type="number" id="columns" v-model.number="columns" min="1" max="6">
      </div>
      <div :class="gridClass">
        <Card v-for="(item, index) in data" :key="index" :data="item" />
      </div>
    </div>
  </template>
  
<script setup>
import { ref, computed } from 'vue';
import Card from '@/components/CardComponent.vue';

const columns = ref(3);
const data = ref(generateData(12));

function generateData(count) {
  const placeholderImg = "https://via.placeholder.com/150";
  const placeholderAvatar = "https://via.placeholder.com/50";
  return Array.from({ length: count }, (_, i) => ({
    img: placeholderImg,
    title: `Title ${i + 1}`,
    avatar: placeholderAvatar,
    user: `User ${i + 1}`,
    liked: Math.random() > 0.5 // 随机生成 true 或 false
  }));
}

const gridClass = computed(() => {
  switch(columns.value) {
    case 2:
      return 'grid grid-cols-2';
    case 3:
      return 'grid grid-cols-3';
    case 5:
      return 'grid grid-cols-5';
    default:
      return 'grid grid-cols-3';
  }
});
</script>

<style scoped>
.controls {
  margin-bottom: 16px;
}

.grid {
  display: grid;
  gap: 16px;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-cols-5 {
  grid-template-columns: repeat(5, 1fr);
}
</style>
  