import { atom } from "recoil";

const userAtom = atom({
  key: "usersState",
  default: [],
});

export default userAtom;
