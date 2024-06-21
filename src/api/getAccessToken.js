import axios from 'axios';

const AK = "mqW5duwIP0mkBpKGJ7RmwhRK";
const SK = "7TFlYGuvweiOKpSn7oRFpnCDN0oLQmbG";

/**
 * 使用 AK，SK 生成鉴权签名（Access Token）
 * @return Promise 返回包含鉴权签名信息（Access Token）的Promise对象
 */
export async function getAccessToken() {
    const url = `/baidu/oauth/2.0/token?grant_type=client_credentials&client_id=${AK}&client_secret=${SK}`;
    let accessToken = ''
    await axios.post(url)
        .then(response => {
            console.log(response)
            accessToken = response.data.access_token
        })
        .catch(error => {
            console.error('Error fetching access token:', error);
            throw error;
        });

    return accessToken
}
