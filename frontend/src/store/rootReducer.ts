import { combineReducers } from 'redux';

import { reducer as users } from './users';

const rootReducer = combineReducers({
  users
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
