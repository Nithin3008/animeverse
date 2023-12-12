import React, { useContext, useState } from "react";
import { DataContext } from "../Services/Context/DataProvider";
import Modal from "./Modal";
import EditProfile from "./EditProfile";
import { followersExist } from "../Services/HelperFunc/UsersFunc";
import { setFollow, setUnFollow } from "../Services/HelperFunc/FollowFunc";
import { AuthContext } from "../Services/HelperFunc/AuthFunc";

const ProfileSec = ({ data }) => {
  const { loggedInUser, Posts, loggedInUserFollwers, dispatcherMain } =
    useContext(DataContext);
  const { logoutFun } = useContext(AuthContext);
  const profileData =
    loggedInUser.username === data.username ? { ...loggedInUser } : { ...data };
  const posts = [...Posts].filter(
    (val) => val.username === profileData.username
  );
  const [showEdit, setEdit] = useState(false);
  function hideEdit() {
    setEdit(false);
  }
  return (
    <>
      <div className="flex items-center justify-between p-3 pt-14 bg-amber-50">
        <div>
          {profileData.avatar ? (
            <img
              className="rounded-full h-36 w-36"
              src={profileData.avatar}
              alt="profilePic"
            ></img>
          ) : null}

          <p className=" text-2xl">
            {profileData.firstName} {profileData.lastName}
          </p>
          <p className="text-stone-400">@{profileData.username}</p>

          <p className="text-lg">{profileData.bio}</p>
          <div className="text-lg text-blue-500 ">
            <a href={profileData.portfolio} target="_blank">
              More about me...
            </a>
          </div>

          <p className="text-lg">
            Joined:{" "}
            {new Date(profileData.createdAt).toDateString().slice(4, 15)}
          </p>
          <p className="">
            Followers: {profileData.followers.length} Following:{" "}
            {profileData.following.length} Posts: {posts.length}
          </p>
        </div>
        <div>
          {loggedInUser.username === profileData.username ? (
            <div className="flex flex-col gap-3">
              <button
                className="text-lg text-white bg-black px-2 py-1 rounded-md"
                onClick={() => setEdit(!showEdit)}
              >
                Edit Profile
              </button>
              <button
                onClick={() => logoutFun()}
                className="text-lg text-white p-1 bg-red-500 rounded-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() =>
                followersExist(loggedInUserFollwers, profileData._id)
                  ? setUnFollow(dispatcherMain, profileData._id)
                  : setFollow(dispatcherMain, profileData._id)
              }
              className="text-lg text-white bg-black p-1 rounded-md"
            >
              {followersExist(loggedInUserFollwers, profileData._id)
                ? "unfollow"
                : "Follow"}
            </button>
          )}
        </div>
      </div>
      {showEdit && (
        <Modal>
          <EditProfile data={profileData} hideEdit={hideEdit}></EditProfile>
        </Modal>
      )}
    </>
  );
};

export default ProfileSec;
