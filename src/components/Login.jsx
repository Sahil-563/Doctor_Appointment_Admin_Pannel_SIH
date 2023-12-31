import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import './signInUpStyles.css';
import heroimg from '../assets/hero_img.jpg'

function Login(props) {
	const [showPassword, setShowPassword] = useState(false);
	const user = props.userDetails;
	// const {isAuthenticated,setisAuthenticated,loading,setLoading}=useContext(Context);
	// console.log(user);
	const [auth, setIsauth] = useState(false);
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
		if (formData.name === user.username && formData.password === user.password) {
			toast.success("Signed In");
			setIsauth(true);
		}
		else {
			setIsauth(false);
			toast.error("Invalid Credentials");
		}
	}
	if (auth) return <Navigate to={'/home'} />

	return (
		<>
		<div className='mask'>
                    <img className='intro-img'src={heroimg} alt="" />
        </div>
			<div className="signup-container " >
				<form className="signup-form" onSubmit={handleSubmit}>
					<h2 style={{ color: 'white', textAlign:'center'}}>Sign In</h2>
					<div className="form-group">
						<div className='paswrd_field'>
						<label1 htmlFor="Username">Username</label1>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
						/>
						</div>
						
					</div>
					<div className="form-group ">
						<label1 htmlFor="password">Password</label1>
						<div className='password_field'>
							<div className='passwrd_field'><input
							
								type={
									showPassword ? "text" : "password"
								}
								id="password"
								name="password"
								value={formData.password}
								onChange={handleChange}
								required
							/></div>
							
							<input
								id="showPasswordCheckbox"
								type="checkbox"
								checked={showPassword}
								onChange={() => setShowPassword((prev) => !prev)}
							/>
						</div>

					</div>
					<button className='submit ' type="submit">Sign In</button>
					{/* <p style={{marginTop:'12px',textAlign:'center'}}>Donot have an account? <span><Link to='/register'>SignUp first!</Link></span></p> */}
				</form>
			</div>
		</>
	)
}

export default Login