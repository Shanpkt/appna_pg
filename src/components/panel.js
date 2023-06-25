import React from 'react'
import "./panel.css"
import home from "../images/home.png"
import profile from "../images/profile.png"
import owner from "../images/icons8-agent-64.png"
function Panel() {
  return (
    <div className='panel_box'>

      <img src={home} />
      <div><img src={owner}/><h4>Owner</h4></div>
      <img src={profile} />

    </div>
  )
}

export default Panel