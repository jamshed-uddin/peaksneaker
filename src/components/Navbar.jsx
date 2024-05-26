import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-white"
          >
            <li>
              <Link to={"/men"}>Men</Link>
            </li>
            <li>
              <Link to={"/women"}>Women</Link>
            </li>
            <li>
              <Link to={"/discover"}>Discover</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          <h1 className="text-lg lg:text-2xl font-medium">Peak Sneakers</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <Link to={"/men"}>Men</Link>
          </li>
          <li>
            <Link to={"/women"}>Women</Link>
          </li>
          <li>
            <Link to={"/discover"}>Discover</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          {user ? (
            <Link to={"/dashboard/profile"}>
              <div className="btn btn-sm">
                <div>Dashboard</div>
                <div className="avatar">
                  <div className="w-6 rounded-full ">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <div className="btn btn-sm">
              <Link to={"/login"}>Login</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
