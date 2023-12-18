import React from 'react'
import './BookParchiStyles.css'
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
function BookParchi() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        sex: '',
        location: '',
        department: '',
        date: '',
        time: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'date' && value) {
            const formattedDate = new Date(value).toISOString().split('T')[0];
            console.log(formattedDate);
            setFormData((prevData) => ({
              ...prevData,
              [name]: formattedDate,
            }));
          } else {
            setFormData((prevData) => ({
              ...prevData,
              [name]: value,
            }));
          }
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        
        // console.log(formData);
        try{
			const {data}=await axios.post(`https://digitilize-pragun.onrender.com/server2/postdata`,formData,{
				
			})
			toast.success('Parchi Genrated Succefully');
			
		}
		
		catch(error){
			toast.error("Cannot generate a parchi");
			
			
		}
      };
    
      return (
        <>
        <h1 style={{textAlign:'center'}}>Book A Parchi</h1>
        <div className="beautiful-form-container">
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
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
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="sex">Sex:</label>
              <select
                id="sex"
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
    
            <div className="form-group">
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="department">Department:</label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="time">Time:</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="morning">Morning</option>
                <option value="evening">Evening</option>
              </select>
            </div>
    
            <button type="submit">Submit</button>
          </form>
        </div>
        </>
      )
}

export default BookParchi