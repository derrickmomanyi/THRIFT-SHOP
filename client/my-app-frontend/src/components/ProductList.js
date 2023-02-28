import React from 'react';
import ProductCard from './ProductCard';
import "../css/ProductList.css"


function ProductList({products, search, handleClick, onHandleDelete, onEditReview}){ 
  console.log(products)
  
      
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
    rating = {product.rating}
    handleClick = {handleClick}
    onHandleDelete = {onHandleDelete}
    product = {product}
    onEditReview = {onEditReview}
      
    
     
     />
    

    

   
    ))



    
    return(
      
       
        
         <div className='row '>
          {displayProducts}
          </div> 
            
       
      
       
    )
}

export default ProductList;