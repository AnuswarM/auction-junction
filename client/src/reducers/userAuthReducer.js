function userReducer(state = false, action) {
  if (action.type === "LOGIN") {
    return true;
  } else if (action.type === "LOGOUT") return false;
  else return state;
}

export default userReducer;
