import React, { useEffect } from 'react'
import "./profilebottom.css"
import setting from "../images/icons8-setting-100.png"
import bulding from "../images/icons8-bulding-64.png"
import patner from "../images/icons8-friend-64.png"
import logoutlogo from "../images/icons8-logout-100.png"
import { useNavigate } from 'react-router-dom'

function Profilebottom() {

    const navigate=useNavigate()

    useEffect(() => {

      const details=  localStorage.getItem("logindetails")
      
         details==null? navigate("/"):console.log("")
        
       
    }, [])

    function logout(){
        localStorage.removeItem("logindetails");
        localStorage.removeItem("imagedata");
          
          navigate(-1)
    } 


  return (
    <div className='user_option' >
 
        <h4><img src={setting} />Setting</h4>
        <h4><img src={bulding} />My PG</h4>
        <h4><img src={patner} />Find Roomate</h4>
       <div className='button_box' >
        <button onClick={logout} className='logout_button' >Log Out <img src={logoutlogo} /> </button>
        </div> 
    </div>
  )
}

export default Profilebottom