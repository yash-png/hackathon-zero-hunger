import React from "react";

const Contact = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div
        className="d-flex justify-content-between"
        style={{ height: "50vh", width: "100vw", backgroundColor: "#F44E77" }}
      >

        <div className="container w-50 mt-5">
          <h2 className="text-center display-4">Contact US</h2>
          <form className="mt-5">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label display-4">

                Enter Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label text-light mt-5 display-4">
                Enter Message
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label text-light" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div
        style={{ height: "50vh", width: "100vw", backgroundColor: "#16194F" }}
      >
        {/* <h2 className="text-light text-center py-5">Get In Touch with us!!!</h2> */}

      </div>
    </div>
  );
};

export default Contact;
