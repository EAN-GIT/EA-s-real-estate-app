import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1
            className="font-bold text-sm sm:text-xl flex flex-wrap
       "
          >
            <span className="text-slate-500">EA</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="flex items-center rounded-lg p-3 bg-slate-100 ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4 justify-between items-center">
          <Link to="/">
            <li
              className="hidden sm:inline hover:underlinetext-slate-700
         "
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              className="hidden sm:inline hover:underlinetext-slate-700
         "
            >
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className=" hover:underlinetext-slate-700">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
