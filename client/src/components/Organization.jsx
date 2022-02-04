import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}
const __DEV__ = document.domain === "localhost";
// underdevelopment

const Organization = () => {
  const navigate = useNavigate();
  const params = useParams();

  const paramName = params.name;
  console.log(paramName);
  const [user, setUser] = useState({
    name: "",
    email: "",
    amountDonated: 0,
    organization: paramName,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const getData = async () => {
    const response = await fetch(`/organization/:${paramName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
    const response = await fetch(`/organization/:${paramName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    // console.log(data);
  };

  const [name, setName] = useState("");
 

  async function displayRazorpay(e) {
    e.preventDefault();
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const getData = await fetch("/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await getData.json();
    setUser({
      name: "",
      email: "",
      amountDonated: 0,
      organization: paramName,
    });

    const options = {
      key: __DEV__ ? process.env.REACT_APP_KEY : "PRODUCTION_KEY",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: paramName,
      description: "Thank you for your Donation!!!",
      image: "./images/logo.svg",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: data.name,
        email: "yashn0237@gmail.com",
        phone_number: "9898989898",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflowX: "hidden",
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/logindemo-2e936.appspot.com/o/BG.png?alt=media&token=39987a83-228b-4390-86fb-2dc1acdccdbe')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        fontFamily: "Titillium Web, sans-serif",
      }}
    >
      {/* <h1>Organization</h1> */}
      <div className="container-fluid border border-dark">
        <img
          height="550px"
          width="100%"
          // className="img-fluid"
          src="https://images.unsplash.com/photo-1494832944834-a08818c634b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
          alt="..."
        />
      </div>

      <div className="container border mt-5 border-white w-50 border-5 text-center">
        <h1>{paramName}</h1>
        {/* <p>Organization Description</p> */}
        <h3>
          <strong>
            {Math.floor(Math.random() * 100 + 150)} people have already donated
          </strong>
        </h3>
      </div>

      <div className="container d-flex justify-content-center mt-5 mb-5 ">
        <div
          className="card border border-dark border-3"
          style={{ width: "25rem" }}
        >
          <div className="card-body text-center">
            <h3 className="card-title">
              <strong>Donations</strong>
            </h3>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="container  text-dark d-flex justify-content-center  ">
              <form onSubmit={handleSubmit} className="w-75 rounded-lg ">
                <div className="mb-1">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    <strong>Name</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control border border-dark"
                    id="exampleInputEmail1"
                    name="name"
                    value={user.name}
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-1">
                  <label htmlFor="exampleInputEmail1" className="form-label ">
                    <strong>Email address</strong>
                  </label>
                  <input
                    type="email"
                    className="form-control border border-dark"
                    id="exampleInputEmail1"
                    name="email"
                    value={user.email}
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-1">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    <strong>I will donate</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control border border-dark"
                    id="exampleInputEmail1"
                    name="amountDonated"
                    value={user.amountDonated}
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
            <a
              onClick={displayRazorpay}
              target="_blank"
              rel="noopener noreferrer"
              type="submit"
              className="btn btn-md btn-primary px-5 mt-3"
              name="submit"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization;
