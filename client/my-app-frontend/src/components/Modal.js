import React, {useState} from "react";
import "../css/Modal.css"

function Modal({ratings, price, title, image, description, comments, pop, onHandleDelete, onEditReview}){
  

  const [comment , setComment] = useState('') 
  const [rating , setRating] = useState('')

  
  const handleSubmit = (e) =>{
     e.preventDefault()
    const editReview = {           
      
      comment: comment,                 
      rating: rating,
     
  }
  
  fetch(`http://localhost:8002/products/${pop.id}`, {

        method:'PATCH',

        headers: {
            'Content-Type' : 'application/json'
        },

        body:JSON.stringify(editReview),
     })
     .then((resp)=> resp.json())
     .then((review)=> onEditReview(review))
     alert("successfully updated review")


  }

  function handleDelete(id){
    fetch(`http://localhost:8002/products/${pop.id}`, {
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
                          
                          <li className="list-group-item">Rating: {ratings}/5</li>
                          </ul>
                    
                  </div>
      </div>
      <div className = "popup-list">   
           <h4>Your Reviews</h4>    
              
              <ul className="list-group list-group-flush">

              <li className="list-group-item">Top Review: {comments} </li>                                 
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
       
               <button type="submit" className="ui mini blue button">Edit Review</button>
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