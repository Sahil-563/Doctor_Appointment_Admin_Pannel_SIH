import React from 'react'
import './homePageStyles.css'
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero_img.jpg'

function Home(props) {
  const user = props.userDetails;

  return (
    <>
    <div className='navbar'>
            <h1>Welcome: {user.username} !</h1>
            <h1>Role:{user.role}</h1>
            <Link to="/">
              <button style={{ backgroundColor: 'red', cursor: 'pointer' }}><h1 style={{ color: 'black' }}>SignOut</h1></button>
            </Link>

          </div>
    
      <div className='hero'>
      
        <div className='maskk'>
          <img className='intro-img' src={heroImg} alt="" />
        </div>
        
        <div className='content'>
        <Link to="/getDoctorsDetails">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}><button style={{ backgroundColor: "green", cursor: 'pointer', marginTop: '40px' }}><h1 style={{ color: 'black' }}>Get Doctors Details</h1></button>
            </div>
          </Link>
          <Link to="/bookparchi">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}><button style={{ backgroundColor: "green", cursor: 'pointer', marginTop: '40px' }}><h1 style={{ color: 'black' }}>Book Appointment</h1></button>
            </div>
          </Link>
          <Link to="/adminDoctor">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}><button style={{ backgroundColor: "green", cursor: 'pointer', marginTop: '40px' }}><h1 style={{ color: 'black' }}>Doctor Portal</h1></button>
            </div>
          </Link>
        </div>



      </div>




    </>

  )
}

export default Home