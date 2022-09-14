import React from "react";
import {NavLink, Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <section className="w-full fixed z-10 items-center  bg-slate-500">
        <nav className="flex bg-[#1c1e21] justify-around bg-transparent">
          <article className="p-4 hover:bg-black items-center text-white">
            <NavLink className="text-red-400" to="/newsfeed">
              <span>LOGO</span>
            </NavLink>
          </article>
          <article className="flex flex-wrap md:space-[4.5rem] items-center md:ml-[7rem]">
            <Link
              className="p-3 text-[2rem] hover:bg-black text-white"
              to="/newsfeed"
            >
              <AiOutlineHome />
            </Link>
            <Link
              className="p-3 text-[2rem] hover:bg-black text-white"
              to="/showuser"
            >
              <MdOndemandVideo />
            </Link>
            <NavLink className="p-3 hover:bg-black text-white" to="/showuser/add">
              Add User
            </NavLink>
            <NavLink className="p-3 bg-red-500 hover:bg-black text-white" to="/login">
              Login
            </NavLink>
          </article>
          <article className="flex items-center flex-wrap gap-3">
            <Link to="/test" className="p-3 hover:bg-black text-white">
              test
            </Link>
            <a href="" className="p-3 hover:bg-black text-white">
              test 2
            </a>
            <a href="" className="p-3 hover:bg-black text-white">
              home
            </a>
          </article>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
