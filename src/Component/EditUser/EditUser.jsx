import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {MAIN_URL} from "../../Component/apiservices/url"

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    image: "",
    address: "",
  });
  const inputChange = (e) => {
    console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(MAIN_URL+id, data);
    navigate("/showuser", { replace: true });
  };

  const { name, username, email, address,image } = data;

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setData(result.data);
  };
  useEffect(() => {
    loadUser();
  }, []);
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
            Image :{" "}
            <input
              onChange={(e) => inputChange(e)}
              type="text"
              value={image}
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
            Address :{" "}
            <input
              onChange={(e) => inputChange(e)}
              type="text"
              name="address"
              value={address}
              className="bg-transparent  border font-bold ml-3"
            />
          </div>
          <div>
            {" "}
            <button className="bg-blue-400 p-2 px-5 rounded-xl hover:bg-slate-900 hover:text-white">
              update
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default EditUser;
