import React from 'react'
import { useState } from 'react'
import './DoctorsDetailsStyles.css'
function DoctorsDetails(props) {
    // const [status,setStatus]=useState(null)
    // if(props.status==0){
    //     setStatus('Not Available')
    // }
    // else{
    //     setStatus('Available')
    // }
    const h1Color = props.status ? 'green' : 'red'
    const isAvailable = props.status ? 'Available' : 'Not Available'
    const status = props.status
    // console.log(h1Color);
    return (


        <div className='cardContainer'>
            <div className="card">
                <div style={{ backgroundColor: h1Color }} className="card-header">
                    Doctor Details
                </div>
                <div className="card-body">
                    <div className="row">
                        <h3>Doctor's Name:-{props.name}</h3>
                    </div>
                    <div className="row">

                        <h3 style={{ color: h1Color }}>Current Status:-{isAvailable}</h3>
                    </div>
                    <div className="row">
                        <h3>Registration ID:-{props.registration_ID}</h3>
                    </div>
                {status?"":<div className="row">
                        <h3>Availbale in:-{props.available} minutes</h3>
                    </div>}
                    

                    <div className="row">
                        <h3>{props.hospital}</h3>
                    </div>
                    {status?'':<div style={{ backgroundColor: '#ADD8E6' }} className="row">
                        <h3>Reason for Unavailability:-{props.reason}</h3>
                    </div>}
                    
                </div>
            </div>
        </div>
    )
}

export default DoctorsDetails