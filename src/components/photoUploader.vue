<template>
    <div class="container">
        <div class="square" :style="{ 'background-image': imageUrl ? `url(${imageUrl})` : '' }"
            @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div v-if="showOverlay && !imageUrl" class="overlay">
                <button @click="openAlbum">相册</button>
                <button @click="openCamera">拍摄</button>
            </div>
            <div v-if="imageUrl" class="close-button" @click="removeImage">x</div>
        </div>

        <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none" />

        <div v-if="cameraVisible" class="camera-modal">
            <video ref="video" autoplay></video>
            <button @click="capturePhoto">拍摄</button>
            <button @click="closeCamera">关闭</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onUnmounted, watch, defineEmits } from 'vue';

// 获取 emit
const emit = defineEmits(['update:image', 'clear:image']);

const showOverlay = ref(false);
const imageUrl = ref('');
const cameraVisible = ref(false);
const stream = ref(null);
const fileInput = ref(null);
const video = ref(null);

// Watch for changes in imageUrl and emit event to parent component
watch(imageUrl, (newUrl) => {
    if (newUrl) {
        emit('update:image', newUrl);
    }
});

const handleMouseEnter = () => {
    if (!imageUrl.value) {
        showOverlay.value = true;
    }
};

const handleMouseLeave = () => {
    showOverlay.value = false;
};

const openAlbum = () => {
    fileInput.value.click();
};

const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imageUrl.value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};

const openCamera = () => {
    cameraVisible.value = true;
    navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((mediaStream) => {
            stream.value = mediaStream;
            video.value.srcObject = mediaStream;
        })
        .catch((err) => {
            console.error('Error accessing camera: ', err);
        });
};

const capturePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = video.value.videoWidth;
    canvas.height = video.value.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video.value, 0, 0, canvas.width, canvas.height);
    imageUrl.value = canvas.toDataURL('image/png');
    closeCamera();
};

const closeCamera = () => {
    if (stream.value) {
        stream.value.getTracks().forEach((track) => track.stop());
    }
    cameraVisible.value = false;
};

const removeImage = () => {
    imageUrl.value = '';
    emit('clear:image');
};

// Clean up camera stream on component unmount
onUnmounted(() => {
    if (stream.value) {
        stream.value.getTracks().forEach((track) => track.stop());
    }
});
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
}

.square {
    width: 100%;
    padding-bottom: 100%; /* 1:1 aspect ratio */
    background-color: lightgray;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    border-radius: 5%;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    border-radius: 5%;
}

.overlay button {
    padding: 10px 20px;
    background-color: white;
    border: none;
    cursor: pointer;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgb(108, 108, 108);
    color: white;
    border: none;
    cursor: pointer;
    padding: 5px;
}

.camera-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.camera-modal video {
    width: 100%;
    height: auto;
}

.camera-modal button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
}
</style>