import { RecoilRoot } from "recoil";
import UserList from "./components/userList";

export default function App() {
  return (
    <RecoilRoot>
      <UserList />
    </RecoilRoot>
  );
}
