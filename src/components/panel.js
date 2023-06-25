import React from 'react'
import "./panel.css"
import home from "../images/home.png"
import profile from "../images/profile.png"
function Panel() {
  return (
    <div className='panel_box'>

      <img src={home} />
     
      <img src={profile} />

    </div>
  )
}

export default Panel