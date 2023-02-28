

import React, {useState} from 'react'
import "../css/AddProduct.css"


function AddProduct({ addNewProduct }){

   
    const [title , setTitle] = useState('')
    const [price , setPrice] = useState('')
    const [image, setImage] = useState('')    
    const [description , setDescription] = useState('')
    const [category , setCategory] = useState('')
    const [rating , setRating] = useState('')
    const [comment, setComment] = useState('')
       
   
     
    
     const handleSubmit = (e) =>{
        e.preventDefault()

        const newProduct = {
            
            title: title,
            price: price,
            description: description,
            category: category,
            image: image, 
            comment: comment,          
            rating: rating,
           
        }

        fetch(' http://localhost:8002/products', {

        method:'POST',

        headers: {
            'Content-Type' : 'application/json'
        },

        body:JSON.stringify(newProduct),
     })
     
     .then((resp)=> resp.json())
     .then((product)=> addNewProduct(product))

     alert("Your Product Has Been Submitted, Check The Home Page")
     setCategory('')
     setDescription('')
     setImage('')
     setPrice('')
     setRating('')
     setTitle('')
     setComment('')

    }

    return(
        <div className= "form">
                
         <form onSubmit = {handleSubmit}>
        <div className="form-group">

            <label>Title</label>
            <input type="text" 
            name ='title' 
            value = {title}
             className="form-control" 
             placeholder="Enter Product Name" 
             onChange ={(e) => setTitle(e.target.value)}/>
        
        </div>

        <div className="form-group">
            <label>Price</label>
            <input type="number"
             name ='price'
              value = {price}
               className="form-control"
                placeholder="Enter Price in Shillings"
                 onChange ={(e) => setPrice(e.target.value)}/>
        </div>

        <div className="form-group">
            <label>Description</label>
            <input type="text" 
            name ='description'
             value = {description} 
             className="form-control" 
             placeholder="Enter Product Description" 
             onChange ={(e) => setDescription(e.target.value)}/>
        </div>

        
        <div className="form-group">
            <label>Image</label>
            <input type="text" 
            name ='image' 
            value = {image} 
            className="form-control"
             placeholder="Enter Image Link" 
             onChange ={(e) => setImage(e.target.value)}/>
        </div>

        <div className="form-group">
            <label>Review</label>
            <input type="text" 
            name ='comment'
             value = {comment} 
             className="form-control" 
             placeholder="Enter Product Review" 
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

        <div>
        <label className="mr-sm-2" >Category</label>
        <select className="custom-select mr-sm-2"  id="inlineFormCustomSelect"
        onChange ={(e) => setCategory(e.target.value)}
        name ='category' 
        value = {category}  >
        <option >Choose...</option>
        <option value="Men's Clothing">Men's Clothing</option>
        <option value="Women's Clothing">Women's Clothing</option>
        
      </select>
          
        </div>


        
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
                
                </div>
           
             
    )
    }
    export default AddProduct;