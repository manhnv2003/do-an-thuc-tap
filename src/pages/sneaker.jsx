import React from "react";
import { PRODUCT } from "../components/products";
import { CardProduct } from "../components/cardproduct";

export default function Sneaker() {
  return (
    <div>
      {PRODUCT.map((product) => {
          if(product.loai == 'sneaker'){
            return <CardProduct data={product} />
          }
      })}
    </div>
  );
}
