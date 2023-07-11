import React, { useState } from 'react'
import "./profiletop.css"
import { useEffect } from 'react'

function Profiletop() {

    const [data,setdata]=useState([])

  useEffect(() => {

    const mydata= JSON.parse(localStorage.getItem("logindetails"))
       
    setdata(mydata)
  }, []);
  console.log(data)

  return (
    <div className='main_topBox' >

      <div className='second_box_strip' >

        <div>


        </div>
        <h4>{data.First_name}</h4>
        <div>

        </div>

      </div>

    </div>
  )
}

export default Profiletop