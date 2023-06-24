
import './navBar.css'
import myimg from "../images/menu.png"
import search from "../images/search.png"

function Navbar() {
  return (
    <div className="nav_box">
        <div className="box" >
            <img src={myimg}  />
           
        </div>
        <div className="input_box" >
        <input placeholder="type area" />
        <button><img src={search} /></button>
        </div>
    </div>
  )
}

export default Navbar;
