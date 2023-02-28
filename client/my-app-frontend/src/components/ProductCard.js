
import React, { useState } from 'react'
import Modal from "./Modal"
import "../css/ProductCard.css"




function ProductCard({ title, price, image,  description, category, rating, product, handleClick, onHandleDelete, onEditReview}){

      const [popup, setPopup] = useState([]);      
      const [popupToggle, setPopupToggle] = useState(false)

      const changeContent = (product) => {
          setPopup([product])
          setPopupToggle(!popupToggle)
      }
      
      
    return (
        <>      
          <div className="col-sm-3"> 
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={image} alt={title}/>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                </div>
                <ul className="list-group list-group-flush">  
                  <li className="list-group-item">Price: Ksh {price}</li>
                  <li className="list-group-item">Section: {category}</li>
                  <li className="list-group-item">Rating: {rating}/5</li>
                  <li className="list-group-item">
                    <button className='ui mini orange button' onClick = {()=>changeContent(product)}>Reviews</button>
                  </li>
                </ul>
                <div className="card-body">
                <button onClick={() => handleClick(product)} className='ui mini orange button' id="btn" >+ Add To Cart</button>
                
                  
                </div>           
              </div>            
          </div> 

          {popupToggle && (<div className='pop-up-container' onClick={changeContent}>
                 <div className='pop-up-body' onClick = {(e) => e.stopPropagation()}>
                 <div className='pop-up-header'> 
                            <button  className='ui red button' onClick={changeContent}>X</button>
                        </div>
                        <div className='pop-up-content'>
                          {popup.map((pop) => {
                            return(
                             <Modal 
                             key = {pop.id}
                             title = {pop.title}
                             price = {pop.price}
                             ratings = {pop.rating}
                             comments = {pop.comment}
                             image = {pop.image}
                             description = {pop.description}  
                             onHandleDelete = {onHandleDelete}
                             onEditReview = {onEditReview}                           
                             pop = {pop}
                             />
                            );
                          })}
                        </div>
                        </div>     
                       
            </div> )}

           
        </>
        
        
    )
}

export default ProductCard;