import { useReducer, useCallback, Dispatch } from 'react';
import { AnyAction } from 'redux';

type Reducer<T> = (state: T, action: AnyAction) => T;

// function useReducer<R extends Reducer<any, any>>(
//     reducer: R,
//     initialState: ReducerState<R>,
//     initializer?: undefined
// ): [ReducerState<R>, Dispatch<ReducerAction<R>>];

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
