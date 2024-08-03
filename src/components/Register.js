import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function Register({ onRegister }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const usernameChange = (e) => {
    setUsername(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email && password) {
      onRegister(username);
      const payload = { username, email, password };
      localStorage.setItem("user", JSON.stringify(payload));
      toast.success("Registered Successfully");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } else {
      toast.error("Please fill in all fields!");
    }
  };

  return (
    <div
      className="container"
      style={{
        width: "40%",
        height: "460px",
        marginTop: "10%",
        backgroundColor: "#EAE7DC",
        borderRadius: "20px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Register</h1>
      <form
        style={{
          width: "100%",
          marginTop: "10%",
        }}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="usernameHelp"
            onChange={usernameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={emailChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            aria-describedby="passwordHelp"
            onChange={passwordChange}
          />
        </div>
        <div className="btn-btn-primary" style={{ marginLeft: "32%" }}>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <Link
            to="/login"
            className="btn btn-primary"
            style={{ marginLeft: "10px" }}
          >
            Login
          </Link>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
}

export default Register;
