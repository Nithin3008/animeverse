import React, { useContext } from "react";
import { DataContext } from "../Services/Context/DataProvider";
import { setFollow, setUnFollow } from "../Services/HelperFunc/FollowFunc";
import { followersExist } from "../Services/HelperFunc/UsersFunc";
import { useNavigate } from "react-router-dom";
export default function SuggestedFollowers() {
  const { Users, loggedInUser, loggedInUserFollwers, dispatcherMain } =
    useContext(DataContext);
  const nav = useNavigate();
  const suggestedUsersList = [...Users].filter(
    (val) => val.username !== loggedInUser.username
  );
  return (
    <div className="h-screen sticky top-0  h-screen   p-4 max-xl:hidden space-y-4">
      <h1 className="text-2xl text-center p-2">Suggested Users</h1>
      <ul className="space-y-4">
        {suggestedUsersList?.map((val) => (
          <li
            key={val._id}
            className="flex justify-between gap-6 hover:cursor-pointer"
          >
            <div
              className="flex gap-2"
              onClick={() => nav(`/Profile/${val._id}`)}
            >
              <img
                className="rounded-full h-12 w-12 object-fit"
                src={val.avatar}
                alt="profilePic"
              ></img>
              <div>
                <p className="text-lg">
                  {val.firstName}
                  {val.lastName}
                </p>
                <p className="text-stone-400">{val.username}</p>
              </div>
            </div>
            <button
              className="text-lg bg-black text-white  px-2 rounded-lg"
              onClick={() =>
                followersExist(loggedInUserFollwers, val._id)
                  ? setUnFollow(dispatcherMain, val._id)
                  : setFollow(dispatcherMain, val._id)
              }
            >
              {followersExist(loggedInUserFollwers, val._id)
                ? "unfollow"
                : "Follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
