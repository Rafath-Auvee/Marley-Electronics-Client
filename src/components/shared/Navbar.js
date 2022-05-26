import React from "react";
import { Link, Outlet } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init.js";
import useAdmin from "../hooks/useAdmin";
const Navbar = () => {
  const [user] = useAuthState(auth)
  const [isAdmin] = useAdmin(user);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const userMenu = (
    <>
      <li>
        <Link to="/dashboard">My Appointments</Link>
      </li>
      <li>
        <Link to="/dashboard/review">My Reviews</Link>
      </li>
      <li>
        <Link to="/dashboard/history">My History</Link>
      </li>

      <li>
        <Link to="/dashboard/users">All Users</Link>
      </li>
      <li>
        <Link to="/dashboard/addDoctor">Add a Doctor</Link>
      </li>
      <li>
        <Link to="/dashboard/manageDoctor">Manage Doctors</Link>
      </li>
    </>
  );
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/resources">Resources</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        {user ? (
          <button className="btn btn-ghost" onClick={logout}>
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
          // <Link to="/signup">Sign Up</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-content text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown">
          
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact text-base-content dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Marley Electronics</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {/* <label
          tabIndex="1"
          htmlFor="dashboard-sidebar"
          className="btn btn-ghost lg:hidden"
          // className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
         */}
        {user && (
          <div>
            <Outlet></Outlet>
            <div className="flex-none gap-2">
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-base-content"
                >
                  {userMenu}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
