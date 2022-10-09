import { useReducer, useCallback } from 'react';
import { AnyAction } from 'redux';

type Reducer<T> = (state: T, action: AnyAction) => T;

export function useThunkReducer<T>(reducer: Reducer<T> , initialState: T): [T, (action: AnyAction | Function) => void]  {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const enhancedDispatch = useCallback(
      (action: AnyAction | Function) => {
        if (typeof action === 'function') {
          console.log('It is a thunk');
          action(dispatch);
        } else {
          dispatch(action);
        }
      },
      [dispatch],
    );
  
    return [state, enhancedDispatch];
  };
