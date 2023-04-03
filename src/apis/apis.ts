import axios from "axios";

export const getUsers = async () => {
    try {
        const res = await axios.get('https://randomuser.me/api/?results=5');
        return res.data;
    }
    catch(error){
        console.log('error', error);
    }
}