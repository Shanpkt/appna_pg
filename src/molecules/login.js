import React from 'react'
import "./login.css"
import loginWomen from "../images/loginWomen.png"

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
        </div>
        </div>

    </div>
  )
}

export default Login