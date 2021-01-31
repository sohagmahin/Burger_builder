import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-burger-builder-6e91f-default-rtdb.firebaseio.com/"
});

export default instance;
