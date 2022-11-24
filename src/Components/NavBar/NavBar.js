import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../Assets/favicon.svg";
const NavBar = () => {
  const menuList = (
    <>
      <li className="mr-5 font-bold text-green-700">
        <Link to="/">Home</Link>
      </li>
      <li className="mr-5 font-bold text-green-700">
        {" "}
        <Link to="/">Home</Link>
      </li>
      <li className="mr-5 font-bold text-green-700">
        {" "}
        <Link to="/">Home</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-blue-400 ">
        <div className="navbar-start container mx-auto">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuList}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-2xl">
            <img src={logoImg} alt="" className="h-14" />
            Gadget-Bazar
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuList}</ul>
        </div>
        <div className="navbar-end">
          <a href="/" className="btn">
            Get started
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
