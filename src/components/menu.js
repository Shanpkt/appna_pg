import React from 'react'
import "./menu.css"
import { useEffect } from 'react'
import close from "../images/close.png"

function Menu({trriger,settrigger}) {

    function handle_close(){
        trriger==false?settrigger(true):settrigger(false)
    }

  return (
    <div  className={`menu_box ${trriger==true ? 'menu_box1' : ''}`} >
        <div className='close_icon' onClick={handle_close} ><img src={close}/></div>

    </div>
  )
}

export default Menu