import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import Search from "./Search";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import "../css/ProductContainer.css"


function ProductContainer({handleClick}){
  const [reviews, setReviews] = useState([])
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")   
  const navigate = useNavigate();


  useEffect(() => {
    fetch("http://localhost:9292/reviews")
    .then((res) => res.json())
    .then((reviews) => setReviews(reviews))
  }, [])

     useEffect(() => {
      fetch("http://localhost:9292/products/1")
      .then((res) => res.json())
      .then((products) => setProducts(products))
    }, [])

    
    const addNewProduct = (newProduct)  => {
      const updatedProduct = [...products, newProduct]
      setProducts(updatedProduct)
      
    }

    const editReview = (newReview) => {
     const updatedReview = reviews.map((review) => {       
      if (review.id === newReview.id) return newReview;
      return review;
   
     })
     setReviews(updatedReview)
     } 

     const addReview = (newReview) => {
      
      const updatedReview = [...reviews, newReview]
      setReviews(updatedReview)
     }

     function onReviewDelete(delRev){
          const updatedReview = reviews.filter(({id}) => id !== delRev.id)
          setReviews(updatedReview)
     }

    function onHandleDelete(product) {
      const updatedProduct = products.filter(({id}) => id !== product.id); 
      setProducts(updatedProduct);          
      }

    return(
        <>
         
        <Search search = {search} setSearch = {setSearch}/>               
        <ProductList products = {products} search = {search} handleClick = {handleClick} onHandleDelete = {onHandleDelete} editReview = {editReview} addReview = {addReview} rev = {reviews} onReviewDelete = {onReviewDelete}/>            
        <button className = "btn" onClick={() => navigate("/addproduct", <AddProduct addNewProduct = {addNewProduct} />)}>Go to Add Product</button>         
        
        
        
        
        
        </>
    )
}

export default ProductContainer;