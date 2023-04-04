import { AnyAction } from "redux";
import { todoAddService, todoListFetchService } from "../apis/todo";
import { call, put } from "redux-saga/effects";
import { todoListFetched } from "../actions/todo";

export function* TodoAdd(action: AnyAction): Generator<any, any, any> {
    const body = action.payload;
    const access_token = localStorage.getItem('access_token');
    const args = [body, access_token];
    const data = yield call(todoAddService, args)
    // yield put(signedIn(data.user));
}

export function* todoListFetch(): Generator<any, any, any> {
    const access_token = localStorage.getItem('access_token');
    const args = [access_token];
    const data: { id: number, name: string, priority?: string, due_date: string, done: boolean, for_later: boolean, routine_task: boolean }[] = yield call(todoListFetchService, args);
    const normalisedData = data.reduce((s, v, i) => {
        const newV = { id: v.id, name: v.name, priority: v?.priority, dueDate: v?.due_date, done: v.done, forLater: v.for_later, routineTask: v.routine_task }
        return { ...s, [v.id]: newV }
    }, {})
    yield put(todoListFetched(normalisedData));
}