<template>
    <div class="context">
        <div class="content-container">
            <div class="eva-box">
                <div class="uploader-box">
                    <PhotoUploader @update:image="handleImageUpdate" @clear:image="handleImageClear" />
                </div>
                <div class="button-box">
                    <button @click="uploadImage" :disabled="!image">上传图片</button>
                </div>
            </div>
            <div class="result-box">
                <h2>图片美学鉴定</h2>
                <TagCloud :echartsData="tagcloudData" />
                <el-rate v-model="score" disabled allow-half size="large" :max=10></el-rate>
                <hr>
                <div class="result">
                    <p>{{ result }}</p>
                </div>
                <div class="info-item">
                    <span> </span>
                    <span>{{ currentTime }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import { imageUnderstand, imageContext } from '@/api/imageUnderstand.js';
import { imageClassify } from '@/api/imageClassify.js';
import { nima } from '@/api/nima.js'
import PhotoUploader from '@/components/photoUploader.vue';
import { ElMessage, ElRate, ElLoading } from 'element-plus';
import jStat from 'jstat';

const image = ref('');
const taskID = ref(null);
const result = ref('');
const currentTime = ref('');
const score = ref('10'); // 示例评分
const globalPercent = ref('90'); // 示例全球百分比

import TagCloud from '@/components/TagCloud.vue'

const tagcloudData = ref([]);

const handleImageUpdate = (newImage) => {
    image.value = newImage;
};

const handleImageClear = () => {
    image.value = '';
    result.value = '';
    currentTime.value = '';
    tagcloudData.value = []
    score.value = 10; // 清除时评分重置为0
    globalPercent.value = '';
};

const uploadImage = async () => {
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })

    if (image.value) {
        try {

            const nimaScore = await nima(image.value);
            console.log(nimaScore)
            score.value = nimaScore.mean;

            // 计算正态分布百分比
            const mean = 5; // 假设正态分布的均值为5
            const stdDev = 2; // 假设正态分布的标准差为2
            globalPercent.value = (jStat.normal.cdf(score.value, mean, stdDev) * 100).toFixed(2);

            const classResponse = await imageClassify(image.value);
            console.log(classResponse)
            tagcloudData.value = classResponse.filter(item => item.score > 0.01)
                .map(item => ({
                    value: (item.score * 100).toFixed(0), // Convert score to integer value
                    name: item.keyword
                }));

            const understandResponse = await imageUnderstand(image.value, "这张图片里有什么？");
            taskID.value = understandResponse.result.task_id;

            const intervalId = setInterval(async () => {
                const contextResponse = await imageContext(taskID.value);
                if (contextResponse.result.ret_code === 0) {
                    clearInterval(intervalId);
                    result.value = contextResponse.result.description;
                    currentTime.value = new Date().toLocaleString();
                    ElMessage.success('图片上传和处理成功！');
                    loading.close()
                }
            }, 2000);

        } catch (error) {
            console.error('Error uploading image:', error);
            loading.close()
            ElMessage.error('图片上传或处理失败！');
        }
    } else {
        console.log('No image to upload');
    }
};

onMounted(() => {
    currentTime.value = new Date().toLocaleString();
});
</script>

<style scoped>
.context {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.content-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    max-width: 1600px;
}

.eva-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45%;
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

.uploader-box,
.button-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.button-box {
    margin-top: 20px;
}

button {
    width: 100%;
    padding: 10px;
    font-size: 16px;
}

.result-box {
    width: 50%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

h3 {
    margin-bottom: 20px;
}

.info-item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
}

hr {
    width: 100%;
    border: none;
    border-top: 1px solid #ccc;
    margin: 20px 0;
}

.result {
    margin-top: 20px; /* Top margin for result section */
    height: 220px;
}

.result p {
    text-align: left; /* Left-align the result text */
    color: #666; /* Text color */
}
</style>