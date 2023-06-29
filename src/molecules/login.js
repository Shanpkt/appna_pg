import React, { useState } from 'react'
import "./login.css"
import loginWomen from "../images/loginWomen.png"
import google from "../images/icons8-google-100.png"
import { useNavigate } from 'react-router-dom'

function Login() {
const [infodata,setinfodata]=useState()


function login(e){
const {name,value}=e.target
  
  setinfodata({
    ...infodata,
    [name]:value
  })
}

const navigate=useNavigate()

function handel(){
    navigate("/PGselect")
}

console.log(infodata)

  return (
    <div className='login_main'>
        <div className='white_curtain'>
        <div className='login_box' >
            <img src={loginWomen} />
            <div className='login_details_input'>
                <input onChange={login} name='Email' placeholder='Email' />
                <input onChange={login} name='Password' placeholder='Password' />
                <button onClick={handel} className='login_button' >Login</button>
            </div>
            <h6>dont have Account?<span> Signup</span></h6>
        </div>
        </div>
        <img className='google_but' src={google} />

    </div>
  )
}

export default Login