import {Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";
import Home from "./pages/Home/home";
import Signup from "./pages/Signup/signup";
import Post from "./pages/Post/post";


function App() {
  return (
    <Routes>
      <Route path="/signup" element = {<Signup />}/>
      <Route path="/login" element = {<Login />}/>
      <Route path="/home" element = {<Home />} />
      <Route path = "/post" element = {<Post />}/>
    </Routes>
  );
}

export default App;
