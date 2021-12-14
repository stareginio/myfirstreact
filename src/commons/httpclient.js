import axios from 'axios';

export default axios.create({
    baseURL: "https://myfirstfullstack.herokuapp.com",
    headers: {
        'Content-Type': "application/json"
    }
})