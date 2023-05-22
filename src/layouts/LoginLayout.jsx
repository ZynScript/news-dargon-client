import React from "react";
import Header from "../pages/Shared/Header/Header";
import {Outlet} from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";

const LoginLayout = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default LoginLayout;
