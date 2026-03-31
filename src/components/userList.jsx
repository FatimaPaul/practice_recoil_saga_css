import { useRecoilState, useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions/userAction";
import { useEffect } from "react";

export default function UserList() {
  const [users, setUsers] = useRecoilState(userAtom);
  const reduxUsers = useSelector((store) => store.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    setUsers(reduxUsers);
  }, [reduxUsers]);

  function handleEnterUsers() {
    dispatch(getUsers());
  }

  return (
    <>
      <button onClick={handleEnterUsers}>Enter Users</button>
      <button>Set Employees Delete</button>
      <ol>
        {users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ol>
    </>
  );
}
