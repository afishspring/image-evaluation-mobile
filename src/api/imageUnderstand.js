import axios from 'axios';
import { getAccessToken } from './getAccessToken';

/**
 * 发送图片进行分类识别
 * @param {string} imageBase64 图片的Base64编码字符串
 * @param {string} question 问题描述
 * @return Promise 返回包含识别结果的Promise对象
 */
export async function imageUnderstand(imageBase64, question) {
    const accessToken = await getAccessToken();

    console.log('first',accessToken)

    const url = `/baidu/rest/2.0/image-classify/v1/image-understanding/request?access_token=${accessToken}`;

    const data = {
        image: imageBase64,
        question: question,
        output_CHN: true
    };

    return axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.data)
    .catch(error => {
        console.error('Error image understanding:', error);
        throw error;
    });
}

export async function imageContext(task_id) {
    const accessToken = await getAccessToken();
    const url = `/baidu/rest/2.0/image-classify/v1/image-understanding/get-result?access_token=${accessToken}`;

    const data = {
        task_id: task_id
    };

    return axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.data)
    .catch(error => {
        console.error('Error image context:', error);
        throw error;
    });
}