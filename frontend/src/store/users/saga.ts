// when only saga would be used then this file could be named "asyncActions" and replace that one.

import { call, put, takeEvery, StrictEffect } from 'redux-saga/effects';
import { fetchUsersStarted, fetchUsersSucceeded, fetchUsersFailed } from './reducer';
import { User } from './domain';
import { fetchUsers } from './requests';

function* workGetUsersFetch(): Generator<StrictEffect, void, User[]> {
    try {
        // call: Wait for the promise to finish.
        const users = yield call(fetchUsers);
        yield put(fetchUsersSucceeded({ users }));
    } catch {
        yield put(fetchUsersFailed({ error: 'API fetch error' }));
    }
}

function* usersSaga() {
    // fetchUsersStarted.type = 'users/fetchUsersStarted';
    yield takeEvery(fetchUsersStarted.type, workGetUsersFetch);
}

export default usersSaga;
