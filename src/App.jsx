import { Route, Routes } from "react-router";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./pages/Signup";
import Explore from "./pages/Explore";
import Bookmark from "./pages/Bookmark";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/Signup" element={<Signup></Signup>}></Route>
        <Route path="/Explore" element={<Explore></Explore>}></Route>
        <Route path="/Bookmark" element={<Bookmark></Bookmark>}></Route>
        <Route path="/Profile/:profileId" element={<Profile></Profile>}></Route>
      </Routes>
    </div>
  );
}

export default App;
