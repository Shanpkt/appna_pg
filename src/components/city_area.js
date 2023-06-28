
import "./city_area.css"
import unisex from "../images/unisex.png"
import room from "../images/room.jpg"
import location from "../images/location.png"
import like from "../images/like.png"
import food from "../images/food.png"
import bed from "../images/bed.png"
import { useNavigate } from "react-router-dom"


function Citybox({navigation}) {

  

  return (
    <div onClick={navigation} className="city_box">
        <div className="inner_box" >
          
          <div className="inner_box_first" >
            <div className="inner_box_second" >

              <h5><img src={unisex}/>Unisex</h5>
              <h5><img src={food}/>Food</h5>
              <h5><img src={bed}/>1/2/3</h5>
            </div>
            <div className="innner_img_box">
              <img src={room} />
            </div>
          </div>
          <div className="info_box">
            <div className="info_box_cir">
              <h5><img src={location} />laxmi chowk</h5>
            </div>
            <div className="info_box_rec">
              <h4>Bhrma PG</h4>
              <h4>7000/-</h4>
              <h4><img src={like} /></h4>
            </div>
          </div>


          
        </div>
      
        
       
    </div>
  )
}

export default Citybox;
