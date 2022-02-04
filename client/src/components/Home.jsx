import React, { useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./style.css";
const Home = () => {
  const [data, setData] = useState({
      country: "",
  });
const [res,setRes]= useState([]);

  const handleChange = (e) => {
    const {name, value } = e.target;
    setData({...data, [name]: value});
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
     const getData = await fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(data)
    });
    const res = await getData.json();
    // console.log(res);
    setRes(res.organizations);
    
    
  };
  console.log(res);
 

  return (
    <div className="" style={{ height: '100vh',width: '100vw',overflowX: 'hidden', 
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/logindemo-2e936.appspot.com/o/BG.png?alt=media&token=39987a83-228b-4390-86fb-2dc1acdccdbe')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    
    }}>
    <Navbar />
      <div className="container-fluid ">
        <div className="row mt-3 mb-5">
          <div className="col-md-6 col-sm-6 col-6  mt-5">
            <div className="container mt-3">
              <iframe
                title="map"
                src="https://my.atlistmaps.com/map/f07c97ed-1cd2-449f-a3e0-f2a361f7ac78?share=true"
                allow="geolocation"
                width="100%"
                height="500px"
                frameborder="0"
                scrolling="no"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div 
          style={{overflowY:"scroll", height: "525px"}}
          className="col-md-6 col-sm-6 col-6 text-center d-flex justify-content-center  bg-dark mt-5">
            <div>
              <form onSubmit={handleSubmit} >
                <div className="mt-5">
                  <label htmlFor="name" className="display-5 text-warning"
                  // style={{color:"rgba(85, 77, 222, 1)"}}
                  >
                    Enter Country Name
                  </label>
                </div>
                <div className="d-flex px-2 container w-75 ">
                  <div className="mt-4 d-inline p-2">
                    <input
                      type="text"
                      name="country"
                      value={data.country}
                      onChange={handleChange}
                    />
                  </div>
                   <div className="mt-4 d-inline p-2">
                    <button className="btn btn-sm btn-primary px-4">Submit</button>
                  </div>
                  
                </div>
              </form>
              <hr className="style-three"></hr>
              <h3 className="text-center">Searched Results</h3>
              {/* <div className="container"> */}
              {res.map((item,index)=>{
                  return(
                        <Card key={index} name={item.name} upiID={item.upiID}/>
                    )
              })}
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer className="mt-5"/>
        
      </div>
  );
};

export default Home;

{/* // // AIzaSyBEOw4-xzGqgKSvxzSYwmKEE_FTDDfPhcw */}
