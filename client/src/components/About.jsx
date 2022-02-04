import React from "react";

const About = () => {
    // const style={
    //     .circle {
    //         borderRadius: 50%;
    //         height: 100px;
    //         width: 100px;
    //         overflow: hidden;
    //         display: flex;
    //         justifyContent: center;
    //         align-items: center;
    //        }
    // }
  return (
    <div style={{ height: "auto", width: "auto", overflowX: "hidden" ,
      backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/logindemo-2e936.appspot.com/o/BG.png?alt=media&token=39987a83-228b-4390-86fb-2dc1acdccdbe')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    
    } }>
      <div className="container">
        <h1 className="text-center">About Us</h1>
        <div className="row mt-4">
          <div className="col-md-4 ">
            <img
              src="./images/yash.jpeg"
              className="img-fluid rounded-circle"
              alt=""
            />
          </div>
          <div className="col-md-6 mx-5 px-5 py-5">
            <h2 className="text-dark">
              <u>Yash Nerkar</u>
            </h2>
            <h4 className="text-light">Full Stack Developer</h4>
          </div>
          {/* second member */}
          <div className="row mt-3">
            <div className="col-md-4">
              <img
                src="./images/shree.jpeg"
                className="img-fluid rounded-circle"
                alt=""
              />
            </div>
            <div className="col-md-6 mx-5 px-5 py-5">
              <h2 className="text-dark">
              <u>Shreerang Patil</u>
              </h2>
              <h4 className="text-light">Front end developer</h4>
            </div>
          </div>
          {/* third member */}
          <div className="row mt-3">
            <div className="col-md-4">
              <img
                style={{borderRadius:"50%"}}
                src="./images/amit.jpeg"
                className="img-fluid rounded-circle"
                alt=""
              />
            </div>
            <div className="col-md-6 mx-5 px-5 py-5">
              <h2 className="text-dark"><u>Amit Kulkarni</u></h2>
              <h4 className="text-light">Security and Documentation</h4>
            </div>
            {/* fourth member */}
            <div className="row mt-4">
              <div className="col-md-4">
                <img
                  src="./images/vedant.jpeg"
                  className="img-fluid rounded-circle"
                  alt=""
                />
              </div>
              <div className="col-md-6 mx-5 px-5 py-5">
                <h2 className="text-dark"><u>Vedant Prabhu</u></h2>
                <h4 className="text-light">
                  Android Developer and UI/UX designer
                </h4>
              </div>
            </div>
            {/* dmce logo section */}

            <div className="row mt-5">
                
              <div className="col-md-4 text-center">
                <img
                  src="./images/dmce.png"
                  className="img-fluid py-4 rounded-circle"
                  alt=""
                />
              </div>
              <div className="col-md-6 mx-5 px-5">
              <h2 class="text-center">We are from</h2>
                <p className="text-center text-light" >
                  We are a group of students from the Department of Computer
                  Science and Engineering, who are working on a project to make
                  a platform for people to make their generous donations towards
                  satiating hungers of the needy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

/* <p className="text-center">
              We are a group of students from the Department of Computer Science
              and Engineering, who are working on a project to make a platform
              for people to make their generous donations towards satiating hungers of the
              needy.
            </p> */
