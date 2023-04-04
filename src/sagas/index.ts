import createSagaMiddleware from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import { SIGN_IN, SIGN_UP } from "../actions/auth";
import { signIn, signup } from "./auth";

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
    yield takeEvery(SIGN_UP, signup)
    yield takeEvery(SIGN_IN, signIn)
}

export default sagaMiddleware;