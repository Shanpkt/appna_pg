


import React, { useState,useEffect } from 'react'
import "./profile.css"
import back from "../images/back.png"
import ProfileHeader from '../components/profileHeader'
import OptionPlaner from '../components/optionPlaner'
import PersonalOption from './personalOption'
import Footerprofile from '../components/footerprofile'
import Profiletop from '../components/profiletop'
import Profilebottom from '../components/profilebottom'

function Profile() {
const [data,setdata]=useState()

useEffect(() => {
  
  const a=window.innerHeight
 setdata(a)
}, [])

  return (
    <div className='profile_page' >

     {/* <div className='profile_header' >

        <img src={back}/>
        <h3>My Profile</h3>
        
        </div>   */}
        {/* <ProfileHeader/> 
        <OptionPlaner/>
        <PersonalOption/>
        <Footerprofile/> */}
         <Profiletop/>
         <Profilebottom/>
        
    </div>
  )
}

export default Profile