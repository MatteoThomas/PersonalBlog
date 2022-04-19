import React, { useState } from "react";

import { Link } from "react-router-dom";

// import { login } from "../../../slices/auth";


import { StyledButton } from "../../../components/Button/Button.style";
import { StyledInput, StyledInputWrapper } from "../../../components/Input/Input.style";
import { ButtonsWrapper } from "./LoginForm.style";


function LoginForm() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);



  

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("https://photo-mode.herokuapp.com/api/auth/signin", {
      // const response = await fetch("http://localhost:8080/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
console.log(data)
    if (data == null) {
      alert("Check your name and password");
    } else {
      localStorage.setItem("user", JSON.stringify(data));
      window.location.href = "/dashboard";
    }
  }

    return (
      <>      {!loading ? 
        <form 
        
        onSubmit={loginUser}>
            <label>Email</label>
            <br />
            <StyledInputWrapper>
            <StyledInput
            
            inputLabel="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="Email"
                type="text"
                required
                placeholder="Email"
            ></StyledInput></StyledInputWrapper>
            <br/>
            <label>Password</label>
            <br />
            <StyledInputWrapper>
            <StyledInput
                value={password}
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Email"
            ></StyledInput></StyledInputWrapper>
            <br />
            <ButtonsWrapper>
                <StyledButton 
                  buttonLabel="Login" 
                  type="submit" 
                  value="Login">
                    Login
                </StyledButton>
                <Link className="link" to="/Register">
                    <StyledButton buttonLabel="Register">Register</StyledButton>
                </Link>
            </ButtonsWrapper>
        </form>
        : <h1>Loading</h1>}
        </>

    );
    }

export default LoginForm
