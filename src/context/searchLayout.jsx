import React,{useState,useEffect,useContext} from "react";
import { SearchContext } from "./search-context";
import {CardProduct} from '../components/cardproduct';

export const SearchLayout = (getProduct) => {
    return (
      <CardProduct data={getProduct} />
    );
};