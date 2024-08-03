import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setloggedIn] = useState(false);
  const navigate = useNavigate();

  const handleemailchange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordchange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, password };
    console.log(payload);
    let userData = localStorage.getItem("user");
    userData = JSON.parse(userData);

    console.log("Email", userData.email);
    console.log("Password", userData.password);
    if (email === userData.email && password === userData.password) {
      setloggedIn(true);
      toast.success("login sucessfully");
      setTimeout(() => {
        navigate("/cart");
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
        height: "350px",
        marginTop: "10%",
        backgroundColor: "#EAE7DC",
        borderRadius: "20px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <form
        style={{
          width: "100%",
          marginTop: "10%",
        }}
        onSubmit={handleSubmit}
      >
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleemailchange}
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handlePasswordchange}
          ></input>
        </div>
        <div className="btn-btn-primary" style={{ marginLeft: "32%" }}>
          <button type="submit" class="btn btn-primary">
            Login
          </button>
          <Link
            to="/register"
            type="submit"
            class="btn btn-primary"
            style={{ marginLeft: "10px" }}
          >
            Register
          </Link>
        </div>
      </form>
      {loggedIn && (
        <div style={{ marginTop: "80px" }}>
          <h4>Input Values:</h4>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
export default Login;
