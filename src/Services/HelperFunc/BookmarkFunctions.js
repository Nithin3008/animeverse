import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const encodedToken = localStorage.getItem("loginToken");

export async function addBookmark(dispatcherMain, postId) {
  try {
    const response = await axios.post(
      `https://animebackend.onrender.com/animeverse/posts/addBookmark/${postId}`,
      {},
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (response.status === 201) {
      toast.success(`Added post to Bookmark`, {
        position: "bottom-right",
      });
    }
    dispatcherMain({
      type: "AddBookmarks",
      payload: response.data.bookmarks,
    });
  } catch (error) {
    console.log(error);
  }
}
export async function removeBookmark(dispatcherMain, postId) {
  try {
    const response = await axios.post(
      `https://animebackend.onrender.com/animeverse/posts/removeBookmark/${postId}`,
      {},
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    console.log(response.status);
    if (response.status === 201) {
      toast.error(`Removed from Bookmark`, {
        position: "bottom-right",
      });
    }
    dispatcherMain({
      type: "AddBookmarks",
      payload: response.data.bookmarks,
    });
  } catch (error) {
    console.log(error);
  }
}
