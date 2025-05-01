import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false);
  // this is for observer the form
  const { user } = useContext(AuthContext);
  console.log(user);

  // this function for handle show btn
  const handleShowBtn = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  // this function for handle sign up
  const handleSignUp = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccessMessage("User Created Successfully");
        setError(null);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setSuccessMessage("");
      });
  };
  return (
    <div className="min-h-[90vh] flex flex-col  items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="font-mono text-2xl">SignUp Page</h1>
      <div className="card bg-base-100 max-w-sm w-full  shrink-0 shadow-2xl ">
        <form onSubmit={handleSignUp} className="card-body">
          <fieldset className="fieldset">
            <label className="label flex flex-col gap-2 items-start">
              <span className="label-text">Email</span>
              <input
                type="email"
                name="email"
                className="input focus:outline-none"
                placeholder="Email"
              />
            </label>
            <label className="relative label flex flex-col gap-2 items-start">
              <span>Password</span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input focus:outline-none"
                placeholder="Password"
              />
              <span
                onClick={handleShowBtn}
                className="absolute z-10 text-lg top-9.5 right-10 "
              >
                {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
              </span>
            </label>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">SignUp</button>
            {error && <span className="text-red-500">{error}</span>}
            {successMessage && (
              // <span className="text-green-500">{successMessage}</span>
              <Navigate to="/login" />
            )}
            <div className="divider">OR</div>
            <span className="text-center font-mono text-sm">
              you have Login..?{" "}
              <Link className="text-primary link link-hover" to="/login">
                Login
              </Link>
            </span>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
