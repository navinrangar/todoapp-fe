import { getUsers } from '../apis/apis';
import {call} from 'redux-saga/effects'

export function* getUsersSaga() : Generator {
        const data = yield call(getUsers)
        console.log('saga called and data', data)
}