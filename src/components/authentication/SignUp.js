import React from 'react';
import Jump from "react-reveal/Jump";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <Jump>
      <div className="bg-no-repeat bg-cover bg-center relative">
        <div className="absolute  opacity-75 inset-0 z-0"></div>
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
            <div className="self-start hidden lg:flex flex-col  text-base-content">
              <img src="" className="mb-3" />
              <h1 className="mb-3 font-bold text-5xl text-base-content">
                New to Marley Electronics ? {" "}
              </h1>
              <p className="pr-3 text-base-content">Please create your account. 🎉</p>
            </div>
          </div>
          <div className="flex justify-center self-center  z-10">
            <div className="p-12 bg-transparnet mx-auto rounded-2xl w-100 ">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-base-content">
                  Sign Up{" "}
                </h3>
                <p className="text-base-content"></p>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Name
                  </label>
                  <input
                    className=" w-full text-base px-4 py-2 border  border-base-content rounded-lg focus:outline-none focus:border-green-400"
                    type="text"
                    placeholder="Rafath Auvee"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Email
                  </label>
                  <input
                    className=" w-full text-base px-4 py-2 border  border-base-content rounded-lg focus:outline-none focus:border-green-400"
                    type="email"
                    placeholder="mail@gmail.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border  border-base-content rounded-lg focus:outline-none focus:border-green-400"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  {/* <div className="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-base-content rounded"
                    />
                    <label
                      htmlFor="remember_me"
                      className="ml-2 block text-sm text-gray-800"
                    >
                      Remember me
                    </label>
                  </div> */}
                  <div className="text-sm">
                    <Link to="/" className="text-grey-400 hover:text-grey-500">
                      Forgot your password?
                    </Link>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-neutral text-neutral-content  p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
              <div className="pt-5 text-center text-base-content text-sm">
              <span>
                  Create New Account? 
                  <Link
                    to="/login"
                    className="ml-2 text-green text-base-content "
                  >
                     Sign In
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Jump>
  );
};

export default SignUp;