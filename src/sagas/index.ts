import createSagaMiddleware from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import { USERS_FETCH } from "../actions/users";
import { getUsersSaga } from "./users";

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
    yield takeEvery(USERS_FETCH, getUsersSaga)
}

export default sagaMiddleware;