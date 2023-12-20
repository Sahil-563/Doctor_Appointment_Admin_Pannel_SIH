import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import DoctorsDetails from '../components/DoctorsDetails'
import heroImg from '../assets/hero_img.jpg'
import './GetDoctorsDetailsStyles.css'
function GetDoctorsDetail() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(0);
  useEffect(() => {
    axios.get("https://digitilize-pragun.onrender.com/get/status/doctor").then((res) => {
      setData(res.data.data);
    })
      .catch((error) => {
        toast.error('Internal Server Error');
      });
  }, [])
  useEffect(() => {
    const fetchData = () => {
      axios.get("https://digitilize-pragun.onrender.com/get/status/doctor", {})
        .then((res) => {
          console.log(res.data.data);
          setData(res.data.data);
        })
        .catch((error) => {
          toast.error('Internal Server Error');
        });
    };

    const intervalId = setInterval(() => {
      setStatus((prevStatus) => prevStatus + 1);
      fetchData();
    }, 4000);


    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className='hero'>
        {/* <div className='mask'>
          <img className='intro-img' src={heroImg} alt="" />
        </div> */}

        <div className='DocterDetails'>
          {data.map((data, indx) => {
            return (
              <DoctorsDetails
                key={indx}
                name={data.name}
                status={data.status}
                registration_ID={data.registration_id}
                available={data.available_in}
                reason={data.reason}
                hospital={data.hospital}
              />
            )

          })}
        </div>
      </div>






    </>

  )

}

export default GetDoctorsDetail