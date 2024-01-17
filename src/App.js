import {Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/login";
import Home from "./pages/Home/home";
import Signup from "./pages/Signup/signup";
import Post from "./pages/Post/post";
import Layout from "./modules/Layout";
import Bookmarked from "./pages/Bookmarked/bookmarked";
import { AuthProvider } from "./modules/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Layout> 
        <Routes>
          <Route path="/signup" element = {<Signup />}/>
          <Route path="/login" element = {<Login />}/>
          <Route path="/home" element = {<Home />} />
          <Route path = "/post" element = {<Post />}/> 
          <Route path = "/bookmarks" element = {<Bookmarked/>}/>
          <Route path="/" element = {<Navigate replace to = "/home"/>}/>
        </Routes>
      </Layout> 
    </AuthProvider>  
  );
}

export default App;
