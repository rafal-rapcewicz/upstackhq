import { AnyAction, Dispatch } from 'redux';
import { fetchUsersStarted, fetchUsersSucceeded, fetchUsersFailed } from './reducer';
import { fetchUsers } from './requests';

export const asyncFetchUsersAction = () => async (dispatch: Dispatch<AnyAction>) => {
    dispatch(fetchUsersStarted());

    try {
        const users = await fetchUsers();

        dispatch(fetchUsersSucceeded({ users }));
    } catch {
        dispatch(fetchUsersFailed({ error: 'Error' }));
    }
};
