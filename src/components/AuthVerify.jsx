import React, { useContext } from "react";
import { DataContext } from "../Services/Context/DataProvider";
import { Navigate } from "react-router-dom";

const AuthVerify = ({ children }) => {
  const { isLoggedin } = useContext(DataContext);
  return isLoggedin ? children : <Navigate to="/"></Navigate>;
};

export default AuthVerify;
