import React, { useState } from 'react'
import Menu from '../components/menu'
import Navbar from '../components/navBar'
import Citybox from '../components/city_area'
import Panel from '../components/panel'


function Selecepg() {
    const [trriger,settrigger]=useState(true)
    console.log(trriger)

    function hope(){
   
      trriger==false?settrigger(true):settrigger(false)
     
    }
  return (<>

      <Menu trriger={trriger}  settrigger={settrigger}/>
     <Navbar  trriger={trriger}  settrigger={settrigger}   />
     <Citybox/>
     <Citybox/>
     <Citybox/>
     <Citybox/>
     <Citybox/>
     <Citybox/>
      <Panel/> 
      </>
   
  )
}

export default Selecepg