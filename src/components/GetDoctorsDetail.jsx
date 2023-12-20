import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import DoctorsDetails from '../components/DoctorsDetails';
import heroImg from '../assets/hero_img.jpg';
import './GetDoctorsDetailsStyles.css';

function GetDoctorsDetail() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      axios.get("https://digitilize-pragun.onrender.com/get/status/doctor")
        .then((res) => {
          setData(res.data.data);
        })
        .catch((error) => {
          toast.error('Internal Server Error');
        });
    };

    const intervalId = setInterval(() => {
      setStatus((prevStatus) => prevStatus + 1);
      fetchData();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <h1 style={{color:'black',textAlign:'center'}}>Doctor Details</h1>
    <div className='hero'>
      <div className='DocterDetails'>
        {data.map((doctor, indx) => (
          <div key={indx} className='doctor-card'>
            <img className='doctor-img' src={heroImg} alt={`Doctor ${indx + 1}`} />
            <div className='doctor-info'>
              <h2>{doctor.name}</h2>
              <p>Status: {doctor.status}</p>
              <p>Registration ID: {doctor.registration_id}</p>
              <p>Available In: {doctor.available_in}</p>
              <p>Reason: {doctor.reason}</p>
              <p>Hospital: {doctor.hospital}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
}

export default GetDoctorsDetail;
