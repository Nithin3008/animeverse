import React, { useContext, useState } from "react";
import { dpData, editUsers } from "../Services/HelperFunc/UsersFunc";
import { DataContext } from "../Services/Context/DataProvider";
const EditProfile = ({ data, hideEdit }) => {
  const [editData, setEditData] = useState({ ...data });
  const { dispatcherMain } = useContext(DataContext);
  return (
    <div className="bg-white p-4 rounded-md space-y-5">
      <div className="flex gap-8 items-center">
        <img
          src={editData.avatar}
          alt="profilePic"
          className="h-48 w-56 rounded-md"
        ></img>
        <ul className="grid grid-cols-3 gap-2">
          {dpData.map((links) => (
            <img
              alt="dp"
              onClick={() =>
                setEditData((data) => ({ ...data, avatar: links }))
              }
              src={links}
              className="rounded-md"
            ></img>
          ))}
        </ul>
      </div>
      <div className="text-center">
        <input
          type="text"
          value={editData.bio}
          onChange={(e) =>
            setEditData((data) => ({ ...data, bio: e.target.value }))
          }
          className="bg-slate-100 p-2 w-full"
        ></input>
      </div>
      <div>
        <input
          value={editData.portfolio}
          className="w-full m-auto p-2 resize-none outline-none bg-slate-100"
          onChange={(e) =>
            setEditData((data) => ({ ...data, portfolio: e.target.value }))
          }
        ></input>
      </div>
      <div className="flex justify-around">
        <button
          onClick={() => {
            editUsers(dispatcherMain, editData);
            hideEdit();
          }}
          className="text-lg bg-blue-500 text-white p-2 rounded-md"
        >
          Update
        </button>
        <button
          className="text-lg bg-red-500 text-white p-2 rounded-md"
          onClick={() => hideEdit()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
