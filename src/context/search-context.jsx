import { createContext, useEffect, useState } from "react";
import { PRODUCT } from "../components/products";

export const SearchContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCT.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const SearchContextProvider = (props) => {
  const [searchItems, setSearchItems] = useState(null);




  const getItem = (itemId) => {
    PRODUCT.map((product) => {
        const foundProduct = PRODUCT.find((product) => product.id === itemId);
        setSearchItems(foundProduct);
        return foundProduct;
    })
  };



  const contextValue = {
    searchItems,
    getItem,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {props.children}
    </SearchContext.Provider>
  );
};
