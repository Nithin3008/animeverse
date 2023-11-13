import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataContext } from "../Context/DataProvider";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { dispatcherMain } = useContext(DataContext);
  const nav = useNavigate();
  async function LoginHandler(event, testDetails) {
    let userName = "";
    let pwd = "";
    if (testDetails) {
      userName = testDetails.userName;
      pwd = testDetails.pwd;
      // dispatch(setLogin(testDetails));
    } else {
      userName = event.target.username.value;
      pwd = event.target.pwd.value;
    }
    console.log(userName, pwd);
    try {
      const response = await axios.post(`/api/auth/login`, {
        username: userName,
        password: pwd,
      });
      console.log(response.data.foundUser);
      if (response.status === 200) {
        localStorage.setItem("loginToken", response.data.encodedToken);
        toast.success("Welcome Back", {
          position: "top-center",
        });
        dispatcherMain({
          type: "setUserDetails",
          payload: response.data.foundUser,
        });
        return nav("/Home");
      }
    } catch (error) {
      toast.error("Please enter correct details", {
        position: "top-center",
      });
    }
  }

  const signupHandler = async (event) => {
    const details = {
      firstName: event.target.fname.value,
      lastName: event.target.lname.value,
      username: event.target.username.value,
    };
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: event.target.fname.value,
        lastName: event.target.lname.value,
        username: event.target.username.value,
        password: event.target.pwd.value,
      });
      console.log(response.data);
      if (response.status === 201) {
        toast.success(`Welcome ${details.fName}`, {
          position: "top-center",
        });
        dispatcherMain({ type: "setUserDetails", payload: details });
        return nav("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  function logoutFun() {
    localStorage.clear();
    toast.success(`Bye Bye`, {
      position: "top-center",
    });
    nav("/");
  }
  return (
    <>
      <AuthContext.Provider value={{ LoginHandler, signupHandler, logoutFun }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
