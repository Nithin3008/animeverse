import React, { useContext, useState } from "react";
import { DataContext } from "../Services/Context/DataProvider";
import NavBar from "../components/NavBar";
import PostDisplay from "../components/PostDisplay";
import SuggestedFollowers from "../components/SuggestedFollowers";
import NavBarMini from "../components/NavBarMini";

const Explore = () => {
  const { Posts, Users } = useContext(DataContext);
  const [latesTrending, setFilter] = useState(true);
  const filteredPosts = latesTrending
    ? [...Posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount)
    : [...Posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return (
    <>
      <section className="flex w-fit mx-auto  ">
        <NavBar></NavBar>

        <div className="border-x-[1px]  border-stone-400">
          <div className="flex justify-around p-2 text-xl">
            <button
              className={`${latesTrending ? "border-b-2 border-blue-500" : ""}`}
              onClick={() => setFilter((s) => !s)}
            >
              Latest
            </button>
            <button
              className={`${latesTrending ? "" : "border-b-2 border-blue-500"}`}
              onClick={() => setFilter((s) => !s)}
            >
              Trending
            </button>
          </div>
          <ul className="space-y-1 border-t-[1px] border-stone-400 ">
            {filteredPosts?.map((val) => (
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

export default Explore;
