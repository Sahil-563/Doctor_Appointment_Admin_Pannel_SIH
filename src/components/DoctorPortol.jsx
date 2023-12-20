import React from 'react'
import { useState ,useEffect} from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

import heroimg from '../assets/hero_img.jpg'

function DoctorPortol() {
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://digitilize-pragun.onrender.com/get/status/doctor');
        
        // Assuming the data structure has a property like "user" containing user information
        console.log(res.data.data);
        setUserData(res.data.data);
        
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setError(error.message);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);
 
	const [showPassword, setShowPassword] = useState(false);
	const doctorData = userData
	
	// console.log(doctorData);
	const [auth, setIsauth] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		registrationID: '',
	});
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// setLoading(true);
		// console.log(formData.password);
		// console.log(doctor.name);
		if (formData.name === doctorData[0].name ||formData.name === doctorData[1].name ||formData.name === doctorData[2].name ||formData.name === doctorData[3].name  && formData.registrationID === doctor[0].registrationID||formData.registrationID === doctor[0].registrationID||formData.registrationID === doctor[1].registrationID||formData.registrationID === doctor[2].registrationID ||formData.registrationID === doctor[3].registrationID) {
			toast.success("Signed In");
			setIsauth(true);
		}
		else {
			setIsauth(false);
			toast.error("Invalid Credentials");
		}
	}
	if (auth) return <Navigate to={'/doctorWork'} />

	return (
		<>
		<div className='mask'>
            <img className='intro-img'src={heroimg} alt="" />
        </div>
			<div className="signup-container " >
				<form className="signup-form" onSubmit={handleSubmit}>
					<h2 style={{ color: 'white', textAlign:'center'}}>Log In</h2>
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
						<label1 htmlFor="password">Registration ID</label1>
						<div className='password_field'>
							<div className='passwrd_field'><input
							
								type={
									showPassword ? "text" : "password"
								}
								id="registrationID"
								name="registrationID"
								value={formData.registrationID}
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

export default DoctorPortol