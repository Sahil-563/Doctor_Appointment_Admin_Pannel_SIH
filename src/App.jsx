import React, { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import Home from './components/home'
import SignIn from './components/Login';
import pageNotFound from './components/pageNotFound';
import toast from 'react-hot-toast';
import Register from './routes/register';
import{Toaster} from 'react-hot-toast';
import { useEffect,useContext } from 'react';
import {api,Context} from './main copy';
import axios from 'axios';
import GtDoctorsDetails from './components/GetDoctorsDetail'
import BookParchi from './components/BookParchi'


function App() {
  const {isAuthenticated,setisAuthenticated,loading,setLoading}=useContext(Context);
  const[Username,setUsername] = useState(null);
  const[password,setPassword]=useState(null);
  const[role,setRole]=useState(null);

  useEffect(() =>{
    axios.get(`${api}/getadmin`,{
      
    }).then((res)=>{
      // console.log(res.data.data[0]);
      setUsername(res.data.data[0].username);
      setPassword(res.data.data[0].password);
      setRole(res.data.data[0].role);
    }).catch((error)=>{
      // console.log(error);
      toast.error("Internal Server Error");
     
    })
  },[])
  const userDetails={username:Username, password:password,role:role}
  
    return (
      <>
        <Router>
          <Routes>
            
            <Route path="/" element={<SignIn userDetails={userDetails}/>}/>
            <Route path="/home" element={<Home userDetails={userDetails} />}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="getDoctorsDetails" element={<GtDoctorsDetails />}/>
            <Route path="bookparchi" element={<BookParchi />}/>
            <Route path='*' element={<pageNotFound/>}/>
          </Routes>
          <Toaster />
        </Router>
      </>
    )
  
  
}

export default App
