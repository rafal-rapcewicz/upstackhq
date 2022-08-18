import { fetchUsersStarted, fetchUsersSucceeded, fetchUsersFailed } from '../reducers/users';
import { User } from '../../domain/user';

export const fetchUsersMiddleware =
  (storeAPI: any) => (next: any) => async (action: any) => {
    if (action.type === 'users/fetchUsers') {
      const { dispatch } = storeAPI;

      dispatch(fetchUsersStarted());

      try {
        const response = await fetch('http://localhost:3000/users');
        const users = (await response.json()) as User[];

        dispatch(fetchUsersSucceeded({ users }));
      } catch (error) {
        dispatch(fetchUsersFailed({ error: 'Error' }));
      }
    }

    return next(action);
  };
