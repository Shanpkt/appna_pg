import React from 'react'
import "./profilebottom.css"
import setting from "../images/icons8-setting-100.png"
import bulding from "../images/icons8-bulding-64.png"
import patner from "../images/icons8-friend-64.png"

function Profilebottom() {
  return (
    <div className='user_option' >
 
        <h4><img src={setting} />Setting</h4>
        <h4><img src={bulding} />My PG</h4>
        <h4><img src={patner} />Find Roomate</h4>

    </div>
  )
}

export default Profilebottom