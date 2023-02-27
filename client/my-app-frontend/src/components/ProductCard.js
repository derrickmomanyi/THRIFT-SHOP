//component to display fetched data from server
//Derick
import React from 'react'
import "../css/ProductCard.css"



function ProductCard({ title, price, image,  description, category, reviews, product, handleClick}){
     ;
   
    return(
        <>
      
        
            
        <div className="col-sm-3"> 
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top " src={image} alt={title} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Price: Ksh {price}</li>
              <li className="list-group-item">Section: {category}</li>
              <li className="list-group-item">Rating: {reviews.reduce((acc, cur) => acc + cur.rating, 0)/product.reviews.length}/5</li>
            </ul>
            <div className="card-body">
            <button onClick={() => handleClick(product)} className='ui mini orange button' id="btn" >+ Add To Cart</button>
              
            </div>
            </div>
</div>

        
        
        
        
   

  
 
        </>
    )
}

export default ProductCard;