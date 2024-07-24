import React, { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(username);
  console.log(email);
  console.log(password);
  const payload = { username, email, password };
  console.log(payload);
  const handleSubmit = (e) => {};
  return (
    <form className="container">
      <div class="form-group">
        <label>Username</label>
        <input
          type="username"
          class="form-control"
          id="exampleInputUsername1"
          aria-describedby="usernameHelp"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit} class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default Form;
