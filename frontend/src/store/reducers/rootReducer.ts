import { combineReducers } from 'redux';

import usersReducer from './users';

const rootReducer = combineReducers({
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
