import { useContext } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../Services/HelperFunc/AuthFunc";

const Signup = () => {
  const [showPwd, setShow] = useState(true);
  const { signupHandler } = useContext(AuthContext);
  function signupDataHandler(event) {
    event.preventDefault();
    signupHandler(event);
  }

  return (
    <>
      <div className="flex h-screen justify-center items-center font-nunito">
        <div className="w-1/2 text-center ">
          <h1 className="text-4xl  font-normal">Welcome To Need For Speed</h1>
          <form
            onSubmit={(e) => signupDataHandler(e)}
            className="flex flex-col items-center space-y-5"
          >
            {" "}
            <label className="text-xl font-medium">Enter Firstname</label>
            <input
              className="border-b-2 outline-none border-stone-500"
              type="text"
              id="fname"
            ></input>
            <label className="text-xl font-medium">Enter Lastname</label>
            <input
              className="border-b-2 outline-none border-stone-500"
              type="text"
              id="lname"
            ></input>
            <label className="text-xl font-medium">Enter Username</label>
            <input
              className="border-b-2 outline-none border-stone-500"
              type="text"
              id="username"
            ></input>
            <label className="text-xl font-medium">Enter Password</label>
            <div>
              <input
                className="border-b-2 outline-none border-stone-500"
                type={showPwd ? "password" : "text"}
                id="pwd"
              ></input>
              <span
                className="pointer"
                onClick={() => setShow((show) => !show)}
              >
                <FontAwesomeIcon icon={faEyeSlash} />
              </span>
            </div>
            <button
              className="p-1 text-lg bg-red-500 text-white rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="h-full max-[850px]:hidden">
          <img className=" h-full" src="/images/login1.png" alt="loginImage" />
        </div>
      </div>
    </>
  );
};

export default Signup;
