import { createContext, useEffect, useReducer } from "react";
import axios from "axios";

export const DataContext = createContext();
const MainData = {
  ExistedUsers: [],
  isLoggedin: false,
  loggedInUser: {},
  bookmarks: [],
  posts: [],
  followers: [],
  following: [],
};
export function DataProvider({ children }) {
  const [state, dispatcherMain] = useReducer(MainFun, MainData);

  function MainFun(state, action) {
    switch (action.type) {
      case "getPosts":
        return { ...state, posts: action.payload };

      case "getUsers":
        return { ...state, ExistedUsers: action.payload };

      case "userDetails":
        return {
          ...state,
          bookmarks: action.payload.bookmark,
          followers: action.payload.followers,
          following: action.payload.following,
          loggedInUser: action.payload,
        };
      case "setUserDetails":
        return {
          ...state,
          isLoggedin: true,
          loggedInUser: {
            ...action.payload,
          },
          bookmarks: action.payload.bookmark,
        };
      case "AddFollowing":
        return { ...state, following: action.payload };

      case "AddBookmarks":
        return { ...state, bookmarks: action.payload };
      case "Logout":
        return {
          ...state,
          isLoggedin: false,
          loggedInUser: {},
          bookmarks: [],
          followers: [],
          following: [],
        };
      default:
        return state;
    }
  }
  console.log(state);
  const encodedToken = localStorage.getItem("loginToken");
  const initialData = async () => {
    const response = await axios.get(
      `https://animebackend.onrender.com/animeverse/posts`,
      {
        headers: { Authorization: encodedToken },
      }
    );
    dispatcherMain({ type: "getPosts", payload: response.data.posts });
  };
  const initialUsers = async () => {
    const resUsers = await axios.get(
      "https://animebackend.onrender.com/animeverse/users/allUsers",
      {
        headers: { Authorization: encodedToken },
      }
    );
    dispatcherMain({ type: "getUsers", payload: resUsers.data.users });
  };

  useEffect(() => {
    initialData();
    initialUsers();
  }, [state.loggedInUser]);
  return (
    <>
      <DataContext.Provider
        value={{
          dispatcherMain,
          Posts: state.posts,
          Users: state.ExistedUsers,
          loggedInUser: state.loggedInUser,
          loggedInUserFollwers: state.following,
          BookMarks: state.bookmarks,
          isLoggedin: state.isLoggedin,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
}
