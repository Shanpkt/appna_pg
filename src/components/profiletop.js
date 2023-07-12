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

        <div className='profile_circle'>
          

        </div>
        <h4>Hi' {data.First_name}</h4>

        <div className='personalbox' >
            <div className='option_first' >
                My Refferals
            </div>
            <div className='divider' ></div>
            <div className='option_second'>
               Plan Weekends
            </div>

        </div>

      </div>

    </div>
  )
}

export default Profiletop