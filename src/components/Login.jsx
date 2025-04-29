import React from "react";
import { Link } from "react-router";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../auth/firebase";
const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  //   this function for handle show button
  const handleShowBtn = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  //   this function for handle login
  const handleLogin = (e) => {
    const auth = getAuth(app);
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result.user);
    });
  };
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="font-mono text-2xl">Login Page</h1>
      <div className="card bg-base-100 max-w-sm w-full  shrink-0 shadow-2xl ">
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
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
            <button className="btn btn-neutral mt-4">Login</button>
            <div className="divider">OR</div>
            <span className="text-center font-mono text-sm">
              you have SignUp..?{" "}
              <Link className="text-primary link link-hover" to="/signUp">
                SingUp
              </Link>
            </span>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
