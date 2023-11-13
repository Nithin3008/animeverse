import React from "react";
import { NavLink } from "react-router-dom";
const LinkButton = ({ children, to, styling }) => {
  return (
    <NavLink
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? "semiBold" : "",
          //   color: isActive ? "#0047AB" : "black",
          fontSize: "1.4rem",
          fontWeight: isActive ? "500" : "",
        };
      }}
      to={to}
      className={"space-x-2"}
    >
      {children}
    </NavLink>
  );
};

export default LinkButton;
