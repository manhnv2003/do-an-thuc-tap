import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCT } from "../../components/products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  // const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  const[totalAmount,setTotalAmount] = useState(getTotalCartAmount);
  const[tru,setTru] = useState(false);
  
  useEffect(() => {
    setTotalAmount(getTotalCartAmount);
  },[]);

  return (
    <div className="cart">
     <div className={tru?"undisplay": ''}>
     <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCT.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
     </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <div className="Subtotal">
            <h3> Subtotal: ${totalAmount} </h3>
            <p className="btn-pay" onClick={() => {setTotalAmount('0');alert("Payment success");setTru(true)}}>Pay</p>
          </div>        
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};