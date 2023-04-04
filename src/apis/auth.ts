import axios from "axios";

export const signupService = async (body: {}) => {
    try {
        const res = await axios.post('http://localhost:3333/signup', body);
        console.log('signup res', res.data);
        return res.data;
    }
    catch (error) {
        console.log('error', error);
    }
}

export const signinService = async (body: {}) => {
    try {
        const res = await axios.post('http://localhost:3333/login', body);
        return res.data;
    }
    catch (error) {
        console.log('error', error);
    }
}