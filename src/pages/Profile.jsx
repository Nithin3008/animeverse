import React, { useContext } from "react";
import ProfileSec from "../components/ProfileSec";
import { useParams } from "react-router-dom";
import { DataContext } from "../Services/Context/DataProvider";
import NavBar from "../components/NavBar";
import SuggestedFollowers from "../components/SuggestedFollowers";
import PostDisplay from "../components/PostDisplay";
import NavBarMini from "../components/NavBarMini";
const Profile = () => {
  const { profileId } = useParams();
  const { Users, Posts } = useContext(DataContext);
  const userData = Users.find((val) => val._id === profileId);
  const PostsData = [...Posts].filter(
    (val) => val.username === userData.username
  );
  return (
    <>
      <section className="flex w-fit mx-auto  ">
        <NavBar></NavBar>
        <div className="border-x-2  border-stone-400">
          <ProfileSec data={userData}></ProfileSec>
          <ul className="space-y-1 border-t-2 border-stone-400 ">
            {PostsData?.map((val) => (
              <PostDisplay data={val} Users={Users} key={val._id}></PostDisplay>
            ))}
          </ul>
        </div>
        <SuggestedFollowers></SuggestedFollowers>
      </section>
      <NavBarMini></NavBarMini>
    </>
  );
};

export default Profile;
