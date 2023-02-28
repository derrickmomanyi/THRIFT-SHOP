

import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import Search from "./Search";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import "../css/ProductContainer.css"


function ProductContainer({handleClick}){

  
  const [products, setProducts] = useState([])  
  const [search, setSearch] = useState("") 
   const navigate = useNavigate();
  


  useEffect(() => {
    fetch("http://localhost:8002/products")
    .then((res) => res.json())
    .then((products) => setProducts(products))
  }, [])

  console.log(products);

  const addNewProduct = (newProduct)  => {
    const updatedProduct = [...products, newProduct]
    setProducts(updatedProduct)
    
  }

  function onHandleDelete(product) {
    const updatedProduct = products.filter((product) => product.id !== products.id);
    setProducts(updatedProduct);  
    }

    function onEditReview(review) {
      const updatedProduct = products.map((product) => {
        if (review.id === products.id){
        return review
      }
      else {
        return product
       }
      })   
     setProducts(updatedProduct)
    
    }
 
 
    return(
        <>
         
        <Search search = {search} setSearch = {setSearch}/>               
        <ProductList products = {products} search = {search} handleClick = {handleClick} onHandleDelete = {onHandleDelete} onEditReview = {onEditReview}/>            
        <button className = "btn" onClick={() => navigate("/addproduct", <AddProduct addNewProduct = {addNewProduct} />)}>Go to Add Product</button>         
        
        
        
        
        
        </>
    )
}

export default ProductContainer;