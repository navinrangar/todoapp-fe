import { AnyAction, Reducer } from "redux";
import { USER_ADDED } from "../actions/users";
import { User } from "../models/todo";

export interface UserState {
    [id: number]: User
}

export const initialUserState = {0: {id: 0, name: 'default'}};

export const usersReducer: Reducer<UserState> = (state: UserState = initialUserState, action: AnyAction) => {
    switch (action.type) {
        case USER_ADDED: {
            const {id} = action.payload;
            const user: User = action.payload;
            return { ...state , [id]: user }
        }

        default: {
            return state;
        }
    }
}