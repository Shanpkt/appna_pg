import React from 'react'
import "./menu.css"
import { useEffect } from 'react'
import close from "../images/close.png"
import { useNavigate } from 'react-router-dom'

function Menu({trriger,settrigger}) {

  const navigate=useNavigate()
    function handle_close(){
        trriger==false?settrigger(true):settrigger(false)
    }


    function profile(){
       navigate("/Profile")
    }

  return (
    <div  className={`menu_box ${trriger==true ? 'menu_box1' : ''}`} >
        
        <div className='close_icon' onClick={handle_close} ><img src={close}/>   </div>

         <div className='menu_list'>
            <h3>Home</h3>
            <h3 onClick={profile} >Profile</h3>
            <h3>Refferals</h3>
            <h3>My PG</h3>

             <h3>LogOut</h3>
         </div>


     

    </div>
  )
}

export default Menu