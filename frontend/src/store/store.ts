import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer, RootState } from './reducers/rootReducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(thunkMiddleware) 
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
