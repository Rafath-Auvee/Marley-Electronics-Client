import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ---------------Shared
import Navbar from "./components/shared/Navbar.js";
import Footer from "./components/shared/Footer.js"

// ---------------Pages
import Home from "./components/pages/Home.js";
import Blog from "./components/pages/Blog.js";
import Portfolio from "./components/pages/Portfolio.js"
import ResourceDetail from "./components/pages/Product/ResourceDetail.js"
// ---------------Auth
import Login from "./components/authentication/Login.js"
import SignUp from "./components/authentication/SignUp.js"
import Resources from "./components/pages/Resources.js"

// ---------------Require
import RequiredAuth from "./components/authentication/RequiredAuth.js"
import RequiredAdmin from "./components/authentication/RequiredAdmin.js"

function App() {
  return (
    <div className="max-w-full mx-auto ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="resources" element={<RequiredAuth><Resources /></RequiredAuth>} />
        <Route path="resources/:id" element={<RequiredAuth><ResourceDetail/></RequiredAuth>} />

        


      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
