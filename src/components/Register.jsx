import React from 'react'

import { useState } from 'react'
import {api} from '../main copy'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { Context } from '../main copy';
import{Navigate} from 'react-router-dom'
import './signInUpStyles.css';
function Register() {
	const {isAuthenticated,setisAuthenticated}=useContext(Context);
	const [formData, setFormData] = useState({
		name:'',
		email: '',
		password: '',
	  });
	  const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	  };
	
	const handleSubmit = async (e) => {
		e.preventDefault();

		try{
			const {data}=await axios.post(`${api}/getadmin`,formData,{
				header:{
					"Content-Type": "application/json",
				},
				withCredentials: true
			})
			toast.success(data.message);
			setisAuthenticated(true);
			
		}
		
		catch(error){
			toast.error(error.response.data.message);
			setisAuthenticated(true);
			
		}
		
	}
	if(isAuthenticated) return <Navigate to={'/'}/>
	
	
	return (
		<>
			<div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label  htmlFor="Name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className='submit' type="submit">Sign Up</button>
      </form>
    </div>
		</>
	)
}

export default Register