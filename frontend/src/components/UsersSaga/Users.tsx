import { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { User, fetchUsersStarted } from "../../store/users";
import styles from "./Users.module.scss";

console.log(styles);

export const Users = memo(() => {
  const dispatch = useDispatch();
  const users: User[] = useSelector<RootState, User[]>((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsersStarted());
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
            <td className={styles.importand}>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});
