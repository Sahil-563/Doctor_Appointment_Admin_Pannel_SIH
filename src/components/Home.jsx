import React from 'react'
import './homePageStyles.css'
import { Link } from 'react-router-dom';

import DoctorsDetails from './DoctorsDetails';

function Home(props) {
  const user = props.userDetails;
  // const getDetails = async (e) => {
  //   axios.get("https://digitilize-pragun.onrender.com/get/status/doctor", {
  //   }).then((res) => {
  //     setData(res.data.data)
  //   }).catch((error) => {
  //     toast.error('Internal Server Error')

  //   })

  // }
  // console.log(data);


  return (
    <>
      <div className='navbar'>
        <h1>Welcome: {user.username} !</h1>
        <h1>Role:{user.role}</h1>
        <Link to="/">
          <button style={{ backgroundColor: 'red', cursor: 'pointer' }}><h1 style={{ color: 'black' }}>SignOut</h1></button>
        </Link>

      </div>
      <Link to="/getDoctorsDetails">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}><button style={{ backgroundColor: "green", cursor: 'pointer', marginTop: '40px' }}><h1 style={{ color: 'black' }}>Get Doctors Details</h1></button>
        </div>
      </Link>
      <Link to="/bookparchi">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}><button style={{ backgroundColor: "green", cursor: 'pointer', marginTop: '40px' }}><h1 style={{ color: 'black' }}>Book Parchi</h1></button>
        </div>
      </Link>





    </>

  )
}

export default Home