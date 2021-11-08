import {NavLink, Route} from "react-router-dom"
import Cart from "./Cart";


function Card(props) {
    return (
      <div className="card">
        <div className="card__body">
          <img src={props.img} className="card_image" />
          <h2 className="card_title">{props.title}</h2>
          <p className="card_description">Description: {props.description}</p>
          <p className="card_category">Category: {props.category}</p>
          <p className="card_price">Cost: Rs.{props.price}</p>
        </div>
        {/* <NavLink className="card_btn" to='/cart'>Add to cart</NavLink> */}
        <a href="/cart" onClick={Cart} className="card_btn" >Add To Cart</a>
      </div>
    );
  }

  

  export default Card  