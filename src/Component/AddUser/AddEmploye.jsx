import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MAIN_URL } from "../apiservices/url";

const AddEmploye = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    image:"",
    description:"", 
    image1:"",
    address: {
      city:"",
    },
    password:"",
  });
  const inputChange = (e) => {
    console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(MAIN_URL, data);
    navigate("/showuser", { replace: true });
  };
  const { name, username, email, address,password, image,image1,description } = data;
  return (
    <section className="mt-0 absolute h-[101vh] w-full z-[-1]">
      <div className="relative mt-[5rem] w-full ">
    <div className="w-full items-center flex justify-center ">
      <article className="w-[50%] text-center h-auto item-center font-bold shadow-2xl ">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="bg-transparent p-2">
            Name :{" "}
            <input
              onChange={(e) => inputChange(e)}
              type="text"
              name="name"
              required
              value={name}
              className="bg-transparent border font-bold ml-3"
            />
          </div>
          <div className="bg-transparent p-2">
            Username :{" "}
            <input
              onChange={(e) => inputChange(e)}
              type="text"
              value={username}
              name="username"
              className="bg-transparent  border font-bold ml-3"
            />
          </div>
          <div className="bg-transparent p-2">
            Email :{" "}
            <input
              onChange={(e) => inputChange(e)}
              type="email"
              
              value={email}
              name="email"
              className="bg-transparent  border font-bold ml-3"
            />
          </div>
          <div className="bg-transparent p-2">
            Password :{" "}
            <input
              onChange={(e) => inputChange(e)}
              type="password"
              
              value={password}
              name="password"
              className="bg-transparent  border font-bold ml-3"
            />
          </div>
          <div className="bg-transparent p-2">
            Image :{" "}
            <input
              onChange={(e) => inputChange(e)}
              type="text"
              value={image}
              name="image"
              className="bg-transparent  border font-bold ml-3"
            />
          </div>
          <div className="bg-transparent p-2">
            Image1 :{" "}
            <input
              onChange={(e) => inputChange(e)}
              type="file"
              value={image1}
              name="image1"
              className="bg-transparent  border font-bold ml-3"
            />
          </div>
          <div className="bg-transparent p-2">
            Description :
            <input
              onChange={(e) => inputChange(e)}
              type="text"
              value={description}
              name="description"
              className="bg-transparent  border font-bold ml-3"
            />
          </div>
          {/* <div className="bg-transparent p-2">
            ImageFromfile :{" "}
            <input
              onChange={(e) => inputChange(e)}
              type="file"
            
              value={image}
              name="image"
              className="bg-transparent  border font-bold ml-3"
            />
          </div> */}
          <div className="bg-transparent p-2">
            Address :{" "}
            <input
              onChange={(e) => inputChange(e)}
              type="text"
              name="address"
              value={address.city}
              className="bg-transparent  border font-bold ml-3"
            />
          </div>
          <div>
            {" "}
            <button className="bg-blue-400 p-2 mb-3 px-5 rounded-xl hover:bg-slate-900 hover:text-white">
              Add
            </button>
          </div>
        </form>
      </article>
    </div>
    </div>
    </section>
  );
};

export default AddEmploye;
