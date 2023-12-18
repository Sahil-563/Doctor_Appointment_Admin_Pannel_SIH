import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import './signInUpStyles.css';
import { useContext } from 'react';
import { Context } from '../main copy';
function Login(props) {
	const user=props.userDetails;
	// const {isAuthenticated,setisAuthenticated,loading,setLoading}=useContext(Context);
	// console.log(user);
	const[auth,setIsauth] =useState(false);
	const [formData, setFormData] = useState({
		name: '',
		password: '',
	  });
	  const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	  };
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		// setLoading(true);
		// console.log(formData.password);
		console.log(user.name);
		if(formData.name === user.username && formData.password === user.password) {
			toast.success("Signed In");
			setIsauth(true);
		}
		else{
			setIsauth(false);
			toast.error("Invalid Credentials");
		}
	}
	if(auth) return <Navigate to={'/home'}/>
	
	return (
		<>
		<div className="signup-container " >
          <form className="signup-form" onSubmit={handleSubmit}>
            <h2 >Sign In</h2>
            <div className="form-group">
              <label  htmlFor="email">Username</label>
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
              <label   htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button  className='submit ' type="submit">Sign In</button>
			{/* <p style={{marginTop:'12px',textAlign:'center'}}>Donot have an account? <span><Link to='/register'>SignUp first!</Link></span></p> */}
          </form>
        </div>
		</>
	)
}

export default Login