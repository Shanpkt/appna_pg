import React from 'react'
import room from "../images/room.jpg"
import "./bigScreenimg.css"
import PgInfo from './pgInfo'

function BigScreenimg() {
  return (
    <div className="bigimg_box">
        <img src={room} />
        <PgInfo/> 
    </div>
  )
}

export default BigScreenimg