import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const encodedToken = localStorage.getItem("loginToken");

export const setFollow = async (dispatcherMain, followUserId) => {
  console.log(dispatcherMain, followUserId);
  try {
    const response = await axios.post(
      `/api/users/follow/${followUserId}`,
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

    dispatcherMain({ type: "userDetails", payload: response.data.user });
    dispatcherMain({
      type: "AddFollowing",
      payload: response.data.user.following,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setUnFollow = async (dispatcherMain, followUserId) => {
  try {
    const response = await axios.post(
      `/api/users/unfollow/${followUserId}`,
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

    dispatcherMain({ type: "userDetails", payload: response.data.user });
    dispatcherMain({
      type: "AddFollowing",
      payload: response.data.user.following,
    });
  } catch (error) {
    console.log(error);
  }
};
