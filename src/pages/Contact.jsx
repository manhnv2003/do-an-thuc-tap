import React from "react";
import { PRODUCT } from "../components/products";
import { Product } from "../components/card";

export default function Contact() {
  return (
    <div>
      <h1>cai nay la thu nha</h1>
      <div>
        {PRODUCT.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}
