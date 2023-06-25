import React from 'react'
import "./menu.css"
import { useEffect } from 'react'

function Menu({props}) {


  return (
    <div  className={`menu_box ${props==true ? 'menu_box1' : ''}`} ></div>
  )
}

export default Menu