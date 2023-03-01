import React from 'react';
import ProductCard from './ProductCard';
import "../css/ProductList.css"


function ProductList({products, search, handleClick, onHandleDelete, editReview, rev, addReview, onReviewDelete }){    
      
    const displayProducts = products
    
    .filter((product) => 
        product.title.toLowerCase().includes(search.toLowerCase()) 
    )
    
    .map((product) => (
     <ProductCard 
      key = {product.id} 
    title = {product.title} 
    price = {product.price}
    description = {product.description}
    category = {product.category}
    image = {product.image}    
    handleClick = {handleClick}
    onHandleDelete = {onHandleDelete}      
    product = {product}
    editReview = {editReview}
    rev = {rev}
    addReview = {addReview}
    onReviewDelete = {onReviewDelete}
     />
    
    ))

   

    return(
      
         <div className='row '>
          {displayProducts}
          </div> 
       
    )
}

export default ProductList;