import axios from "axios";

const encodedToken = localStorage.getItem("loginToken");

export function followersExist(loggedInUserFollwers, userId) {
  const check = loggedInUserFollwers.includes(userId);
  return check;
}
export const dpData = [
  "https://github.com/Nithin3008/social_media_proj/blob/master/public/images/dp1.jpeg?raw=true",
  "https://github.com/Nithin3008/social_media_proj/blob/master/public/images/dp2.jpeg?raw=true",
  "https://github.com/Nithin3008/social_media_proj/blob/master/public/images/dp3.jpg?raw=true",
  "https://github.com/Nithin3008/social_media_proj/blob/master/public/images/dp4.png?raw=true",
  "https://github.com/Nithin3008/social_media_proj/blob/master/public/images/dp6.jpg?raw=true",
  ,
  "https://github.com/Nithin3008/social_media_proj/blob/master/public/images/dp5.jpg?raw=true",
];
async function uploadImage(post) {
  try {
    const file = post.img;
    const present_key = "social_media_proj";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", present_key);
    if (post.img) {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/king-cloud/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const x = await res.json();
      console.log(x.url);
      post.avatar = x.url;
    } else {
      return { ...post, img: null };
    }
  } catch (error) {
    console.log(error);
  }

  return post;
}
export const editUser = async (dispatcherMain, newDetails) => {
  try {
    console.log(newDetails);
    const response = await axios.post(
      `https://animebackend.onrender.com/animeverse/users/editUser`,
      { ...newDetails },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    console.log(response.data.user);
    dispatcherMain({ type: "setUserDetails", payload: response.data.user });
  } catch (error) {
    console.log(error);
  }
};
export async function editUsers(dispatcherMain, User) {
  const result1 = await uploadImage(User);
  editUser(dispatcherMain, result1);
}

// export function userAvatars(userName) {
//   const url = Users.find((val) => val.username === userName);
//   return url === undefined ? null : url.avatar;
// }
