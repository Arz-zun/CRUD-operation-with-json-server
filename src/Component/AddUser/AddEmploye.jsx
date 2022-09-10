import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmploye = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      city:"",
    },
  });
  const inputChange = (e) => {
    console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", data);
    navigate("/showuser", { replace: true });
  };
  const { name, username, email, address, } = data;
  return (
    <section className="w-full items-center flex justify-center  mt-[12rem]">
      <article className="w-[50%] text-center h-auto item-center font-bold shadow-2xl ">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="bg-transparent p-2">
            Name :{" "}
            <input
              onChange={(e) => inputChange(e)}
              type="text"
              name="name"
              required
              value={data.name}
              className="bg-transparent border font-bold ml-3"
            />
          </div>
          <div className="bg-transparent p-2">
            Username :{" "}
            <input
              onChange={(e) => inputChange(e)}
              type="text"
              value={data.username}
              name="username"
              className="bg-transparent  border font-bold ml-3"
            />
          </div>
          <div className="bg-transparent p-2">
            Email :{" "}
            <input
              onChange={(e) => inputChange(e)}
              type="email"
              required
              value={data.email}
              name="email"
              className="bg-transparent  border font-bold ml-3"
            />
          </div>
          <div className="bg-transparent p-2">
            Address :{" "}
            <input
              onChange={(e) => inputChange(e)}
              type="text"
              name="address"
              required
              value={data.address.city}
              className="bg-transparent  border font-bold ml-3"
            />
          </div>
          <div>
            {" "}
            <button className="bg-blue-400 p-2 px-5 rounded-xl hover:bg-slate-900 hover:text-white">
              Add
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default AddEmploye;
