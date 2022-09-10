import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate ,useParams} from "react-router-dom";

const ViewData = () => {
  const navigate = useNavigate();
const {id}=useParams();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
  });
  const inputChange = (e) => {
    console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.put(`http://localhost:3001/users/${id}`, data);
//     navigate("/showuser", { replace: true });
//   };

  const { name, username, email, address } = data;
  
  const loadUser= async()=>
  {
   const result=await axios.get(`http://localhost:3001/users/${id}` )
   setData(result.data)
  }
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <section className="w-full items-center flex justify-center  mt-[12rem]">
      <article className="w-[50%] text-center h-auto item-center font-bold shadow-2xl ">
        <form >
          <div className="bg-transparent p-2">
            Name :<span className="ml-2">{name}</span> 
            
          </div>
          <div className="bg-transparent p-2">
            username :<span className="ml-2">{username}</span> 
            
          </div>
          <div className="bg-transparent p-2">
            Email :<span className="ml-2">{email}</span> 
            
          </div>
          <div className="bg-transparent p-2">
            Address :<span className="ml-2">{address.city}</span> 
            
          </div>

          
        
          <div>
            {" "}
           
          </div>
        </form>
      </article>
    </section>
  );
};

export default ViewData;
