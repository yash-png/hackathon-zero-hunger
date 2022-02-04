import React, { useState } from "react";

const Register = () => {
  const [organization, setOrganization] = useState({
    name: "",
    email: "",
    phoneNumber: 0,
    password: "",
    location: "",
    upiID: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrganization({
      ...organization,
      [name]: value,
    });
  };
  const getData = async (e) => {
    e.preventDefault();
    const response = await fetch("/register", {
      method: "POST",
      body: JSON.stringify(organization),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      credentials: "include"
    });
    const data = await response.json();
    console.log(data);
    setOrganization({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        location: "",
        upiID: "",
        });
  };
  return (
    <div style={{ height: "100vh", width: "100vw", overflow: "hidden", background:"#F2F6FF" }}>
      <h2 className="text-center mt-5 text-primary">Register organization</h2>
      <div className="container bg-dark text-warning d-flex justify-content-center w-50 mt-3">
        <form onSubmit={getData} className="w-75 p-3 rounded-lg mt-1">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="name"
              value={organization.name}
              aria-describedby="emailHelp"
              placeholder="Enter your Name 🧔‍♂️/👩‍🦰"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              value={organization.email}
              aria-describedby="emailHelp"
              placeholder="Enter your Email 📧"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputEmail1"
              name="password"
              value={organization.password}
              aria-describedby="emailHelp"
              placeholder="Enter your Password 🔒"
              onChange={handleChange}   
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="phoneNumber"
              value = {organization.phoneNumber}
              aria-describedby="emailHelp"
              placeholder="Enter your Phone Number 📱"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              location
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="location"
              value = {organization.location}
              aria-describedby="emailHelp"
              placeholder="Enter your Location 📍"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              UPI ID
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="upiID"
              value={organization.upiID}
              aria-describedby="emailHelp"
              placeholder="Enter your UPI ID"
              onChange={handleChange}
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-4" name="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
