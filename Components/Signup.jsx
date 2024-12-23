import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  let navigate = useNavigate();

  const onsubmit = async (data) => {
    let existingData = JSON.parse(localStorage.getItem("token") || "[]");
    existingData.push(data);
    localStorage.setItem("token", JSON.stringify(existingData));

    try {
      const res = await axios.post("http://localhost:3000/signup", data);
      if (res.data === "success") {
        alert("Signup successful");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container1">
      <div className="box1">
        <div className="logo1">
          <h1>Signup</h1>
          <form onSubmit={handleSubmit(onsubmit)}>
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
                type="text"
                placeholder="Email"
                {...register("email", {
                  minLength: {
                    value: 2,
                    message: "Minimum 2 characters are required",
                  },
                  required: { value: true, message: "Enter email" },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email && <p className={errors ? "red" : "green"}>{errors.email.message}</p>}
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

            <div>Already have an Account? Login</div>
            <div className="button2">
              <button disabled={isSubmitting}>
                {isSubmitting ? "Submitting" : "Submit"}
              </button>
              <button>
                <NavLink className="text-white" to="/login">
                  Login
                </NavLink>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
