<template>
    <div class="container-water-fall">
        <div>
            <button @click="loadmore">loadmore</button>
            <button @click="mix">mix</button>
            <button @click="switchCol(5)">5列</button>
            <button @click="switchCol(8)">8列</button>
            <button @click="switchCol(10)">10列</button>
        </div>

        <div :col="col" :width="itemWidth" :gutterWidth="gutterWidth" @loadmore="loadmore" @scroll="scroll">
            <div class="cell-item" v-for="(item, index) in localData" :key="index">
                <img v-if="item.img" :src="item.img" alt="加载错误" />
                <div class="item-body">
                    <div class="item-desc">{{ item.title }}</div>
                    <div class="item-footer">
                        <div class="avatar" :style="{ backgroundImage: `url(${item.avatar})` }"></div>
                        <div class="name">{{ item.user }}</div>
                        <div class="like" :class="item.liked ? 'active' : ''">
                            <i></i>
                            <div class="like-total">{{ item.liked }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
    data: {
        type: Array,
        required: true
    }
});

const localData = ref([...props.data]);  // Create a local copy of the data

// Watch for changes in the prop and update the local data accordingly
watch(() => props.data, (newData) => {
    localData.value = [...newData];
});

const col = ref(5);

const itemWidth = computed(() => {
    return 138 * 0.5 * (document.documentElement.clientWidth / 375);
});

const gutterWidth = computed(() => {
    return 9 * 0.5 * (document.documentElement.clientWidth / 375);
});

const scroll = (scrollData) => {
    console.log(scrollData);
};

const switchCol = (newCol) => {
    col.value = newCol;
    console.log(col.value);
};

const loadmore = () => {
    localData.value = localData.value.concat(localData.value);
};
</script>

<style>
/* Add your styles here */
</style>