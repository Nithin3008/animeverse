import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMessage,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import {
  faShare,
  faPenToSquare,
  faHeart as farHeart,
  faBookmark as farBookmark,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import { getAvatar, getDate } from "../Services/HelperFunc/HelperFunctions";
import EditPost from "./EditPost";
import {
  LikePosts,
  checkLikes,
  unLikePosts,
} from "../Services/HelperFunc/PostFunctions";
import { DataContext } from "../Services/Context/DataProvider";
import { deletePost } from "../Services/HelperFunc/PostFunctions";
import {
  addBookmark,
  removeBookmark,
} from "../Services/HelperFunc/BookmarkFunctions";
const PostDisplay = ({ data, Users }) => {
  const [showEdit, setShow] = useState(false);
  const { dispatcherMain, loggedInUser, Posts, BookMarks } =
    useContext(DataContext);
  const [showEditForm, setEditForm] = useState(false);
  function hideForm() {
    setEditForm(false);
  }
  console.log(BookMarks);
  return (
    <li className="flex gap-4 items-start border-b-2 border-stone-400 p-3">
      <img
        className="rounded-full h-12 w-12 object-fit"
        src={getAvatar(Users, data.username)}
        alt="userProfile"
      ></img>
      <div className="space-y-1     ">
        <div className="space-x-1 flex items-center justify-between">
          <div>
            <span className="text-xl font-semibold">{data.firstName} </span>
            <span className="text-stone-400"> @{data.username}</span>
            <span className="text-stone-400"> {getDate(data.updatedAt)}</span>
          </div>

          <div
            className={`cursor-pointer relative flex ${
              loggedInUser.username === data.username ? "" : "hidden"
            }`}
          >
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ color: "#000000" }}
              onClick={() => setShow((s) => !s)}
            />
            <div
              className={`${
                showEdit ? "block" : "hidden"
              } absolute bg-white border-2 border-black p-2 rounded-md right-5`}
            >
              <button
                onClick={() => {
                  setEditForm(true);
                  setShow(false);
                }}
                className="p-1 mb-1 bg-blue-500 text-white rounded "
              >
                Edit
              </button>
              <button
                onClick={() => deletePost(dispatcherMain, data._id)}
                className="p-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        {data.img && (
          <img
            src={data.img}
            className="h-60 object-center rounded-lg "
            alt="postImage"
          ></img>
        )}
        <div className="space-y-1">
          <p className="w-[30rem] max-md:w-fit text-sm ">{data.content}</p>
          <div className="flex gap-10 item-center">
            <span
              onClick={() =>
                checkLikes(Posts, loggedInUser).includes(data._id)
                  ? unLikePosts(dispatcherMain, data._id)
                  : LikePosts(dispatcherMain, data._id)
              }
            >
              {checkLikes(Posts, loggedInUser).includes(data._id) ? (
                <>
                  <FontAwesomeIcon
                    icon={farHeart}
                    style={{ color: "#e90c0c" }}
                  />
                </>
              ) : (
                <FontAwesomeIcon icon={faHeart} style={{ color: "#e90c0c" }} />
              )}
              <span className="p-1">{data.likes.likeCount}</span>
            </span>
            <span
              onClick={() =>
                BookMarks.includes(data._id)
                  ? removeBookmark(dispatcherMain, data._id)
                  : addBookmark(dispatcherMain, data._id)
              }
            >
              {BookMarks.includes(data._id) ? (
                <FontAwesomeIcon
                  icon={farBookmark}
                  style={{ color: "#000000" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{ color: "#000000" }}
                />
              )}
            </span>
            <span className="space-x-10">
              {" "}
              <FontAwesomeIcon icon={faMessage} style={{ color: "#000000" }} />
              <FontAwesomeIcon icon={faShare} style={{ color: "#000000" }} />
            </span>
          </div>
        </div>
      </div>
      {showEditForm && (
        <Modal>
          <EditPost data={data} hideForm={hideForm}></EditPost>
        </Modal>
      )}
    </li>
  );
};

export default PostDisplay;
