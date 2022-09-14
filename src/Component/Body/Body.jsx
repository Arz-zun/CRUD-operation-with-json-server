import React from "react";
// import Employe from "../AddUser/Employe";
import axios from "axios";
import { Link } from "react-router-dom";
// import users from '../../../db.json'
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import Test from "../Test/Test";
// import SideBar from "../SideBar/SideBar";

const Body = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const loaduser = async () => {
    const result = await axios.get("http://localhost:3001/users");
    console.log(result.data);
    setUser(result.data);
    // setUser(result.data.reverse());
    console.log(result.data);
    setLoading(true);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loaduser();
  };

  useEffect(() => {
    loaduser();
  }, []);

  return (
    <>
      <div className="m-0  w-full scroll- h-auto absolute z-[-1]">
        <div className="mt-[4rem] relative">
          <div className="top">
            <section className="w-full h-[100vh] align-middle text-center">
              <table className="text-center w-full border-2 table-auto ">
                <thead className="">
                  <th className="border ">Name</th>
                  <th className="border ">User Name</th>

                  <th className="border">Image From Url</th>
                  <th className="border">Description</th>
                  <th className="border">Image From input</th>
                  <th className="border">email</th>
                  <th className="border">Password</th>
                  <th className="border">Address</th>

                  <th>Action</th>
                </thead>
                {loading ? (
                <tbody>
                    {user?.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td className="border">{item.name}</td>
                          <td className="border">{item.username}</td>

                          <td className="border">
                            <img src={item.image} alt="" />
                          </td>
                          <td className="border">{item.description}</td>

                          <td className="border">{item.image1}</td>
                          <td className="border">{item.email}</td>
                          <td className="border">{item.password}</td>
                          <td className="border">{item.address.city}</td>
                          <td className="border">
                            <Link to={`/showuser/view/${item.id}`}>
                              {" "}
                              <button className="bg-yellow-400 hover:bg-red-500 px-5 rounded-xl font-bold text-blue-800 ">
                                View
                              </button>
                            </Link>
                          </td>
                          <td className="border">
                            <Link to={`/showuser/edit/${item.id}`}>
                              {" "}
                              <button className="bg-yellow-400 hover:bg-red-500 px-5 rounded-xl font-bold text-blue-800 ">
                                Edit
                              </button>
                            </Link>
                          </td>
                          <td className="border">
                            <button
                              className="bg-yellow-400 px-5 rounded-xl hover:bg-red-500 font-bold text-blue-800"
                              onClick={() => deleteUser(item.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                ) : (
                  <div className="w-full scroll-m-1 text-center mt-4">
                    <Spinner />
                  </div>
                )}
              </table>
            </section>
          </div>
          <div className="w-full text-center">
            <Link to="add">
              <button className="bg-red-400 p-2 rounded-2xl text-white font-bold border-2 border-black">
                {" "}
                Add Users
              </button>
            </Link>
          </div>

          {/* <div className="w-full text-center mt-4">
      <Spinner />
      </div> */}
          <Test />
        </div>
      </div>
    </>
  );
};

export default Body;
