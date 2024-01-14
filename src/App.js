import {Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";
import Home from "./pages/Home/home";
import Signup from "./pages/Signup/signup";
import Post from "./pages/Post/post";
import Navbar from "./modules/Navbar/navbar";
import Layout from "./modules/Layout";


function App() {
  return (
    <Layout> 
      <Routes>
        <Route path="/signup" element = {<Signup />}/>
        <Route path="/login" element = {<Login />}/>
        <Route path="/home" element = {<Home />} />
        <Route path = "/post" element = {<Post />}/> 
      </Routes>
    </Layout> 
  );
}

export default App;
