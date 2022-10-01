import React, { useEffect, memo } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from '../../store/store';
import { RootState } from "../../store/reducers/rootReducer";
import { fetchUsers } from "../../store/reducers/users";
import { User } from "../../domain/user";
import "./Users.scss";

export const Users = memo(() => {
  const dispatch = useAppDispatch();
  const users: User[] = useSelector<RootState, User[]>((state) => state.users.users);

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
        {users.map((user) => (
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
