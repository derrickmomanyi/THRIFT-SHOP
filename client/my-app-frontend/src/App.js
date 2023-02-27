

import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import ProductContainer from "./components/ProductContainer";
import NavBar from "./components/NavBar";
import AddProduct from "./components/AddProduct";
import  About  from "./components/About";
import Footer from "./components/Footer";
import AddToCart from "./components/AddToCart";



function App() { 
    const [isInCart, setIsInCart] = useState([])

    const handleClick = (product) => {
      if (isInCart.indexOf(product) !== -1) return;
      setIsInCart([...isInCart, product]);
    };

    const handleChange = (product, d) => {
      const ind = isInCart.indexOf(product);
      const arr = [...isInCart];
      if (arr[ind].amount === undefined || isNaN(arr[ind].amount)) arr[ind].amount = 0;
      arr[ind].amount += d;
      if (arr[ind].amount === 0) arr[ind].amount = 1;
      setIsInCart([...arr]);
    };
 

  return (
    <div>
     
      <NavBar num={isInCart.length}/>
      

      <Routes>
        <Route path="/" element = {<ProductContainer handleClick = {handleClick}/>} />
        <Route path="addproduct" element ={ <AddProduct   />}/>               
        <Route path="about" element ={ <About />}/>
        <Route path="addtocart" element = { <AddToCart setIsInCart={setIsInCart} isInCart={isInCart} handleChange={handleChange}/>} />
    
        
       
        
       
      </Routes>

      <Footer />
      
     
      
    </div>
  );
}

export default App;
