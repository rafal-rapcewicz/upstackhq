import React, { useEffect, memo } from "react";
import { useSelector } from "react-redux";
import { useThunkReducer } from '../../store/useThunkReducer';
import reducer, { fetchUsers, initialState, UsersState } from "../../store/reducers/users";
import { User } from "../../domain/user";
import "./Users2.scss";

export const Users2 = memo(() => {
  const [state, dispatch] = useThunkReducer(reducer, initialState);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {state.users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});
