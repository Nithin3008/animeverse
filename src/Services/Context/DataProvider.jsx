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
          bookmarks: action.payload.bookmarks,
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
    const response = await axios.get(`/api/posts`);
    dispatcherMain({ type: "getPosts", payload: response.data.posts });
  };
  const initialUsers = async () => {
    const resUsers = await axios.get("/api/users");
    dispatcherMain({ type: "getUsers", payload: resUsers.data.users });
  };
  const initialPosts = async () => {
    try {
      const response = await axios.get(`/api/posts`);

      if (response.status === 200) {
        console.log(response.data.posts);
        dispatcherMain({ type: "getPosts", payload: response.data.posts });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const initialBookmarks = async () => {
    try {
      const response = await axios.get("/api/users/bookmark", {
        headers: {
          authorization: encodedToken,
        },
      });

      dispatcherMain({
        type: "AddBookmarks",
        payload: response.data.bookmarks,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    initialData();
    initialUsers();
    initialPosts();
    initialBookmarks();
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
