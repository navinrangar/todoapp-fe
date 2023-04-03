import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore, Reducer } from "redux";
import sagaMiddleware, { rootSaga } from "./sagas/index";
import { initialTodoState, todoReducer, TodoState } from "./reducers/todos";
import { initialUserState, usersReducer, UserState } from "./reducers/users";

interface State {
    passed: number,
    failed: number,
}

export interface AppState {
    todos: TodoState
    users: UserState
}

const initialAppState: AppState = { todos: initialTodoState, users: initialUserState};

const appReducer: Reducer = (state = initialAppState, action: any) => {

    return {
        todos: todoReducer(state.todos, action),
        users: usersReducer(state.users, action),
    }

}

const store = createStore(appReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
      )
);

sagaMiddleware.run(rootSaga);

export default store;