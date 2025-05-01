import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const SignOut = () => {
    logOut();
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-6 font-mono">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">SoriFul</a>
        </div>
        <div className="flex gap-6 justify-center items-center ">
          <NavLink to="/">
            {({ isActive }) => (
              <span
                className={
                  isActive ? "border-b-2 border-primary text-primary" : ""
                }
              >
                Home
              </span>
            )}
          </NavLink>
          {user ? (
            <>
              <NavLink to="/dashboard">
                {({ isActive }) => (
                  <span
                    className={
                      isActive ? "border-b-2 border-primary text-primary" : ""
                    }
                  >
                    Dashboard
                  </span>
                )}
              </NavLink>
              <NavLink to="/profile">
                {({ isActive }) => (
                  <span
                    className={
                      isActive ? "border-b-2 border-primary text-primary" : ""
                    }
                  >
                    Profile
                  </span>
                )}
              </NavLink>
              <p>Welcome, {user.email}</p>
              <button onClick={SignOut} className="btn btn-primary">
                SignOut
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login">
                {({ isActive }) => (
                  <span
                    className={
                      isActive ? "border-b-2 border-primary text-primary" : ""
                    }
                  >
                    Login
                  </span>
                )}
              </NavLink>
              <NavLink to="/signUp">
                {({ isActive }) => (
                  <span
                    className={
                      isActive ? "border-b-2 border-primary text-primary" : ""
                    }
                  >
                    SignUp
                  </span>
                )}
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
