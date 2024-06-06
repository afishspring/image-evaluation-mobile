
<style >
* {
    margin: 0;
}

.container-water-fall {
    width: 100.1%;
    height: 100%;
    box-sizing: border-box;
}

.container-water-fall h4 {
    padding-top: 56px;
    padding-bottom: 28px;
    font-family: PingFangSC-Medium;
    font-size: 36px;
    color: #000000;
    letter-spacing: 0px;
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
    margin-right: 0px;
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
    color: #ff0000;
}

.name {
    max-width: 150px;
    margin-left: 10px;
    font-size: 14px;
    color: #999999;
}

.like {
    position: absolute;
    right: 0px;
    display: flex;
    align-items: center;
}

.like.active .like-total {
    color: #ff4479;
}

.like i {
    width: 0px;
    right: 0px;
    display: flex;
}

.like .like-total {
    margin-left: 10px;
    font-size: 12px;
    /* left: 100px; */
    color: #999999;
}

.githubdata {
    float: right;
    margin-right: 90px;
}

.githubdata img {
    width: 14px;
}

/* 
.like-img {
    background-image: url('../assets/点赞1.png');
}

.like-clicked-img {
    background-image: url('../assets/点赞2.png');
} */
</style>
<template>
    <div class="container-water-fall">
        <!-- <h1 style="position: fixed;left: 0;top: 100px;font-style: 15px;color:blue;z-index: 1000;">{{loadstatus}}</h1> -->
        <div class="btn-group">
            <button @click="loadmore">LoadMore</button>
            <button @click="switchCol(5)">5column(列)</button>
            <button @click="switchCol(8)">8column(列)</button>
            <button @click="switchCol(10)">10column(列)</button>
            <button @click="reset">reset(重置)</button>
            <a style="color: red" href="https://github.com/Rise-Devin/vue-waterfall2/blob/master/README.md"
                target="_blank">GITHUB</a>
            <b style="color: blue">滚动至底部可触发loadmore</b>
        </div>
        <waterfall :col="col" :data="data" @loadmore="loadmore" :gutterWidth="10">
            <div class="cell-item" v-for="(item, index) in data" :key="index">
                <img v-if="item.img" :src="item.img" alt="加载错误" />
                <div class="item-body">
                    <div class="item-desc">{{ item.title }}</div>
                    <div class="item-footer">
                        <div v-if="item.avatar" class="avatar" :style="{ backgroundImage: `url(${item.avatar})` }"></div>
                        <div class="name">{{ item.user }}</div>
                        <div class="like">

                            <div class="like-total">{{ item.like }}</div>
                            <div class="avatar">
                                <img :src="item.liked ? _likePicture : _likedPicture"
                                    @click="() => clickLike(index, item)" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </waterfall>
        <!-- <loading :show="loading" /> -->
    </div>
</template>
<script setup>
import { ref } from 'vue';
//import waterfall from '@/components/waterFall.vue';
import localAvatar from '@/assets/logo.png'; // 默认头像

import _likePicture from '@/assets/点赞1.png';
import _likedPicture from '@/assets/点赞2.png';
import loading from '../components/loading.vue'
//import { da } from 'element-plus/es/locale';

const data = ref([])
data.value = generateData(100);
const col = ref(5);

const likerUrl = '../assets/点赞1.png';
const likeClickedUrl = '../assets/点赞2.png';

const likePicture = _likePicture;
const likedPicture = _likedPicture;

function generateData(length) {
    const placeholderImg = "https://via.placeholder.com/150";
    const data = [];

    for (let i = 0; i < length; i++) {
        data.push({
            img: placeholderImg,
            title: `Title ${i + 1}`,
            avatar: localAvatar, // 使用默认头像
            user: `User ${i + 1}`,
            liked: Math.random() > 0.5, // 随机生成 true 或 false
            like: Math.floor(Math.random() * 1000),
        });
    }

    return data;
}

function switchCol(newCol) {
    col.value = newCol;
    console.log(col.value);
}

function loadmore() {
    data.value = data.value.concat(generateData(100));
}

function clickLike(index, item) {
    data.value[index].liked = !data.value[index].liked;
    //data.value[index].liked = !data.value[index].liked;
    console.log('item', item);
    data.value[index].like++;
    //console.log(data.value[index].liked);
}

</script>
<!-- <script>
/*
  注意:
  1.itemWidth需要与gutterWidth一起使用才会生效，否则会进行自适应宽度
  2.使用了waterfall的组件不允许使用scoped,否则样式会有问题
*/
import loading from "./loading";
import ref from 'vue';
import _likePicture from '@/assets/点赞1.png';
import _likedPicture from '@/assets/点赞2.png';
import logo from '@/assets/logo.png'
export default {
    props: {
        title: String,
    },
    components: {
        loading,
    },
    data() {
        return {
            likePicture: _likePicture,
            likedPicture: _likedPicture,
            data: [],
            col: 6,
            loading: false,
            gitHubData: {},
            originData: [
                {
                    img: "https://image.watsons.com.cn//upload/8a316140.png?w=377&h=451&x-oss-process=image/resize,w_1080",
                    avatar:
                        logo,
                    title: "最近浴室新宠，日系神仙好物了解一下～",
                    user: "1",
                    like: "953",
                    liked: ref(false),
                },
            ],
        };
    },
    computed: {
        itemWidth() {
            return 133 * 0.5 * (document.documentElement.clientWidth / 375);
        },
        gutterWidth() {
            return 10 * 0.5 * (document.documentElement.clientWidth / 375);
        },
    },
    methods: {
        toGitHub() {
            window.open(
                "https://github.com/Rise-Devin/vue-waterfall2/blob/master/README.md",
                "_blank"
            );
        },
        reset() {
            this.data = [];
        },

        switchCol(col) {
            this.col = col;
        },

        handleClick(index) {
            alert(`您点击了第${index + 1}卡片`);
        },

        loadmore() {
            this.loading = true;
            setTimeout(() => {
                this.data = Array.from(this.data.concat(this.originData));
                this.loading = false;
                console.log(this.data);
            }, 1000);
        },

        clickLike(index) {
            this.data[index].liked.value = !this.data[index].liked.value;
            //this.likePicture = _likedPicture;
            //this.likedPicture = _likePicture;
            console.log(index);
        }
    },
    mounted() {
        this.data = this.originData;
    }
};
</script> -->
