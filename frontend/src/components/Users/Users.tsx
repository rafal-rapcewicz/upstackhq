import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import { User } from "../../domain/user";
import "./Users.scss";

export const Users = memo(() => {
  const dispatch = useDispatch();
  const users: User[] = useSelector<RootState, User[]>((state) => state.users.users);

  useEffect(() => {
    dispatch({ type: "users/fetchUsers" });
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
