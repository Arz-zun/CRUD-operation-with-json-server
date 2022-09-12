import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        address: {
          city:"",
        },
        password:"",
      });

      const navigate = useNavigate();

      const inputChange = (e) => {
        console.log(e.target.value);
        setData({ ...data, [e.target.name]: e.target.value });
      };
      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users", data);
        navigate("/showuser", { replace: true });
        console.log(onSubmit)
      };

  return (
    <>
      <section className="w-full flex justify-center mt-[8%]">
        <form className="w-[50%] text-center align-middle shadow-xl">
          <div className="text-red-400 font-bold underline">Login Page</div>
        <div className="m-2 font-bold">Email: <input onChange={(e) => inputChange(e)}  className="rounded-xl pl-2 outline-red-600 "  placeholder="Enter Your User Name" name="username" type="email"  required/></div>
        <div className="m-2 font-bold">Password: <input  onChange={(e) => inputChange(e)} className="rounded-xl pl-2 outline-red-600"  placeholder="Enter Your Password" name="password" type="password"  required /></div>
        <div className="flex gap-4 justify-center t">
      <Link to="/login/signup">  <button className="bg-blue-400 rounded-2xl p-1 font-bold text-red-600">Sign Up </button> </Link>
        <button className="bg-blue-400 rounded-2xl p-1 font-bold text-red-600">Login</button>
        </div>
        </form>
      </section>
    </>
  );
};

export default LoginPage;
