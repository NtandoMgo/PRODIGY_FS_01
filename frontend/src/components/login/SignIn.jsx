import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

function SignIn({onSignIn}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usenav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.message === "Login successful") {
        alert("You are logged in!");
        onSignIn();
        usenav("/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <div className="button-containter">
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
