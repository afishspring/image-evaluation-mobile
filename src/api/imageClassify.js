import axios from 'axios';
import { getAccessToken } from './getAccessToken';

export async function imageClassify(imageBase64) {
    const accessToken = await getAccessToken();

    const url = `/baidu/rest/2.0/image-classify/v2/advanced_general?access_token=${accessToken}`;

    const form = new FormData()
    form.append('image', imageBase64)

    return axios.post(url, form, {
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
    }
    })
    .then(response => response.data.result)
    .catch(error => {
        console.error('Error image classify:', error);
        throw error;
    });
}