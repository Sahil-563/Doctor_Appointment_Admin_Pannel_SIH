import React from 'react'
import './DoctorWorkStyles.css'
import { useState, useEffect } from 'react'
import axios from 'axios';

function DoctorWork() {
  const [data, setData] = useState();
  const [parchidata, setparchiData] = useState();

  const [Appointments, setAppointments] = useState();
  const [loading, setLoading] = useState(true);
  const getUserSlip=async ()=>{
    try {
      const res= await axios.get(`https://digitilize-pragun.onrender.com/get/previous/patient/7876205878`)
      setparchiData(res.data.data)
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    axios.get(`https://digitilize-pragun.onrender.com/get/status/doctor`, {
    
    }).then((res) => {
      // console.log(res.data);
      setData(res.data);
      // setRegisterID(res.data);

    }).catch((error) => {
      // console.log(error);
      toast.error("Internal Server Error");

    })
  }, [])


  const fetchData = async () => {
    try {
      const response = await axios.get('https://digitilize-pragun.onrender.com/server2/getdata');
      console.log(response.data);
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  //   console.log(Appointments.data);
  return (
    <>
      <div className='doctorStatus'>
        {/* <h2>Your Status :- <span style={{color:'red'}}>{data.data[0].status?'Available':'Not Available'}</span></h2> */}
        <h2 style={{color:'black'}}>Location :- Government Hospital, Mysuru</h2>
        <h2 style={{color:'black'}}>Department :- General </h2>
      </div>
      <div className='btn'>
        <button onClick={fetchData}>Your Appointments</button>
      </div>
      <div style={{ marginTop: '20px' }} className='table_container'>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Symptoms</th>
              <th>Timeslot</th>
            </tr>
          </thead>
          <tbody>

            {Appointments && Appointments.data && Appointments.data.length > 0 ? (
              Appointments.data.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.sex}</td>
                  <td>{item.symptoms}</td>
                  <td>{item.allocated_time}</td>
                  <td><button onClick={getUserSlip} style={{background:'red'}}>Past Record</button></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No appointments available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* <Slipdetails parchidata = {parchidata}/> */}
    </>
    
  )
  
}

export default DoctorWork