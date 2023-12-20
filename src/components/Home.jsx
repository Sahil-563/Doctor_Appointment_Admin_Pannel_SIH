import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero_img.jpg';
import './homePageStyles.css';

function Home(props) {
  const user = props.userDetails;

  return (
    <div className='home-container'>
      
      
      
      <div className='hro'>
        <div className='maskk'>
          <img className='intro-img' src={heroImg} alt="" />
        </div>

        <div className='content'>
          <Link to="/getDoctorsDetails">
            <div className='card'>
              <button className='cta-btn'><b>Get Doctors Details</b></button>
            </div>
          </Link>

          <Link to="/bookparchi">
            <div className='card'>
              <button className='cta-btn'><b>Book Appointment</b></button>
            </div>
          </Link>

          <Link to="/adminDoctor">
            <div className='card'>
              <button className='cta-btn'><b>Doctor Portal</b></button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
