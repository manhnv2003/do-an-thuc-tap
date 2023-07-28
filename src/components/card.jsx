import React from "react";
// import { Card } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Product = (props) => {
  const { id, productName, productImage, purpose } = props.data;
  return (
    <div className="category">
    <Link to="/"><img src={productImage} /></Link>
    
  </div>
  );
};
