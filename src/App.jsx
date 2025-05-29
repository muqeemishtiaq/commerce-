import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Home from './components/Home'; 
import Cart from './components/Cart';
import './App.css';
import productList from './components/data';

const App = () => {
  const [productId, setProductId] = useState("");
  const [cartAllProducts, setCartAllProducts] = useState([]);

  useEffect(() => {
    
    if (productId) {
      const filteredProducts = productList.filter(
        (product) => product.id === productId
      );
     
      setCartAllProducts(prevProducts => [...prevProducts, ...filteredProducts]);
    }
  }, [productId]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home setProductId={setProductId} />} />
        <Route path='/cart' element={<Cart cartAllProducts={cartAllProducts} setCartAllProducts={setCartAllProducts} />} />
      </Routes>
    </Router>
  );
};

export default App;
