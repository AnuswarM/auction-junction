import axios from "axios";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  function handleLogOut() {
    axios.get("/logout").then((response) => {
      if (response.status === 200) {
        window.sessionStorage.removeItem("isLoggedIn");
        navigate("/");
      }
    });
  }

  if (window.sessionStorage.getItem("isLoggedIn") === "true")
    return <button onClick={handleLogOut}> LOGOUT </button>;
  else return <Navigate replace to="/login" />;
}

export default Profile;
