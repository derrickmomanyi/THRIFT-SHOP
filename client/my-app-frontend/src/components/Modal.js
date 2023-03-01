import React, {useState} from "react";
import "../css/Modal.css"

function Modal({id, price, description, title, image, pop, onHandleDelete, editReview, rev, addReview, onReviewDelete}){
  
  const [comment , setComment] = useState('') 
  const [rating , setRating] = useState('')
  const [newComment, setNewComment] = useState('')
  const [newRating, setNewRating] = useState('')


  const handleAddReview = (e)=> {
      e.preventDefault()
    const reviewData = {comment: newComment,rating: newRating, product_id : id}


    fetch(`http://localhost:9292/reviews`, {

        method:'POST',

        headers: {
            'Content-Type' : 'application/json'
        },

        body:JSON.stringify(reviewData),
     })
     .then((resp)=> resp.json())
     .then((newReview)=> {
     addReview(newReview);
      setNewComment('')
      setNewRating('')
      alert("successfully added review")
    })
     




  }

 
  const handleSubmit = (e) =>{
     e.preventDefault()

    const reviewData = {comment: comment,rating: rating} 
  
  
        fetch(`http://localhost:9292/reviews/${pop.id}`, {

              method:'PATCH',

              headers: {
                  'Content-Type' : 'application/json'
              },

              body:JSON.stringify(reviewData),
          })
          .then((resp)=> resp.json())
          .then((newReview)=> {
            editReview(newReview)
            
            setComment('')
            setRating('')
          
          })
    
  }

  function deleteReview(id){
    
    fetch(`http://localhost:9292/reviews/${pop.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((delRev) => {onReviewDelete(delRev);              
       
    })
  }

  function deleteProduct(id){
    fetch(`http://localhost:9292/products/${pop.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((delRev) => {onHandleDelete(delRev);              
       
    })}
   

   return (
    <div>
      <div className="popup">
            <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={image} alt={title}/>
                        <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                          <p>{description}</p>
                                                    
                        </div>
                        <ul className="list-group list-group-flush">  
                          <li className="list-group-item">Price: Ksh {price}</li>
                          
                          
                          <li className="list-group-item">Rating: {rev.map(function(review){
                            if (review.id === id){
                              return review.rating
                            }
                          })
                          }/5 </li>
                          </ul>
                    
                  </div>
      </div>
      <div className = "popup-list">   
           <h4>Your Reviews</h4>    
              
              <ul className="list-group list-group-flush">

              <li className="list-group-item">Top Review: {rev.map(function(review){
                            if (review.id === id){
                              return review.comment
                            }
                          })} 
                          <button className="ui mini brown button" type="button" onClick={() => deleteReview(id)}>Delete</button>
                          </li>                                 
               </ul>
      </div>
      <div className="popup-form">

      <div className= "form">
                
                <form onSubmit = {handleAddReview}>
                
               <div className="form-group">
       
                   <label>Comment</label>
                   <input type="text" 
                   name ='comment' 
                   value = {newComment}
                    className="form-control" 
                    placeholder="Enter Your Comment" 
                    onChange ={(e) => setNewComment(e.target.value)}/>
               
               </div>
       
       
               <div className="form-group">
                   <label>Rating</label>
                   <input type="number" 
                   name ='rating' 
                   value = {newRating} 
                   className="form-control" 
                   placeholder="Enter Rating" 
                   step = '0.1' 
                   onChange ={(e) => setNewRating(e.target.value)}/>
               </div>
       
               <button type="submit" className="ui mini purple button">Add Review</button>
               </form>
                       
                       </div>
        
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
       
               <button type="submit" className="ui mini blue button">Edit Review</button>
               </form>
                       
        </div>
      </div>
      <div className="popup-btn">
      <button className="ui mini brown button" onClick={() => deleteProduct(id)}>Delete Product</button>      
      </div>
</div>


    )
}

export default Modal;