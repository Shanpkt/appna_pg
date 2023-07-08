import React from 'react'
import "./personalOption.css"
import bulding from "../images/icons8-house-64.png"
function PersonalOption() {
  return (
    <div>
        <div className='option_slide' >
        <div className='circle_icon'>
        <img src={bulding} />
        </div>
        <h3>My PG</h3>

        </div>
        <div className='option_slide' >
        <div className='circle_icon'>
        <img src={bulding} />
        </div>
        <h3>find roomate</h3>

        </div>
        <div className='option_slide' >
        <div className='circle_icon'>
        <img src={bulding} />
        </div>
        <h3>saved pg</h3>

        </div>

       
    </div>
  )
}

export default PersonalOption