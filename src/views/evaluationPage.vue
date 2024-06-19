<template>
    <div>
        <ImageUploader @update:image="handleImageUpdate" @clear:image="handleImageClear" />
        <button @click="uploadImage">上传图片</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import ImageUploader from '@/components/photoUploader.vue'; // 确保路径正确

const image = ref('');

const handleImageUpdate = (newImage) => {
    image.value = newImage;
};

const handleImageClear = () => {
    image.value = '';
};

const uploadImage = () => {
    if (image.value) {
        // 创建 FormData 对象
        const formData = new FormData();
        formData.append('image', image.value);

        // 发送 POST 请求到后端
        axios.post('/api/upload', formData)
            .then(response => {
                console.log('Image uploaded successfully:', response.data);
            })
            .catch(error => {
                console.error('Error uploading image:', error);
            });
    } else {
        console.log('No image to upload');
    }
};
</script>