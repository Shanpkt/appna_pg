import React from 'react'
import "./mainpage.css"
import home from "../images/icons8-home-64 (1).png"
import laptopman from "../images/laptop_man.png"
import { useNavigate } from 'react-router-dom'

function Mainpage() {

    const navigate=useNavigate()

    function handel(){
  navigate("/login")
    }

  return (
    <div className='main'>
    <img className='laptopman' src={laptopman} />
    <h4>"Discover Your Perfect Haven
 The Ultimate PG Finder App"</h4>
 <button onClick={handel} className='find_btt'>FIND</button>
      <h3><img src={home}/>Appna PG</h3>
    </div>
  )
}

export default Mainpage