import React from "react";
import { Outlet } from "react-router-dom";

const AuthDefaultTemplate = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthDefaultTemplate;
