import './App.css';
import Body from './Component/Body/Body';
import Navbar from './Component/Navbar/Navbar';
import { Routes, Route,  BrowserRouter, Outlet } from "react-router-dom";
import AddEmploye from './Component/AddUser/AddEmploye';
import EditUser from './Component/EditUser/EditUser';
import ViewData from './Component/ViewData/ViewData';
import LoginPage from './Component/Login/LoginPage/LoginPage';
import SignUp from './Component/Login/SignUp/SignUp';
import NewsFeed from './Component/NewsFeed/NewsFeed';
import SideBar from './Component/Sidebar/Sidebar';
import { Component } from 'react';
import Friend from './Component/SideComponent/Friend';
import Test from './Component/Test/Test';
import Test2 from './Component/Test2/Test2';

// const TestLayout = () => {
//   return (
//     <>
//       <SideBar />
//       <Outlet />
//     </>
//   );
// };

function App() {
  const routing=[
    {
      path:"/friend",
      component:"<Friend/>"
    },
    {
      path:"",
      component:""
    },
  ]
  return (
    <>
    <BrowserRouter>
    <Navbar/>
   
    <Routes>
    
    <Route path="/showuser" element={<Body/>} />
    {/* <Route path="/test" element={<TestLayout/>} > */}
      <Route index element={<NewsFeed/>}/>
      <Route path='friend' element={<Friend/>}/>
      {/* <Route path='doxt' element={<Doxt/>}/> */}
    
    <Route path="/test2" element={<Test2 />} />
    <Route path="/test" element={<Test />} />

    <Route path="/showuser/add" element={<AddEmploye />} />
    <Route path="/showuser/add" element={<AddEmploye />} />
    <Route path='/showuser/edit/:id' element={<EditUser/>}/>
    <Route path='/showuser/view/:id' element={<ViewData/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/login/signup' element={<SignUp/>}/>
    <Route path='/newsfeed' element={<NewsFeed/>}/>
    {/* <Route path="/friend" element={<Friend/>}/> */}
{
  routing.map((item,i)=>{
    return(
      <>
      <Route path={item.path} element={item.component}/>
      </>
    )
  })
}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
