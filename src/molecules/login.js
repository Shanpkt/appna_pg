import React, { useState } from 'react'
import "./login.css"
import loginWomen from "../images/loginWomen.png"
import google from "../images/icons8-google-100.png"
import { json, useNavigate } from 'react-router-dom'
import {signInWithPopup} from "firebase/auth"
import { auth,provider } from '../config';
import axios from 'axios'
function Login() {
const [infodata,setinfodata]=useState()
const [data,setdata]=useState(0)
const [waring,setwarning]=useState(true)
function login(e){
const {name,value}=e.target
  
  setinfodata({
    ...infodata,
    [name]:value
  })
}
  
const navigate=useNavigate()

function handel(){
    axios.get(`https://appnapg.onrender.com/userdata/${infodata.Email}`).then((e)=>{
      if(e.data.status==400){
        setwarning(true)
        localStorage.setItem("logindetails",JSON.stringify(e.data.data))
        console.log(e.data)
        navigate("/PGselect")
      }else{
        setwarning(false)
      }
    })
}

function signupredirect(){
  navigate("/login/signup")
}

  function handelclick(){
  signInWithPopup(auth,provider).then((e)=>{
 
  //  setdata(e.user.email)
  axios.get(`https://appnapg.onrender.com/userdata/${e.user.email}`).then((e)=>{
    if(e.data.status){
      localStorage.setItem("logindetails",JSON.stringify(e.data.data))
      navigate("/PGselect")
    }
  })

  })
  

}

console.log(infodata)

  return (
   
    <div className='login_main'>
     
        <div className='white_curtain'>
        <div className='login_box' >
            <img src={loginWomen} />
            <div className='login_details_input'>
            <h5 className={`pass_warning ${waring?"password_ok":""}`} >Sorry your ID and Password is incorrect</h5>
                <input onChange={login} name='Email' placeholder='Email' />
                <input onChange={login} name='Password' placeholder='Password' />
                <button onClick={handel} className='login_button' >Login</button>
            </div>
            <h6>dont have Account?<span onClick={signupredirect} > Signup</span></h6>
        </div>
        </div>
        <img  onClick={handelclick} className='google_but' src={google} />

    </div>
  )
}

export default Login