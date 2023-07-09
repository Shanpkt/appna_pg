import React from 'react'
import avatar from "../images/icons8-kyle-broflovski-48.png"
import "./profileHeader.css"
import edit from "../images/icons8-edit-64.png"

function ProfileHeader() {
  return (
    <div className='profile_header' >
        <img src={avatar} />
        <div className='side_box'>
         <h2>Hi ' Shantanu</h2>
        <button>Edit profile</button>
         </div>
    </div>
  )
}

export default ProfileHeader