import {Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";
import Home from "./pages/Home/home";
import Signup from "./pages/Signup/signup";
import Post from "./pages/Post/post";
import Layout from "./modules/Layout";
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
        </Routes>
      </Layout> 
    </AuthProvider>  
  );
}

export default App;
