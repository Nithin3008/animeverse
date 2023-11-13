import { Route, Routes } from "react-router";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./pages/Signup";
import Explore from "./pages/Explore";
import Bookmark from "./pages/Bookmark";
import Profile from "./pages/Profile";
import AuthVerify from "./components/AuthVerify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/Home"
          element={
            <AuthVerify>
              <Home></Home>
            </AuthVerify>
          }
        ></Route>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/Signup" element={<Signup></Signup>}></Route>
        <Route
          path="/Explore"
          element={
            <AuthVerify>
              <Explore></Explore>
            </AuthVerify>
          }
        ></Route>
        <Route
          path="/Bookmark"
          element={
            <AuthVerify>
              <Bookmark></Bookmark>
            </AuthVerify>
          }
        ></Route>
        <Route
          path="/Profile/:profileId"
          element={
            <AuthVerify>
              <Profile></Profile>
            </AuthVerify>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
