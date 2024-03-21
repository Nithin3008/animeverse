import axios from "axios";
const encodedToken = localStorage.getItem("loginToken");
export async function LikePosts(dispatcherMain, postId) {
  try {
    const response = await axios.post(
      `https://animebackend.onrender.com/animeverse/posts/likePost/${postId}`,
      {},
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (response.status === 200) {
      dispatcherMain({ type: "getPosts", payload: response.data.getAllPosts });
    }
  } catch (error) {
    console.log(error);
  }
}
export async function unLikePosts(dispatcherMain, postId) {
  try {
    const response = await axios.post(
      `https://animebackend.onrender.com/animeverse/posts/unlikePost/${postId}`,
      {},
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    dispatcherMain({ type: "getPosts", payload: response.data.getAllPosts });
  } catch (error) {
    console.log(error);
  }
}

//uploading Image
export async function uploadImage(newPostData) {
  try {
    const file = newPostData.img;
    console.log(file);
    console.log(file, "image path");
    const present_key = "social_media_proj";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", present_key);
    if (newPostData.img) {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/king-cloud/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const x = await res.json();
      console.log(x);
      newPostData.img = x.url;
    } else {
      return { ...newPostData, img: null };
    }
  } catch (error) {
    console.log(error);
  }

  return newPostData;
}
async function createNewPost(dispatcherMain, newPostData) {
  try {
    const response = await axios.post(
      "https://animebackend.onrender.com/animeverse/posts/create",
      {
        ...newPostData,
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (response.status === 201) {
      dispatcherMain({ type: "getPosts", payload: response.data.getAllPosts });
      return response.data.posts;
    }
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
export async function uploadNewPost(dispatcherMain, post) {
  console.log(post);
  const result1 = await uploadImage(post);
  createNewPost(dispatcherMain, result1);
}
//edit Post
async function editPostOld(oldPostData, dispatcherMain) {
  try {
    const response = await axios.post(
      `https://animebackend.onrender.com/animeverse/posts/editPost`,
      { ...oldPostData },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (response.status === 200) {
      dispatcherMain({ type: "getPosts", payload: response.data.getAllPosts });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function editPostData(editPost, dispatcherMain) {
  const result1 = await uploadImage(editPost);
  editPostOld(result1, dispatcherMain);
}

export async function deletePost(dispatcherMain, postId) {
  try {
    const response = await axios.delete(
      `https://animebackend.onrender.com/animeverse/posts/deletePost/${postId}`,
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (response.status === 200) {
      dispatcherMain({ type: "getPosts", payload: response.data.getAllPosts });
    }
  } catch (error) {
    console.log(error);
  }
}
export function checkLikes(Posts, loggedInUser) {
  const x = [...Posts]?.map((post) =>
    post?.likes?.likedBy.find((user) => user === loggedInUser._id) === undefined
      ? false
      : post._id
  );
  return x;
}
