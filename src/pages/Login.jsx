import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../Services/HelperFunc/AuthFunc";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
const Login = () => {
  const { LoginHandler } = useContext(AuthContext);
  function testCred() {
    const details = {
      userName: "kakshiOfTheSharigan",
      pwd: "sensei",
    };
    LoginHandler(null, details);
  }

  const [showPwd, setShow] = useState(true);
  return (
    <div className="flex h-screen justify-center items-center font-nunito">
      <div className=" w-1/2 text-center  ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            LoginHandler(e, null);
          }}
          className="flex flex-col items-center space-y-5"
        >
          <h1 className="text-5xl  font-normal">Welcome Back</h1>
          <label className="text-xl font-medium">Enter Username</label>
          <input
            className="border-b-2 outline-none border-stone-500"
            type="text"
            id="username"
            required
          ></input>
          <label className="text-xl font-medium">Enter Password</label>
          <div>
            <input
              className="border-b-2 outline-none border-stone-500"
              type={showPwd ? "password" : "text"}
              id="pwd"
              required
            ></input>
            <span className="pointer" onClick={() => setShow((show) => !show)}>
              <FontAwesomeIcon icon={faEyeSlash} />
            </span>
          </div>
          <button
            className="p-1 text-lg bg-red-600 text-white rounded"
            type="submit"
          >
            Login
          </button>
        </form>
        <button
          onClick={testCred}
          className="p-1 text-lg bg-red-600 text-white rounded my-4"
        >
          Login with Test Credentials
        </button>
        <p className="text-lg p-2 mt-3 space-x-2">
          Don't Have Account?
          <NavLink to="/Signup">Signup!</NavLink>
        </p>
      </div>
      <div className="h-full max-[850px]:hidden">
        <img className=" h-full" src="/images/login1.png" alt="loginImage" />
      </div>
    </div>
  );
};

export default Login;
