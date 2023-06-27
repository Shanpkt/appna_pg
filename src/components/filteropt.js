import React from 'react'

function Filteropt({filtertrg,setfiltertrg}) {



  return (
    <div className={`menu_box ${filtertrg==true ? 'menu_box1' : ''}`}>
        
        Filteropt

    </div>
  )
}

export default Filteropt