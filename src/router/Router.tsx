import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/auth/Home";
import LoginAndSignUp from "../pages/auth/LoginAndSignUp";
import { HOME, LOGIN_AND_SIGNUP } from "./routerPath";

const Router = () => {
  return (
    <Routes>
      <Route path={LOGIN_AND_SIGNUP} element={<LoginAndSignUp />}></Route>
      <Route path={HOME} element={<Home />}></Route>
    </Routes>
  );
};

export default Router;
