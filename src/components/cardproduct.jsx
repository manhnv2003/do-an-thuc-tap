import React,{ useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../styles/cardproduct.css';
import { ShopContext } from '../context/shop-context';

export const CardProduct = (props) => {
    const { id, productName, productImage, price } = props.data;

    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id];

  return (
    <div>
      <Card className="card">
        <div className="card-image">
        {/* <Card.Img variant="top" src={productImage}/> */}
        <img src={productImage} alt={productImage} />
        </div>
        <div className="card-body">
          <Card.Title className="cardTitle">{productName}</Card.Title>
          <Card.Text>Some quick example text</Card.Text>
          <div className="price">
                <strong>${price}</strong>
          </div>
          {/* <button className="button-purchar">${price}</button> */}
          <button className="button-purchar" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
        </div>
      </Card>
    </div>
  );
};