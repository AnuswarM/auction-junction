import axios from "axios";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Profile() {
  const userLoggedIn = window.sessionStorage.getItem("isLoggedIn");
  const navigate = useNavigate();

  function handleLogOut() {
    axios.get("/logout").then((response) => {
      if (response.status === 200) {
        window.sessionStorage.removeItem("isLoggedIn");
        navigate("/");
      }
    });
  }

  if (userLoggedIn) return <button onClick={handleLogOut}> LOGOUT </button>;
  else return <Navigate replace to="/login" />;
}

export default Profile;
