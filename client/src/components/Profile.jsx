import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { InputAdornment, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", email: "", phone: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios
      .get("/userData")
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleProfileEdit(event) {
    const { value, name } = event.target;

    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function SubmitProfileEdit() {
    axios
      .patch("/userData", user)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  function submitPasswordChange(event) {
    event.preventDefault();
    axios
      .post("/changePassword", { password: password })
      .then((response) => {
        console.log(response);
        window.sessionStorage.removeItem("isLoggedIn");
        navigate("/login");
      })
      .catch((err) => console.log(err));
  }

  function handleLogOut() {
    axios.get("/logout").then((response) => {
      if (response.status === 200) {
        window.sessionStorage.removeItem("isLoggedIn");
        navigate("/");
      }
    });
  }

  if (window.sessionStorage.getItem("isLoggedIn") === "true")
    return (
      <section className="parent">
        <div className="container py-5 d-flex justify-content-center">
          <div className="card cardfix mb-4">
            <div className="card-body">
              <div className="row  d-flex justify-content-center">
                <div className="col-lg-4">
                  <div className="card mb-5">
                    <div className="card-body text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        style={{ width: 150 }}
                      />
                    </div>
                  </div>
                </div>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#user-profile-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="user-profile-tab-pane"
                      aria-selected="true"
                    >
                      Profile
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#edit-profile-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="edit-profile-tab-pane"
                      aria-selected="false"
                    >
                      Edit Profile
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#edit-passowrd-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="edit-passowrd-tab-pane"
                      aria-selected="false"
                    >
                      Change Password
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="user-profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabIndex="0"
                  >
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="mb-0">User Name</p>
                      </div>
                      <div className="col-sm-6">
                        <p className="text-muted mb-0">{user.username}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-6">
                        <p className="text-muted mb-0">{user.email}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="mb-0">Phone</p>
                      </div>
                      <div className="col-sm-6">
                        <p className="text-muted mb-0">{user.phone}</p>
                      </div>
                    </div>
                  </div>
                  <form
                    className="tab-pane fade"
                    id="edit-profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabIndex="0"
                    onSubmit={SubmitProfileEdit}
                  >
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="mb-0">User Name</p>
                      </div>
                      <div className="col-sm-6">
                        <input
                          className="mt-1 mb-0 form-control form-control-lg"
                          name="username"
                          type="text"
                          onChange={handleProfileEdit}
                          value={user.username}
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-6">
                        <input
                          className="mt-1 mb-0 form-control form-control-lg"
                          name="email"
                          type="email"
                          onChange={handleProfileEdit}
                          value={user.email}
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="mb-0">Phone</p>
                      </div>
                      <div className="col-sm-6">
                        <input
                          className="mt-1 mb-0 form-control form-control-lg"
                          name="phone"
                          type="tel"
                          pattern="[0-9]{10}"
                          onChange={handleProfileEdit}
                          value={user.phone}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-lg mt-2"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                  <form
                    className="tab-pane fade"
                    onSubmit={submitPasswordChange}
                    id="edit-passowrd-tab-pane"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                    tabIndex="0"
                  >
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="mb-0">New Password</p>
                      </div>
                      <div className="col-sm-6">
                        <TextField
                          className="mt-1 mb-0 form-control form-control-lg"
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={password}
                          onChange={handlePasswordChange}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment>
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-lg mt-2"
                      >
                        Change Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <button onClick={handleLogOut} className="btn btn-primary btn-lg">
              Log Out
            </button>
          </div>
        </div>
      </section>
    );
  else return <Navigate replace to="/login" />;
}

export default Profile;
