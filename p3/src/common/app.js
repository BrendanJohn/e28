import Api from '@/common/api.js';

export const config = {
    firebase: {
        apiKey: 'AIzaSyDy7Xtgm8bNAKHBU1NNGFnQOTPbtuClp2Y',
        projectId: 'e28-zipfoods-bm'
    }
}

export const api = new Api({
    apiKey: config.firebase.apiKey,
    projectId: config.firebase.projectId
});