import axios from "axios";

export const todoAddService = async (args: any[]) => {
    try {
        const res = await axios.post('http://localhost:3333/todo', args[0], {
            headers: {
                Authorization: args[1]
            }
        });
        return res.data;
    }
    catch (error) {
        console.log('error', error);
    }
}

export const todoListFetchService = async (args: any[]) => {
    try {
        const res = await axios.get('http://localhost:3333/todos', {
            headers: {
                Authorization: args[0]
            }
        });
        return res.data;
    }
    catch (error) {
        console.log('error', error);
    }
}