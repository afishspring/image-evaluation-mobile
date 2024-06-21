import axios from 'axios';

export async function nima(imageFile) {
    return axios.post(`/api/evaluate`, {
        image: imageFile
    })
    .then(response => response.data)
    .catch(error => {
        console.error('Error evaluating image:', error);
        throw error;
    })
}