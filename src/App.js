import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ---------------Shared
import Navbar from "./components/shared/Navbar.js";
import Footer from "./components/shared/Footer.js"
import NotFound from "./components/shared/NotFound.js"
// ---------------Pages
import Home from "./components/pages/Home.js";
import Blog from "./components/pages/Blog.js";
import Portfolio from "./components/pages/Portfolio.js"
import ResourceDetail from "./components/pages/Product/ResourceDetail.js"
import Aboutus from "./components/pages/Aboutus.js"
// ---------------Auth
import Login from "./components/authentication/Login.js"
import SignUp from "./components/authentication/SignUp.js"
import Resource from "./components/pages/Resource.js"

// ---------------Require
import RequireAuth from "./components/authentication/RequireAuth.js"
import RequireAdmin from "./components/authentication/RequireAdmin.js"

//--------------------Dashboard---------------------------
import MyOrders from "./components/dashboard/MyOrders.js"
import Dashboard from "./components/dashboard/Dashboard.js"
import AddReview from "./components/dashboard/AddReview.js"
import MyProfile from "./components/dashboard/MyProfile.js"
import Payment from "./components/dashboard/Payment.js"
import Purchase from "./components/dashboard/Purchase.js"
//----------------Admin--------------------------------
import AddProduct from "./components/dashboard/admin/AddProduct.js"
import Users from "./components/dashboard/admin/Users.js"
import ManageOrders from "./components/dashboard/admin/ManageOrders.js"
import ManageProducts from "./components/dashboard/admin/ManageProducts.js"



function App() {
  return (
    <div className="max-w-full mx-auto ">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='about' element={<Aboutus></Aboutus>} />
        <Route path='blog' element={<Blog></Blog>} />
        <Route path='portfolio' element={<Portfolio></Portfolio>} />
        <Route path='login' element={<Login></Login>} />
        <Route path='signup' element={<SignUp></SignUp>} />
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageProduct' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path='manageOrder' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          </Route>
        <Route path='purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>} />
        <Route path='purchase' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>} />
        <Route path='resources' element={
          <RequireAuth>
            <Resource></Resource>
          </RequireAuth>} />
        <Route path='resources/:id' element={
          <RequireAuth>
            <ResourceDetail></ResourceDetail>
          </RequireAuth>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
