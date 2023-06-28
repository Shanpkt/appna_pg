import React from 'react'
import "./login.css"
import loginWomen from "../images/loginWomen.png"
import google from "../images/icons8-google-100.png"

function Login() {
  return (
    <div className='login_main'>
        <div className='white_curtain'>
        <div className='login_box' >
            <img src={loginWomen} />
            <div className='login_details_input'>
                <input placeholder='Email' />
                <input placeholder='Password' />
            </div>
            <h6>dont have Account?<span> Signup</span></h6>
        </div>
        </div>
        <img className='google_but' src={google} />

    </div>
  )
}

export default Login