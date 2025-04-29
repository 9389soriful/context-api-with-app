import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/login", Component: Login },
      { path: "/signUp", Component: SignUp },
    ],
  },
]);
