import React, {useState} from "react";
import "../css/Modal.css"

function Modal({id, price, title, image, reviews, pop, onHandleDelete, handleAddNewReview}){
  
  
  const [comment , setComment] = useState('') 
  const [rating , setRating] = useState('')
 


  
  
  const handleSubmit = (e) =>{
     e.preventDefault()
    const reviewData = {comment: comment,rating: rating, product_id: id}
  
  fetch(`http://localhost:9292/reviews`, {

        method:'POST',

        headers: {
            'Content-Type' : 'application/json'
        },

        body:JSON.stringify(reviewData),
     })
     .then((resp)=> resp.json())
     .then((newReview)=> {
      handleAddNewReview(newReview);
      setComment('')
      setRating('')
    
    })
     alert("successfully created review")


  }

  function handleDelete(id){
    fetch(`http://localhost:9292/products/${pop.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((delRev) => {onHandleDelete(delRev);
        alert('successfuly deleted product');
    })}

   return (
    <div>
      <div className="popup">
            <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={image} alt={title}/>
                        <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                                                    
                        </div>
                        <ul className="list-group list-group-flush">  
                          <li className="list-group-item">Price: Ksh {price}</li>
                          
                          <li className="list-group-item">Rating: {reviews.map((review) => review.rating )}/5</li>
                          </ul>
                    
                  </div>
      </div>
      <div className = "popup-list">   
           <h4>Your Reviews</h4>    
              
              <ul className="list-group list-group-flush">

              <li className="list-group-item">Top Review: {reviews.map((review) => review.comment )} </li>                                 
               </ul>
      </div>
      <div className="popup-form">
      <div className= "form">
                
                <form onSubmit = {handleSubmit}>
                
               <div className="form-group">
       
                   <label>Comment</label>
                   <input type="text" 
                   name ='comment' 
                   value = {comment}
                    className="form-control" 
                    placeholder="Enter Your Comment" 
                    onChange ={(e) => setComment(e.target.value)}/>
               
               </div>
       
       
               <div className="form-group">
                   <label>Rating</label>
                   <input type="number" 
                   name ='rating' 
                   value = {rating} 
                   className="form-control" 
                   placeholder="Enter Rating" 
                   step = '0.1' 
                   onChange ={(e) => setRating(e.target.value)}/>
               </div>
       
               <button type="submit" className="ui mini blue button">Add Review</button>
               </form>
                       
                       </div>
      </div>
      <div className="popup-btn">
      <button className="ui mini brown button" onClick={handleDelete}>Delete</button>
      </div>
</div>


    )
}

export default Modal;