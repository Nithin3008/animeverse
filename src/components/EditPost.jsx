import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { editPostData } from "../Services/HelperFunc/PostFunctions";
import { useContext } from "react";
import { DataContext } from "../Services/Context/DataProvider";
const EditPost = ({ data, hideForm }) => {
  const [editData, setEditData] = useState({ ...data });
  const { dispatcherMain } = useContext(DataContext);
  console.log(typeof editData.img);
  return (
    <div className=" space-y-4 rounded-lg bg-white p-6">
      <div className={`${editData.img ? "relative" : ""}`}>
        {editData.img && (
          <>
            <img
              className="h-60 object-contain rounded-md"
              src={
                typeof editData.img === "object"
                  ? URL.createObjectURL(editData.img)
                  : editData.img
              }
              alt="editImage"
            ></img>
            <span
              className="absolute top-2 right-2 bg-black rounded-full p-1 w-7 text-center "
              onClick={() =>
                setEditData((editData) => ({ ...editData, img: null }))
              }
            >
              <FontAwesomeIcon icon={faX} style={{ color: "#ffffff" }} />
            </span>
          </>
        )}
      </div>
      <div className="text-center">
        <textarea
          type="text"
          onChange={(e) =>
            setEditData((editData) => ({
              ...editData,
              content: e.target.value,
            }))
          }
          value={editData.content}
          className="bg-gray-100 outline-none  h-44 w-full resize-none p-2 rounded-md"
        ></textarea>
      </div>
      <hr></hr>
      <div className="flex justify-between">
        <label>
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
              setEditData((editData) => ({
                ...editData,
                img: event.target.files[0],
              }))
            }
          ></input>
        </label>
        <div className="space-x-2">
          <button
            onClick={() => {
              editPostData(editData, dispatcherMain);
              hideForm();
            }}
            className="bg-blue-500 text-white p-1 text-lg rounded-md"
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-lg text-white p-1 rounded-md"
            onClick={() => hideForm()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
