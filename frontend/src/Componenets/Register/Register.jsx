import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/User/register", {
        email,
        password,
        name,
        address,
        phone,
      });
      alert("registration request submitted sucessfully");
    } catch (error) {
      console.error("Registration error:", error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <section className="container">
      <div>
        <h1 className="py-5 text-center">Register</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPasswordInput" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPasswordInput"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="addressInput" className="form-label">
            address
          </label>
          <input
            type="text"
            className="form-control"
            id="addressInput"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneInput" className="form-label">
            phone
          </label>
          <input
            type="number"
            className="form-control"
            id="phoneInput"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </section>
  );
}
