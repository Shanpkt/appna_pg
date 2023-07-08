


import React from 'react'
import "./profile.css"
import back from "../images/back.png"
import ProfileHeader from '../components/profileHeader'

function Profile() {
  return (
    <div className='profile_page' >

     <div className='profile_header' >

        <img src={back}/>
        <h3>My Profile</h3>
        
        </div>  
        <ProfileHeader/> 
        
    </div>
  )
}

export default Profile