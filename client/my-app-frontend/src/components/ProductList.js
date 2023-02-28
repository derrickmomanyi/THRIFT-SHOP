import React from 'react';
import ProductCard from './ProductCard';
import "../css/ProductList.css"


function ProductList({products, search, handleClick, onHandleDelete, handleAddNewReview}){ 
   
      
    const displayProducts = products
    
    .filter((product) => 
        product.title.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase())
    )
    
    
    .map((product) => (
     <ProductCard 
      key = {product.id} 
    title = {product.title} 
    price = {product.price}
    description = {product.description}
    category = {product.category}
    image = {product.image}
    reviews = {product.reviews}
    handleClick = {handleClick}
    onHandleDelete = {onHandleDelete}
    product = {product}
    handleAddNewReview = {handleAddNewReview}
    
      
    
     
     />
    

    

   
    ))



    
    return(
      
       
        
         <div className='row '>
          {displayProducts}
          </div> 
            
       
      
       
    )
}

export default ProductList;