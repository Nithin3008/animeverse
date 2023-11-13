import React, { useContext, useState } from "react";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { uploadNewPost } from "../Services/HelperFunc/PostFunctions";
import { DataContext } from "../Services/Context/DataProvider";
import { faX } from "@fortawesome/free-solid-svg-icons";

const NewPost = () => {
  const { dispatcherMain } = useContext(DataContext);
  const [newPostData, setNewPostData] = useState({ img: "", content: "" });
  return (
    <div className="p-4">
      <textarea
        className="resize-none w-full h-32 text-lg p-2 outline-none "
        placeholder="what's happening?"
        onChange={(e) =>
          setNewPostData({ ...newPostData, content: e.target.value })
        }
      ></textarea>
      <div className="relative w-full">
        {newPostData.img && (
          <>
            <img
              className="h-44 w-full object-contain"
              src={URL.createObjectURL(newPostData.img)}
              alt="newImage"
            ></img>
            <span
              onClick={() => setNewPostData({ ...newPostData, img: null })}
              className="absolute top-1 right-32 bg-black rounded-full p-1 w-7 text-center "
            >
              <FontAwesomeIcon icon={faX} style={{ color: "#ffffff" }} />
            </span>
          </>
        )}
      </div>
      <hr></hr>
      <div className="flex justify-between items-center p-2">
        <label>
          {" "}
          <FontAwesomeIcon
            size="xl"
            icon={faImage}
            style={{ color: "#3278f1" }}
            className="cursor-pointer"
          />
          <input
            style={{ display: "none" }}
            type="file"
            onChange={(event) =>
              setNewPostData({
                ...newPostData,
                img: event.target.files[0],
              })
            }
          ></input>
        </label>
        <button
          onClick={() => uploadNewPost(dispatcherMain, newPostData)}
          className="text-lg bg-blue-500 text-white  p-1 px-2 rounded-md"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default NewPost;
