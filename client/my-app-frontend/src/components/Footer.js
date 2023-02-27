import React from "react";
import "../css/Footer.css"

function Footer(){
    return(
       
<footer className="text-center text-lg-start bg-light text-muted">
  
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
   
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
   

    
    <div>
      <a href="instagram.com" className="me-4 text-reset">
      <i aria-hidden="true" className="instagram icon"></i>
      </a>
      <a href="twitter.com" className="me-4 text-reset">
      <i aria-hidden="true" className="twitter icon"></i>
      </a>
      <a href="google.com" className="me-4 text-reset">
      <i aria-hidden="true" className="google icon"></i>
      </a>
      <a href="youtube.com" className="me-4 text-reset">
      <i aria-hidden="true" className="youtube icon"></i>
      </a>
      <a href="linkedin.com" className="me-4 text-reset">
      <i aria-hidden="true" className="linkedin icon"></i>
      </a>
      <a href="github.com" className="me-4 text-reset">
      <i aria-hidden="true" className="github icon"></i>
      </a>
    </div>
   
  </section>
  

 
  <section className="">
    <div className="container text-center text-md-start mt-5">
     
      <div className="row mt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Thrift Shop
          </h6>
          <p>
           Drip is temporary, class is forever.
          </p>
        </div>
      

       
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Javascript</a>
          </p>
          <p>
            <a href="#!" className="text-reset">React</a>
          </p>
          <p>
            <a href="#!" className="text-reset">HTML</a>
          </p>
          <p>
            <a href="#!" className="text-reset">CSS</a>
          </p>
        </div>
        

        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
       

        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> Nairobi,  10012, KENYA</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            thriftshop@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 254 70 234 567 8</p>
          <p><i className="fas fa-print me-3"></i> + 254 70 432 765 9</p>
        </div>
        
      </div>
     
    </div>
  </section>
 

  
  <div className="text-center p-4">
    © 2023 Copyright:
    <a className="text-reset fw-bold" href="https://github.com/derrickmomanyi/Group-3-Project">DERRICK MOMANYI</a>
  </div>
 
</footer>

    )
}
export default Footer;