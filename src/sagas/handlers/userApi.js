import axios from "axios";

export async function getUsersApi() {
  const response = await axios.get("https://dummyjson.com/users");
  const users = await response.data.users;
  console.log("users data", users);
  return users;
}
