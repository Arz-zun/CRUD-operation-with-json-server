import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
    <section className="w-full absolute z-[-1]"> 
    <div className="relative w-full">
    <div className="w-full flex justify-center mt-[8%]">
        <div className="w-[50%] text-center align-middle shadow-xl">
          <div className="text-red-400 font-bold underline">Sign Up</div>
        <div className="m-2 font-bold">Email: <input className="rounded-xl pl-2 outline-red-600 "  placeholder="Enter Your User Name" name="username" type="email"  required/></div>
        <div className="m-2 font-bold">Password: <input className="rounded-xl pl-2 outline-red-600"  placeholder="Enter Your Password" name="password" type="password"  required /></div>
        <div className="flex gap-4 justify-center t">
        {/* <button className="bg-blue-400 rounded-2xl p-1 font-bold text-red-600">Sign Up </button> */}
        <button className="bg-blue-400 rounded-2xl p-1 font-bold text-red-600">Create</button>
        </div>
        </div>
      </div>
      </div>
      </section>
    </>
  );
};

export default SignUp;
