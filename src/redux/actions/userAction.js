export function getUsers() {
  console.log("get action triggered");
  return { type: "GET_USERS" };
}

export function setUsers(users) {
  console.log("set action triggered");
  return { type: "SET_USERS", payload: users };
}
