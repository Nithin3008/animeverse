import React, { useContext } from "react";
import { DataContext } from "../Services/Context/DataProvider";
import NavBar from "../components/NavBar";
import PostDisplay from "../components/PostDisplay";
import SuggestedFollowers from "../components/SuggestedFollowers";
import NavBarMini from "../components/NavBarMini";

const Bookmark = () => {
  const { BookMarks, Posts, Users } = useContext(DataContext);

  const PostsData = [...Posts].filter((bookPosts) =>
    BookMarks.includes(bookPosts._id)
  );
  console.log(BookMarks, PostsData);
  return (
    <>
      <section className="flex w-fit mx-auto ">
        <NavBar></NavBar>
        <div className="border-x-2 h-screen  border-stone-400">
          <h1 className="text-3xl font-medium text-center p-4">Bookmarks</h1>
          <hr></hr>
          {PostsData.length <= 0 ? (
            <h2 className="text-2xl p-2 px-24">Bookmark is Empty</h2>
          ) : (
            <ul className="space-y-1 border-stone-400 ">
              {PostsData?.map((val) => (
                <PostDisplay
                  data={val}
                  Users={Users}
                  key={val._id}
                ></PostDisplay>
              ))}
            </ul>
          )}
        </div>
        <SuggestedFollowers></SuggestedFollowers>
      </section>
      <NavBarMini></NavBarMini>
    </>
  );
};

export default Bookmark;
