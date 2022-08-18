import { applyMiddleware, createStore, compose } from 'redux';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { fetchUsersMiddleware } from './middleware/fetchUsersMiddleware';
import { rootReducer, RootState } from './reducers/rootReducer';

const middlewareEnhancer = applyMiddleware(fetchUsersMiddleware, thunkMiddleware)
const composedEnhancers = compose(middlewareEnhancer);
const store = createStore(rootReducer, undefined, composedEnhancers)
// const store = configureStore({ reducer: rootReducer });

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
