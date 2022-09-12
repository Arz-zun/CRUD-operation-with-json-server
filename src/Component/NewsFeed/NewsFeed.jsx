import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import CommentSection from '../../Component/NewsFeed/CommentSection/Comment'
const NewsFeed = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loaduser();
  }, []);
  const loaduser = async () => {
    const result = await axios.get("http://localhost:3001/users");
    console.log(result.data);
    setUser(result.data.reverse());
    //   console.log(result.data)
    setLoading(true);
  };

  return (
    <>
      {loading ? (
        <section className="w-full mt- align-middle flex justify-center">
          <article className="md:w-[40%] mt-10 h-auto text-white  ">
            {user.map((item) => {
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
<CommentSection/>
                     
                    </div>
                  </div>
                </>
              );
            })}
          </article>
        </section>
      ) : (
        <div className="w-full text-center top-[50%]">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default NewsFeed;
