import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import NewPost from "../components/NewPost";
import SuggestedFollowers from "../components/SuggestedFollowers";
import { DataContext } from "../Services/Context/DataProvider";
import PostDisplay from "../components/PostDisplay";
import NavBarMini from "../components/NavBarMini";
const Home = () => {
  const { Posts, Users } = useContext(DataContext);
  return (
    <>
      <section className="flex w-fit mx-auto  ">
        <NavBar></NavBar>
        <div className="border-x-2  border-stone-400">
          <NewPost></NewPost>

          <ul className="space-y-1 border-t-2 border-stone-400 ">
            {Posts?.map((val) => (
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

export default Home;
