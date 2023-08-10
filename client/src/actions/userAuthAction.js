function userLogin() {
  return (dispatch) => {
    dispatch({
      type: "LOGIN",
    });
  };
}

function userLogout() {
  return (dispatch) => {
    dispatch({
      type: "LOGOUT",
    });
  };
}

export { userLogin, userLogout };
