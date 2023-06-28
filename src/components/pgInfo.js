import React from 'react'
import "./pgInfo.css"
import location from "../images/location.png"
import washing from "../images/icons8-washing-machine-80.png"

function PgInfo() {
  return (
    <div className='info_pg_box' >
      <div className='info_main_box'>
    
 <div className='info_one'>
 <h3>Bhrama Pg</h3>
   <h5><a>Laxmi Chowk</a><img src={location} /></h5> 
     </div>
     <div className='info_two'>
      <h5>UNISEX</h5>

     </div>

     </div>


     <div  className='info_second_box'>
      <h4>Property Amenties</h4>
      <div className='amenties_box'>
        <img className='amenties_pic' src={washing}  />
        <img className='amenties_pic' src={washing}  />
        <img className='amenties_pic' src={washing}  />
        <img className='amenties_pic' src={washing}  />
        <img className='amenties_pic' src={washing}  />
        <img className='amenties_pic' src={washing}  />
      </div>

     </div>

    </div>

  )
}

export default PgInfo