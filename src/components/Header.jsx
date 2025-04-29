import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-6 font-mono">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">SoriFul</a>
        </div>
        <div className="flex gap-6 ">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
