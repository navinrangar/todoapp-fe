export const USER_ADDED = "user added";
export const USERS_FETCH = "users fetch";


let userId: number = 0;

export const userAdd = (name: string) => {
    return { type: USER_ADDED, payload: { id: ++userId, name } }
}

export const fetchUsers = () => {
    return {
    type: USERS_FETCH
}}