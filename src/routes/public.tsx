import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import isLogin from "@utils/isLogin";
import React from "react";

interface Props {
  children: ReactElement;
}

const PublicRoute = ({ children: Component }: Props) => {
  return isLogin() ? <Navigate to="/" /> : Component;
};
export default PublicRoute;