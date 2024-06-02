import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (email !== "" && password.length > 2) {
      try {
        const response = await axios.post("http://localhost:8080/User/Login", {
          email,
          password,
        });

        if (response.data != null) {
          console.log(response.data);
          if (response.data.valid === false) {
            alert("please wait until your request is accpeted");
          } else {
            localStorage.setItem("userData", JSON.stringify(response.data));
            // Update login state
            setIsLoggedIn(true);
          }
        } else {
          alert("Invalid username or password");
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("An error occurred during login");
      }
    } else {
      alert("please put a valid input");
    }
  };

  const navigate = useNavigate();
  // Redirect to homepage if logged in
  if (localStorage.length != 0) {
    navigate("/");
  }

  return (
    <section className="container">
      <div>
        <h1 className="py-5 text-center">Login</h1>
      </div>
      <form onSubmit={handleLogin}>
        {" "}
        {/* Attach handleLogin function to form onSubmit event */}
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            {" "}
            {/* Use htmlFor instead of for */}
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            value={email} // Bind input value to email state
            onChange={(e) => setEmail(e.target.value)} // Update email state on change
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            {" "}
            {/* Use htmlFor instead of for */}
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            value={password} // Bind input value to password state
            onChange={(e) => setPassword(e.target.value)} // Update password state on change
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
}
