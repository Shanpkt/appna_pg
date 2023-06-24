
import './navBar.css'
import myimg from "../images/menu.png"

function Navbar() {
  return (
    <div className="nav_box">
        <div className="box" >
            <img src={myimg}  />
           
        </div>
        <div className="input_box" >
        <input placeholder="type area" />
        <button>click</button>
        </div>
    </div>
  )
}

export default Navbar;
