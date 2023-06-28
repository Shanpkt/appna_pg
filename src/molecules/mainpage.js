import React from 'react'
import "./mainpage.css"
import laptopman from "../images/laptop_man.png"
import { useNavigate } from 'react-router-dom'

function Mainpage() {

    const navigate=useNavigate()

    function handel(){
  navigate("/PGselect")
    }

  return (
    <div className='main'>
    <img className='laptopman' src={laptopman} />
    <h4>"Discover Your Perfect Haven
 The Ultimate PG Finder App"</h4>
 <button onClick={handel} className='find_btt'>FIND</button>

    </div>
  )
}

export default Mainpage