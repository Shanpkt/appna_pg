
import Navbar from './components/navBar';
import "./App.css"
import Citybox from './components/city_area';
import Menu from './components/menu';
import { useState } from 'react';
import Panel from './components/panel';
import BigScreenimg from './components/bigScreenimg';
import PgInfo from './components/pgInfo';
import Selecepg from './molecules/selecepg';
import { Routes ,Route} from 'react-router-dom';
function App() {
 
  return (
    <div className="App">
      
    {/* <Selecepg/> */}
    {/* <BigScreenimg/> */}
    <Routes>
      <Route path='/' element={<Selecepg/>} />
      <Route path='/PGselect' element={<BigScreenimg/>} />
    </Routes>
     
    </div>
  );
}


export default App;
