import React from "react";

const Contact = () => {
  return (
    
      <div style={{height:"100vh",width:"100vw"}}>
        <div className="d-flex justify-content-between" style={{height: "50vh",width:"100vw", backgroundColor:"#F44E77"}}>
        
          <div className="p-5">
              <form className='d-flex flex-column pt-2'>
                  <input className='mt-3 rounded' type="text" placeholder='Enter your name' />
                  <input className='mt-3 rounded' type="text" placeholder='Enter a valid Email address' />
                  <input className='mt-3 rounded input-lg' type="text" placeholder='Enter your message' />
                  <button className='mt-3 rounded btn btn-white'>Submit</button>
              </form>
              </div>
          
          <div className="p-5"><h3 className='display-4 ' style={{fontFamily: "cursive"}}>Contact Us</h3></div>
    
      
         </div>
        <div style={{height: "50vh",width:"100vw",backgroundColor:"#16194F"}}>

       </div>
      </div>
  );
};

export default Contact;
