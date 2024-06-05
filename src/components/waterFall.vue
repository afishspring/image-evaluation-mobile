<template>
    <div class="container-water-fall">
        <div><button @click="loadmore">loadmore</button> <button @click="mix">mix</button> <button
                @click="switchCol('5')">5列</button> <button @click="switchCol('8')">8列</button> <button
                @click="switchCol('10')">10列</button> </div>

        <waterfall :col='col' :width="itemWidth" :gutterWidth="gutterWidth" :data="data" @loadmore="loadmore"
            @scroll="scroll">
            <div class="cell-item" v-for="(item, index) in data" :key="index">
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


/*
注意:
1. 使用`rem`布局时，需先计算出自适应后的宽度再传值
2. 使用了`waterfall`的父组件,如果样式存在问题，可去掉css `scoped`尝试一下
*/
<script>
export default {
    data() {
        return {
            data: [],
            col: 5,
        }
    },
    computed: {
        itemWidth() {
            return (138 * 0.5 * (document.documentElement.clientWidth / 375))
        },
        gutterWidth() {
            return (9 * 0.5 * (document.documentElement.clientWidth / 375))
        }
    },
    methods: {
        scroll(scrollData) {
            console.log(scrollData)
        },
        switchCol(col) {
            this.col = col
            console.log(this.col)
        },
        // loadmore(index) {
        //     this.data = this.data.concat(this.data)
        // }
    }
}
</script>