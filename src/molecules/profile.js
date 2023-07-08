


import React, { useState,useEffect } from 'react'
import "./profile.css"
import back from "../images/back.png"
import ProfileHeader from '../components/profileHeader'

function Profile() {
const [data,setdata]=useState()

useEffect(() => {
  
  const a=window.innerWidth
 setdata(a)
}, [])

  return (
    <div className='profile_page' >

     {/* <div className='profile_header' >

        <img src={back}/>
        <h3>My Profile</h3>
        
        </div>   */}
        {/* <ProfileHeader/>  */}
        <h1>{data}</h1>
        
    </div>
  )
}

export default Profile