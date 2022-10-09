import { useEffect, memo } from "react";
import { useThunkReducer } from '../../store/useThunkReducer';
import { reducer, asyncFetchUsersAction, initialState, UsersState } from "../../store/users";
import "./Users.scss";

export const Users = memo(() => {
  const [state, dispatch] = useThunkReducer<UsersState>(reducer, initialState);

  useEffect(() => {
    dispatch(asyncFetchUsersAction());
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
