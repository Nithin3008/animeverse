import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const encodedToken = localStorage.getItem("loginToken");

export const setFollow = async (dispatcherMain, followUserId) => {
  console.log(dispatcherMain, followUserId);
  try {
    const response = await axios.post(
      `https://animebackend.onrender.com/animeverse/users/followUser/${followUserId}`,
      {},
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (response.status === 200) {
      toast.success(`You following a new user`, {
        position: "top-center",
      });
    }
    dispatcherMain({
      type: "AddFollowing",
      payload: response.data.user.followers,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setUnFollow = async (dispatcherMain, followUserId) => {
  try {
    const response = await axios.post(
      `https://animebackend.onrender.com/animeverse/users/unFollowUser/${followUserId}`,
      {},
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (response.status === 200) {
      toast.warning(`You unfollowing user`, {
        position: "top-center",
      });
    }
    dispatcherMain({
      type: "AddFollowing",
      payload: response.data.user.followers,
    });
  } catch (error) {
    console.log(error);
  }
};
