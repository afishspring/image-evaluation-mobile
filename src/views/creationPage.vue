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
import { readData } from '@/utils/readData.js'

const columns = ref(3);
const data = ref(readData());

const gridClass = computed(() => {
  switch (columns.value) {
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
  