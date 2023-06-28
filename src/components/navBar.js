
import './navBar.css'
import myimg from "../images/menu.png"
import search from "../images/search.png"
import filter from "../images/filter.png"
import axios from 'axios'
import { useEffect, useState } from 'react'

function Navbar({trriger,settrigger,filtertrg,setfiltertrg}) {


  function hope(){
    console.log (trriger)
    trriger==false?settrigger(true):settrigger(false)
   
  }


  function filterset(){
    console.log(filtertrg)
  
    filtertrg==false?setfiltertrg(true):setfiltertrg(false)

  }

  const [data,setdata]=useState([])
  const [cords,setcords]=useState("")

  useEffect(() => {
    findlocation()
  
  }, [])

 
 async function findlocation(){

    navigator.geolocation.getCurrentPosition((position)=>{
   // console.log(position.coords);
 fet(position.coords)

    })

  }


 async function fet(e){

    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?key=e866f37a27334a859dd083191709fd6f&q=${e.latitude}+${
        e.longitude}`
    ).then((e)=>{console.log(e.data.results[0].components);setdata(e.data.results[0].components)
      })

  }


  return (
    <div className="nav_box">
        <div className="box" >
          <div className='menu_box_loc'>
            <img onClick={hope}  src={myimg}  />
           <h4>{data.state_district}</h4></div>
            <img onClick={filterset} src={filter}  />
           
        </div>
        <div className="input_box" >
        <input placeholder="type area" />
        <button><img className="search" src={search} /></button>
        </div>
    </div>
  )
}

export default Navbar;
