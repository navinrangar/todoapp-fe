import { AnyAction, Reducer } from "redux";
import { USER_ADDED } from "../actions/users";
import { User } from "../models/todo";
import { SIGNED_IN } from "../actions/auth";

export interface UserState {
    id: number
    firstName: string
    lastName: string
    email: string
    role: string
    status: boolean
}

export const initialUserState = { id: 0, firstName: 'default', lastName: 'rangar', email: "a@b.com", role: 'user', status: false };

export const usersReducer: Reducer<UserState> = (state: UserState = initialUserState, action: AnyAction) => {
    switch (action.type) {

        case SIGNED_IN: {
            const user = action.payload;
            console.log('user', user)
            return { ...user, status: true }
        }

        default: {
            return state;
        }
    }
}