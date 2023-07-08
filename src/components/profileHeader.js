import React from 'react'
import avatar from "../images/icons8-kyle-broflovski-48.png"
import "./profileHeader.css"

function ProfileHeader() {
  return (
    <div className='profile_header' >
        <img src={avatar} />
         <h2>Hi ' Shantanu</h2>
    </div>
  )
}

export default ProfileHeader