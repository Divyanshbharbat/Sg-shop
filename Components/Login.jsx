import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  let navigate = useNavigate();

  const onsubmit = async (data) => {
    let data2 = localStorage.getItem("token");
    let userFound = false;

    if (data2) {
      let data3 = JSON.parse(data2 || "[]");
      const b = data3.filter(
        (v) => v.username === data.username && v.password === data.password
      );
      userFound = b.length > 0;
      console.log(b);
    }

    if (userFound) {
      alert("Login successful");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }

    try {
      const res = await axios.post("http://localhost:3000/login", data);
      if (res.data === "success") {
        alert("Login successfully");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container1">
      <div className="box1">
        <div className="logo">
          <h1>Login</h1>
          <form className="py-5" onSubmit={handleSubmit(onsubmit)}>
            <div className="input">
              <input
                type="text"
                placeholder="Username"
                {...register("username", {
                  minLength: {
                    value: 2,
                    message: "Minimum 2 characters are required",
                  },
                  required: { value: true, message: "Enter username" },
                })}
              />
              {errors.username && (
                <p className={errors ? "red" : "green"}>{errors.username.message}</p>
              )}
            </div>

            <div className="input">
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters are required",
                  },
                  required: { value: true, message: "Enter password" },
                })}
              />
              {errors.password && (
                <p className={errors ? "red" : "green"}>{errors.password.message}</p>
              )}
            </div>

            <div>Create New Account! Signup</div>
            <div className="button2 my-5" >
              <button disabled={isSubmitting}>
                {isSubmitting ? "Submitting" : "Submit"}
              </button>
              <button>
                <NavLink className="text-white" to="/signup">
                  Signup
                </NavLink>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
