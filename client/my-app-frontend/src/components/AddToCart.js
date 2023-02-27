import React, {useState, useEffect} from "react";
import "../css/ProductCard.css"

function AddToCart({setIsInCart, isInCart, handleChange}){
    const [units, setUnits] = useState(0)
     
    function handleRemove(id){
        const arr = isInCart.filter((product) => product.id !== id);
        setIsInCart(arr);
        handleUnits();
    }

    const handleUnits = () => {
        let x = 0;
        isInCart.map((product) => parseInt(x += product.amount * product.price));
        setUnits(x);
      };

      useEffect(() => {
        handleUnits();
      });

    const displayProductsInCart = isInCart.map((product) => {
        return(
            (
            <div className="col-sm-3" key = {product.id}> 
            <div className="card" style={{width: "18rem"}} >
                <img className="card-img-top " src={product.image} alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Price: Ksh {product.price}</li>
                  <li className="list-group-item">Section: {product.category}</li>
                  <li className="list-group-item">Rating: {product.rating}/5</li>
                </ul>
                <div className="card-body">
                {(<div className='d-flex align-items-centre justify-content-centre' style={{gap: "0.5rem"}}> 
                    <button id="btn2" className='ui mini blue button' onClick = {() => handleChange(product, -1)}>-</button>
                    <div>
                      <span className='fs-5'>{product.amount}</span> in cart
                    </div>
                    <button className='ui mini blue button' onClick = {() => handleChange(product, +1)}>+</button>
                    
                    <div className='d-flex align-items-centre flex-column' style={{gap: "0.5rem"}}>
                    
                    </div>
                   
                </div>)}
                <button className= "ui mini red button" onClick = {() => handleRemove(product.id)}>Remove</button>
                  
                </div>
               
                </div>
    </div>)
    
        )
    })
    return (
    <>
     <div className='row '>
    {displayProductsInCart}
    
            </div>
            <div className="total">
                    <h2 style={{color: "blue"}}>Cart Summary</h2>
                    <h4 style={{color: "blue"}}>Subtotal: Kshs. {units}</h4>
            </div>
    </>
    )
}

export default AddToCart;