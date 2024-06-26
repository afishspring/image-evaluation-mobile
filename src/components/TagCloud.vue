<template>
    <div>
        <div id="wordCloud" style="height: 200px; width: 200px;"></div>
    </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import * as echarts from 'echarts/core';
import 'echarts-wordcloud';
import { defineProps } from 'vue';

const props = defineProps({
    echartsData: {
        type: Array,
        required: true
    }
});

const initChart = () => {
    const myChart = echarts.init(document.getElementById('wordCloud'));
    const option = {
        title: {
            text: '',
            x: 'center'
        },
        backgroundColor: '#fff',
        series: [
            {
                type: 'wordCloud',
                gridSize: 10,
                sizeRange: [14, 40],
                rotationRange: [0, 0],
                textStyle: {
                    color: function () {
                        return (
                            'rgb(' +
                            Math.round(Math.random() * 255) +
                            ', ' +
                            Math.round(Math.random() * 255) +
                            ', ' +
                            Math.round(Math.random() * 255) +
                            ')'
                        );
                    }
                },
                left: 'center',
                top: 'center',
                right: null,
                bottom: null,
                width: '100%',
                height: '100%',
                data: props.echartsData
            }
        ]
    };
    myChart.setOption(option);
    myChart.on('click', function (params) {
        console.log('myChart----click---:', params, '------', params.data);
    });
};

onMounted(() => {
    initChart();
});

watch(() => props.echartsData, () => {
    initChart();
}, { deep: true });
</script>

<style scoped></style>
