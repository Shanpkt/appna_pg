
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
import axios from 'axios';
const opencage = require('opencage-api-client');
function App() {

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
    <div className="App">
      <h3>{data.country}</h3> 
    <h3>state-{data.state}</h3>
      <h3>dist.-{data.state_district}</h3>
      <h3>suburb-{data.suburb}</h3>

    {/* <Selecepg/> */}
    {/* <BigScreenimg/> */}
    {/* <Routes>
      <Route path='/' element={<Mainpage/>} />
      <Route path='/PGselect' element={<Selecepg/>} />
      <Route path='/PGdetail' element={<BigScreenimg/>} />
    </Routes> */}
     
    </div>
  );
}


export default App;
