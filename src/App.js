import './App.css';
import Body from './Component/Body/Body';
import Navbar from './Component/Navbar/Navbar';
import { Routes, Route,  BrowserRouter } from "react-router-dom";
import AddEmploye from './Component/AddUser/AddEmploye';
import EditUser from './Component/EditUser/EditUser';
import ViewData from './Component/ViewData/ViewData';
import LoginPage from './Component/Login/LoginPage/LoginPage';
import SignUp from './Component/Login/SignUp/SignUp';
import NewsFeed from './Component/NewsFeed/NewsFeed';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    
    <Route path="/showuser" element={<Body/>} />
    <Route path="/showuser/add" element={<AddEmploye />} />
    <Route path='/showuser/edit/:id' element={<EditUser/>}/>
    <Route path='/showuser/view/:id' element={<ViewData/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/login/signup' element={<SignUp/>}/>
    <Route path='/newsfeed' element={<NewsFeed/>}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
