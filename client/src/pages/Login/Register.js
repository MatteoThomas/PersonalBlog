import { useState } from "react";

import "../../App.css";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8080/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await response.json();

    if (data.status === "ok") {
      window.location.href = "/login";
    }
    console.log(data);
    createImageFolder();
  }

  async function createImageFolder() {
    const response = await fetch("http://localhost:8080/api/folder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });
    const data = await response.json();

    if (data.status === "ok") {
      window.location.href = "/login";
    }
    console.log(data);
  }

  return (
    <>
      <div className="container">
        <h1>Register</h1>
        <form className="form" onSubmit={registerUser}>
          <input
            className="registerInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            className="registerInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            className="registerInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <input className="input" type="submit" value="Register" />
        </form>
      </div>
    </>
  );
}

export default Register;