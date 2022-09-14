import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NewsFeed from "../NewsFeed/NewsFeed";
import SideNavbar from "../Sidebar/Sidebar";
const Test = () => {
  const [show, setShow] = useState(0);
  const change = (index) => {
    console.log(index);
    setShow(index);
  };

  return (
    <>
      <section className="absolute w-full">
        <div className="mt-[3.5rem]">
          <SideNavbar />
          <NewsFeed />
        </div>
      </section>
    </>
  );
};

export default Test;
