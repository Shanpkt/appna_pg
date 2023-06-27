
import './navBar.css'
import myimg from "../images/menu.png"
import search from "../images/search.png"
import filter from "../images/filter.png"

function Navbar({trriger,settrigger,filtertrg,setfiltertrg}) {


  function hope(){
    console.log (trriger)
    trriger==false?settrigger(true):settrigger(false)
   
  }


  function filterset(){
    console.log(filtertrg)
  
    filtertrg==false?setfiltertrg(true):setfiltertrg(false)

  }


  return (
    <div className="nav_box">
        <div className="box" >
            <img onClick={hope}  src={myimg}  />
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
