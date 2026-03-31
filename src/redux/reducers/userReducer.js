const initialValue = {
  users: [],
};

function userReducer(state = initialValue, action) {
  switch (action.type) {
    case "GET_USERS":
      return { ...state };
    case "SET_USERS":
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

export default userReducer;
