import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import styles from "./Login.module.css";
import Navbar from "../Navbar/Navbar";

const Login_user = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/login", formData);
      console.log("Login successful!");
      navigate('/user')
    } catch (error) {
      if (error.response) {
        console.error("Login failed:", error.response.data.message);
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
      <div className={styles["login-container"]}>
        <h2>Login</h2>
        <form className={styles["login-form"]} onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login_user;
