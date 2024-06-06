<template>
    <div class="container-water-fall">
        <div>
            <button @click="loadmore">loadmore</button>
            <button @click="mix">mix</button>
            <button @click="switchCol(5)">5列</button>
            <button @click="switchCol(8)">8列</button>
            <button @click="switchCol(10)">10列</button>
        </div>

        <waterfall :col="col" :width="itemWidth" :gutterWidth="gutterWidth" @loadmore="loadmore" @scroll="scroll">
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
        </waterfall>
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
* {
    margin: 0;
}

.container-water-fall {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}

.container-water-fall h4 {
    padding-top: 56px;
    padding-bottom: 28px;
    font-family: PingFangSC-Medium;
    font-size: 36px;
    color: #000000;
    letter-spacing: 1px;
    text-align: justify;
}

.container-water-fall button {
    background-color: #ff0;
    color: #24292e;
    border: 1px solid rgba(27, 31, 35, 0.2);
    border-radius: 0.25em;
    width: 100px;
    line-height: 26px;
    font-size: 13px;
    margin: 4px 0;
    margin-right: 4px;
    cursor: pointer;
    outline: none;
}

.container-water-fall button.blue-light {
    background: #27fbc2;
}

.container-water-fall button:hover {
    background-image: linear-gradient(-180deg, #fafbfc, #ccc 90%);
}

.cell-item {
    width: 100%;
    margin-bottom: 10px;
    background: #ffffff;
    border: 2px solid #f0f0f0;
    border-radius: 12px 12px 12px 12px;
    overflow: hidden;
    box-sizing: border-box;
}

.cell-item img {
    width: 100%;
    height: auto;
    display: block;
}

.item-body {
    padding: 12px;
}

.item-desc {
    font-size: 15px;
    color: #333333;
    line-height: 15px;
    font-weight: bold;
}

.item-footer {
    margin-top: 22px;
    position: relative;
    display: flex;
    align-items: center;
}

.avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: contain;
}

.name {
    max-width: 150px;
    margin-left: 10px;
    font-size: 14px;
    color: #999999;
}

.like {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
}

.like.active .like-total {
    color: #ff4479;
}

.like i {
    width: 28px;
    display: block;
}

.like .like-total {
    margin-left: 10px;
    font-size: 12px;
    color: #999999;
}

.githubdata {
    float: right;
    margin-right: 90px;
}

.githubdata img {
    width: 14px;
}
</style>