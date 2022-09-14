import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { BsBookmarkFill } from "react-icons/bs";
import { AiFillFlag } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { SiShopify } from "react-icons/si";
import { MdOndemandVideo } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
const SideBar = () => {
  //   const [user, setUser] = useState([]);

  //   useEffect(() => {
  //     loaduser();
  //   }, []);
  //   const loaduser = async () => {
  //     const result = await axios.get("http://localhost:3001/users");
  //     console.log(result.data);
  //     setUser(result.data.reverse());
  //     //   console.log(result.data)
  //   };
  const [isActive, setIsActive] = useState(true);
  const handleActive = (index) => {
    setIsActive(index);
  };

  const sidemenu = [
    {
      ip1: "Arjun Chaudhary",
    },
    {
      ip1: "Friend",
      path: "/test/friend",
      component: <FaUserFriends />,
    },
    {
      ip1: "Saved",
      component: <BsBookmarkFill />,
    },
    {
      ip1: "Pages",
      component: <AiFillFlag />,
    },
    {
      ip1: "Group",
      component: <HiOutlineUserGroup />,
    },
    {
      ip1: "Market Place",
      component: <SiShopify />,
    },
    {
      ip1: "Watch",
      component: <MdOndemandVideo />,
    },
    {
      ip1: "Add Center",
    },
    {
      ip1: "Add Manager",
    },
    {
      ip1: "Messenger",
    },
    {
      ip1: "Gaming Video",
    },
    {
      ip1: "Watch",
    },
  ];
  return (
    <div className="fixed h-[95vh] w-[25%] bg-blue">
      <div className=" relative overflow-scroll">
        {sidemenu.map((item, i) => {
          return (
            <>
            <div className="">
              <div className="flex gap-2 items-center pl-7    text-white hover:bg-black">
                <div className="text-white">{item.component}</div>
                <div className="py-6 w-full relative "> {item.ip1}</div>
              </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
