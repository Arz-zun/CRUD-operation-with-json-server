import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiMessageAltDetail } from "react-icons/bi";
import { BiShare } from "react-icons/bi";
import { useState } from "react";

const Comment = () => {
  const [like, setLike] = useState(0);
  const [comment, setComment] = useState(0);
  const [share, setShare] = useState(0);
  const handleClick = () => {
    let res = like + 1;
    console.log(res);
    setLike(res);
  };
  const handleClick1 = () => {
    let res = comment + 1;
    console.log(res);
    setComment(res);
  };
  const handleClick2 = () => {
    let res = share + 1;
    console.log(res);
    setShare(res);
  };
  return (
    <>
      <div className="w-full flex justify-center my-2">
        <div className="flex justify-between md:w-[50%]  align-middle">
          <div className="flex item-center ">
            <span>{like}</span>
          </div>
          <div className="flex items-center">
            <span>{comment}</span>
          </div>
          <div className="flex items-center">
            <span>{share}</span>
          </div>
        </div>
      </div>
      <hr className="md:w-[80%] md:ml-11 " />
      <div className="w-full flex justify-center my-2">
        <div className="flex justify-between md:w-[50%] sm:gap-1 align-middle">
          <div
            className="flex item-center gap-1  cursor-pointer "
            onClick={handleClick}
          >
            <AiOutlineLike className="mt-1" />
            <span>Like</span>
          </div>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={handleClick1}
          >
            <BiMessageAltDetail />
            <span>Comment</span>
          </div>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={handleClick2}
          >
            <BiShare />
            <span>Share</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
