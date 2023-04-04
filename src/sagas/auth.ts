import { call, put } from 'redux-saga/effects'
import { signinService, signupService } from '../apis/auth'
import { AnyAction } from 'redux'
import { signedIn, signedup } from '../actions/auth';

export function* signup(action: AnyAction): Generator<any, any, any> {
        const body = action.payload;
        const data = yield call(signupService, body)
        yield put(signedup(data));
}

export function* signIn(action: AnyAction): Generator<any, any, any> {
        const body = action.payload;
        const data = yield call(signinService, body)
        yield put(signedIn(data.user));
}