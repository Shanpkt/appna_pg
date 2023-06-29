
import Navbar from './components/navBar';
import "./App.css"
import Citybox from './components/city_area';
import Menu from './components/menu';
import { useEffect, useState } from 'react';
import Panel from './components/panel';
import BigScreenimg from './components/bigScreenimg';
import PgInfo from './components/pgInfo';
import Selecepg from './molecules/selecepg';
import { Routes ,Route} from 'react-router-dom';
import Mainpage from './molecules/mainpage';
import { auth,provider } from './config';
import {signInWithPopup} from "firebase/auth"
import Login from './molecules/login';
import Signup from './molecules/signup';



const opencage = require('opencage-api-client');
function App() {

  const [data,setdata]=useState(0)

  
    
function handelclick(){

   signInWithPopup(auth,provider).then((e)=>{
 
     setdata(e.user.email)

   })

}
 
  return (
     <div className="App">

      <button onClick={handelclick}>Log In</button>
      <h2>{data}</h2>
     <Routes>
   
      <Route path='/' element={<Mainpage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/login/signup' element={ <Signup/>} />
      <Route path='/PGselect' element={<Selecepg/>} />
      <Route path='/PGdetail' element={<BigScreenimg/>} />
    </Routes> 

    

   
     
    </div>
  );
}


export default App;
