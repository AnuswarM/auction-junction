import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  function handleChange(event) {
    const { value, name } = event.target;

    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleSignup(event) {
    event.preventDefault();
    console.log(user);
    axios
      .post("/signup", user)
      .then((response) => {
        window.sessionStorage.setItem("isLoggedIn", true);
        navigate("/bidandbuy");
      })
      .catch((err) => console.log(err));
  }

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSignup}>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email Address"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-outline mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="User Name"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                />
              </div>

              <div className="form-outline mb-4">
                <input
                  type="tel"
                  className="form-control form-control-lg"
                  placeholder="Phone Number"
                  pattern="[0-9]{10}"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
