
import "./city_area.css"
import unisex from "../images/unisex.png"
import room from "../images/room.jpg"
import location from "../images/location.png"


function Citybox() {
  return (
    <div className="city_box">
        <div className="inner_box" >
          
          <div className="inner_box_first" >
            <div className="inner_box_second" >

              <h5><img src={unisex}/>unisex</h5>
              <h5><img src={unisex}/>unisex</h5>
              <h5><img src={unisex}/>unisex</h5>
            </div>
            <div className="innner_img_box">
              <img src={room} />
            </div>
          </div>
          <div className="info_box">
            <div className="info_box_cir">
              <h5><img src={location} />laxmi chowk</h5>
            </div>
          </div>


          
        </div>
      
        
       
    </div>
  )
}

export default Citybox;
