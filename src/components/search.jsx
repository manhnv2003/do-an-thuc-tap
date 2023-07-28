import axios from "axios";
import React, { useState, useEffect } from "react";
import Sidebar from '../Sidebar/Sidebar';
import '../styles/search.css';
// 
import Card from '../Sidebar/the';
import {PRODUCT} from '../components/products';
import { CardProduct } from "./cardproduct";

export default function Search() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = PRODUCT.filter(
    (product) => product.productName.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ loai,productName, productImage, price, color }) =>
          loai === selected ||
          color === selected ||
          productName === selected ||
          price === selected ||
          productName === selected
      );
    }

    // return filteredProducts.map(
    //   ({ id,productName, productImage, price }) => (
    //       <Card
    //       key={Math.random()}
    //       productImage={productImage}
    //       productName={productName}
    //       price={price}
    //     />
    //   )
    // );
    return filteredProducts;
  }

  const result = filteredData(PRODUCT, selectedCategory, query);

  console.log(result);
  return (
  <div className="ctn">
    <div className="sidepar">
    <Sidebar  handleChange={handleChange}/>
    </div>
    <div className="products">
    {
      result.map((product)=>
      {
        return (
          <CardProduct data={product} />
        );
      }
      )
    }
    </div>
  </div>
  );
}
