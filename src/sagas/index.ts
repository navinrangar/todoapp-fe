import createSagaMiddleware from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import { SIGN_IN, SIGN_UP } from "../actions/auth";
import { signIn, signup } from "./auth";
import { TODO_ADD, TODO_LIST_FETCH } from "../actions/todo";
import { TodoAdd, todoListFetch } from "./todo";

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
    yield takeEvery(SIGN_UP, signup)
    yield takeEvery(SIGN_IN, signIn)
    yield takeEvery(TODO_ADD, TodoAdd)
    yield takeEvery(TODO_LIST_FETCH, todoListFetch)
}

export default sagaMiddleware;