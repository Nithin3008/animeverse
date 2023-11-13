import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCompass,
  faBookmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../Services/Context/DataProvider";
const NavBarMini = () => {
  const { loggedInUser } = useContext(DataContext);
  return (
    <div className=" hidden max-lg:visible max-lg:flex max-lg:justify-around sticky bottom-0 bg-white border-t-[1px] border-black p-4">
      <NavLink to="/Home">
        <FontAwesomeIcon
          icon={faHouse}
          size="lg"
          style={{ color: "#000000" }}
        />
      </NavLink>
      <NavLink to="/Explore">
        <FontAwesomeIcon
          icon={faCompass}
          size="lg"
          style={{ color: "#000000" }}
        />
      </NavLink>
      <NavLink to="/Bookmark">
        <FontAwesomeIcon
          icon={faBookmark}
          size="lg"
          style={{ color: "#000000" }}
        />
      </NavLink>
      <NavLink to={`/Profile/${loggedInUser._id}`}>
        <FontAwesomeIcon icon={faUser} size="lg" style={{ color: "#000000" }} />
      </NavLink>
    </div>
  );
};

export default NavBarMini;
