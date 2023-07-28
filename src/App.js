import React, {useState, useEffect} from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import {Cart} from './pages/cart/cart';
import Sneaker from './pages/sneaker';
import { ShopContextProvider } from './context/shop-context';
import Search from './components/search';

function App() {
  return (
   
    <div className="App">
      <ShopContextProvider>
            <div>
               <Navbar /> 
               <Routes>
                    <Route path="/" element={<Home />} />   
                    <Route path="/contact" element={<Contact />} />      
                    <Route path="/cart" element={<Cart />} />   
                    <Route path="/sneaker" element={<Sneaker />} />       
                    <Route path="/search" element={<Search />} />   
               </Routes>
               <Footer />
            </div>
            </ShopContextProvider>
    </div>
  );
}

export default App;
