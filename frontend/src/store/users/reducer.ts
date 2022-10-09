import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from './domain';

export interface UsersPart {
  users: User[];
}

export interface IsBusyPart {
  isBusy: boolean;
}

export interface ErrorPart {
  error: string | null;
}

export type UsersState = UsersPart & IsBusyPart & ErrorPart;

const initialState: UsersState = {
  users: [],
  isBusy: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsersStarted(state) {
      state.isBusy = true;
      state.error = null;
    },
    fetchUsersSucceeded(state, action: PayloadAction<UsersPart>) {
      const { users } = action.payload;
      state.users = users;
      state.isBusy = false;
    },
    fetchUsersFailed(state, action: PayloadAction<ErrorPart>) {
      const { error } = action.payload;
      state.error = error;
      state.isBusy = false;
    },
  },
});

const { fetchUsersStarted, fetchUsersSucceeded, fetchUsersFailed } = usersSlice.actions;
const reducer = usersSlice.reducer;

export { reducer, fetchUsersStarted, fetchUsersSucceeded, fetchUsersFailed, initialState };
