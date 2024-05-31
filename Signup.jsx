import React, { useState } from "react";
import axios from "axios";
import styles from "./Signup.module.css";
import Navbar from "../Navbar/Navbar";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/signup", formData);
      console.log("Signup successful!");
    } catch (error) {
      if (error.response) {
        console.error("Signup failed with status code:", error.response.status);
        console.error("Error response data:", error.response.data);
      } else if (error.request) {
        console.error("No response received from server:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
    }
  };

  return (
    <>
      <Navbar />

      <div className={styles["signup-container"]}>
        <h2>Signup</h2>
        <form className={styles["signup-form"]} onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Signup</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
