import React, { useContext } from "react";
import LinkButton from "./LinkButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faCompass,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../Services/Context/DataProvider";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const { loggedInUser } = useContext(DataContext);
  const nav = useNavigate();
  return (
    <div className="sticky bottom-0 top-0  h-screen flex flex-col justify-between  p-6 max-lg:hidden">
      <div className="flex flex-col gap-5 ">
        <LinkButton to={"/Home"}>
          <FontAwesomeIcon icon={faHouseChimney} style={{ color: "#000000" }} />
          <span>Home</span>
        </LinkButton>
        <LinkButton to={"/Explore"}>
          <FontAwesomeIcon icon={faCompass} style={{ color: "#00040a" }} />
          <span>Explore</span>
        </LinkButton>
        <LinkButton to={"/Bookmark"}>
          <FontAwesomeIcon icon={faBookmark} style={{ color: "#000000" }} />
          <span>BookMarks</span>
        </LinkButton>
      </div>
      <div
        onClick={() => nav(`/Profile/${loggedInUser._id}`)}
        className="flex gap-2 py-2 mb-1 hover:cursor-pointer"
      >
        <img
          className="rounded-full h-12 w-12 object-fit"
          src={loggedInUser.avatar}
          alt="profilePic"
        ></img>
        <div>
          <p className="text-lg">
            {loggedInUser.firstName}
            {loggedInUser.lastName}
          </p>
          <p className="text-stone-400">{loggedInUser.username}</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
