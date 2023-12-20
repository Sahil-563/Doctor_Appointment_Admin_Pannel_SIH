import React from 'react'
import logo1 from '../assets/logo4-removebg-preview (1).png'
import logo2 from '../assets/logo3-removebg-preview.png'
import logo3 from '../assets/logo2-removebg-preview.png'
import logo4 from '../assets/logo1-removebg-preview.png'
function banner() {
  return (
    <div style={{ width: '98%', height: '120px', backgroundColor: 'rgb(204, 204, 255)', margin: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
  <img src={logo3} alt="" style={{ height: '100%', maxWidth: '100%', objectFit: 'contain' }} />
  <img src={logo2} alt="" style={{ height: '100%', maxWidth: '100%', objectFit: 'contain' }} />
  <img src={logo1} alt="" style={{ height: '100%', maxWidth: '100%', objectFit: 'contain' }} />
  <img src={logo4} alt="" style={{ height: '100%', maxWidth: '100%', objectFit: 'contain' }} />
</div>
  )
}

export default banner