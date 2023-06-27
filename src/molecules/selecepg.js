import React, { useState } from 'react'
import Menu from '../components/menu'
import Navbar from '../components/navBar'
import Citybox from '../components/city_area'
import Panel from '../components/panel'
import Filteropt from '../components/filteropt'


function Selecepg() {
    const [trriger,settrigger]=useState(true)
    const [filtertrg,setfiltertrg]=useState(true)
   

    function hope(){
      trriger==false?settrigger(true):settrigger(false)
    }
  return (<>

      <Menu trriger={trriger}  settrigger={settrigger}/>
     <Navbar  trriger={trriger}  settrigger={settrigger} filtertrg={filtertrg} setfiltertrg={setfiltertrg}   />
     <Filteropt filtertrg={filtertrg} setfiltertrg={setfiltertrg} />
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