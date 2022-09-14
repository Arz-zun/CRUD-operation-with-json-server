import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import CommentSection from "../../Component/NewsFeed/CommentSection/Comment";
import SideBar from "../Sidebar/Sidebar";
import { MAIN_URL, NEW_FEEDS } from "../../Component/apiservices/url";
const NewsFeed = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const loaduser = async () => {
    const result = await axios.get("http://localhost:3001/users");
    console.log(result.data);
    setUser(result.data.reverse());
    setLoading(true);
  };

  useEffect(() => {
    loaduser();
  }, []);

  return (
    <>
      <div className="w-full mt- align-middle flex bg-[#0a0c0f] justify-between">
        <div className="w-full ">
          <div className="mt-[3.5rem]  text-white">{/* <SideBar/> */}</div>
        </div>
        <div className="w-full align-middle">
          {loading ? (
            <section className="w-full  align-middle  bg-[#0a0c0f] ">
              <article className="md:w-full mt-[5rem] h-auto text-white  ">
                {user?.map((item) => {
                  return (
                    <>
                      <div className="">
                        <div className="py-1 mt-3 rounded-xl shadow-2xl bg-[#1c1e21]">
                          <div className="flex align-middle my-5  gap-2">
                            <img
                              className="w-9 ml-1  rounded-full"
                              src={item.image}
                              alt=""
                            />
                            <div>{item.name}</div>
                          </div>
                          <div className=" mb-2">{item.description}</div>
                          <div className="flex w-full justify-center">
                            <img className="w-full" src={item.image} alt="" />
                          </div>
                          <CommentSection />
                        </div>
                      </div>
                    </>
                  );
                })}
              </article>
            </section>
          ) : (
            <div className="w-full h-[101vh] text-center top-[50%]">
              <Spinner />
            </div>
          )}
        </div>
        <div className="w-full  align-middle "></div>
      </div>
    </>
  );
};

export default NewsFeed;
