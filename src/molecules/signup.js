import React, { useRef, useState } from 'react'
import "./signup.css"
import plane from "../images/quirky-paper-plane-with-dotted-line-1.png"
import axios from 'axios'

function Signup() {

    const [waring,setwarning]=useState(true)
    const [waring2,setwarning2]=useState(true)
    const [data,setdata]=useState({})

    let password_data=useRef({password:"",confirm_pass:""})


    function setalldata(e){
         const {name,value}=e.target
         setdata({
            ...data,
            [name]:value
           })

    }


function password(e){
 
    const {value,name}=e.target
     if(value.length>7){

      setwarning(true)
       setdata({
        ...data,
        [name]:value
       })

    }else{
        setwarning(false)
    }
  
}
function confirm_pass(e){
    const {value,name}=e.target
    if(value==data.password){
       
     setwarning2(true)
   
    }else{
        setwarning2(false)
    }
}

function submit(){
    if(waring ==true && waring2==true){
        console.log("ok")
        axios.post("https://backend-appna-pg.vercel.app/userdata",data).then((e)=>{console.log(e)})

    }
    
}

console.log(data)

  return (
    <div className='signup_main' >
        <div className='signup_box' >
            <img src={plane} />
            <h2>HELLO , GET JOIN WITH US</h2>
            <div className='feild_box'>
                <input onChange={setalldata} name='First_name'   placeholder='First Name'/>
                <input onChange={setalldata} name='Last_name' placeholder='Last Name'/>
                <input onInput={setalldata} onChange={setalldata} name='Email' placeholder='Email' />
                <input onChange={setalldata} name='year' placeholder='Year' />
                <input name='password'  onChange={password}  placeholder='Password' />
                <h6 className={`pass_warning ${waring?"password_ok":""}` } >password should be min of 8 length and 1 Number</h6>
                <input onChange={confirm_pass} name='confirm_pass' placeholder='Confirm Paasword'/>
                <h6  onChange={confirm_pass}  className={`pass_warning ${waring2?"password_ok":""}` }  >password is not matching</h6>
                <button onClick={submit} >Next</button>
            </div>
        </div>

    </div>
  )
}



export default Signup