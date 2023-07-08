import React from 'react'
import avatar from "../images/icons8-kyle-broflovski-48.png"
import "./profileHeader.css"
import edit from "../images/icons8-edit-64.png"

function ProfileHeader() {
  return (
    <div className='profile_header' >
        <img src={avatar} />
         <h2>Hi ' Shantanu</h2>
         <img src={edit} />
    </div>
  )
}

export default ProfileHeader