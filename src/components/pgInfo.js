import React from 'react'
import "./pgInfo.css"
import location from "../images/location.png"

function PgInfo() {
  return (
    <div className='info_pg_box' >
      <div className='info_main_box'>
    
 <div className='info_one'>
 <h3>Bhrama Pg</h3>
   <h5><img src={location} /><a>Laxmi Chowk</a></h5> 
     </div>
     <div className='info_two'>
      <h5>UNISEX</h5>

     </div>

     </div>


     <div className='info_second_box'>
      <h4>Property Amenties</h4>

     </div>

    </div>

  )
}

export default PgInfo