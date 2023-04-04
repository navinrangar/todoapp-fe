import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore, Reducer } from "redux";
import sagaMiddleware, { rootSaga } from "./sagas/index";
import { initialTodoState, todoReducer, TodoState } from "./reducers/todos";
import { initialUserState, usersReducer, UserState } from "./reducers/user";


export interface State {
    todos: TodoState
    loggedInUser: UserState
}

const initialState: State = { todos: initialTodoState, loggedInUser: initialUserState };

const appReducer: Reducer = (state = initialState, action: any) => {

    return {
        todos: todoReducer(state.todos, action),
        loggedInUser: usersReducer(state.loggedInUser, action),
    }
}

const store = createStore(appReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

export default store;