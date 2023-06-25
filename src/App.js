
import Navbar from './components/navBar';
import "./App.css"
import Citybox from './components/city_area';
import Menu from './components/menu';
import { useState } from 'react';
import Panel from './components/panel';
function App() {
  const [trriger,settrigger]=useState(true)
  console.log(trriger)

  function hope(){
 
    trriger==false?settrigger(true):settrigger(false)
   
  }
  return (
    <div className="App">
      
      <Menu trriger={trriger}  settrigger={settrigger}/>
     <Navbar  trriger={trriger}  settrigger={settrigger}   />
     <Citybox/>
     <Citybox/>
     <Panel/>
    </div>
  );
}


export default App;
