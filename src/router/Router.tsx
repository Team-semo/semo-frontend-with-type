import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignupPage from "../pages/auth/SignupPage";
import { HOME, AUTH } from "./routerPath";
import NicknamePage from "../pages/auth/NicknamePage";
import InterestPage from "../pages/auth/InterestPage";
import IntroducePage from "../pages/auth/IntroducePage";
import AuthDefaultTemplate from "../pages/AuthDefaultTemplate";

const Router = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Home />}></Route>
      <Route path={AUTH.auth} element={<AuthDefaultTemplate />}>
        <Route path={AUTH.authRoot} element={<SignupPage />}></Route>
        <Route path={AUTH.nickname} element={<NicknamePage />}></Route>
        <Route path={AUTH.interest} element={<InterestPage />}></Route>
        <Route path={AUTH.introduce} element={<IntroducePage />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;
