import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../context/shop-context";

const Card = ({ id, productName, productImage, price }) => {

    // const { id, productName, productImage, price } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id];

    return (
      <>
        <section className="card">
          <img src={productImage} alt={productName} className="card-img" />
          <div className="card-details">
            <h3 className="card-title">{productName}</h3>
            {/* <section className="card-reviews">
              <faStar /><faStar /><faStar /><faStar />
              <span className="total-reviews">134</span>
            </section> */}
            <section className="card-price">
              <div className="price">
                {price}
              </div>
            </section>

              <button className="button-purchar" onClick={() => addToCart(id)}>
              Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>

          </div>
        </section>
      </>
    );
  };

  
export default Card;
