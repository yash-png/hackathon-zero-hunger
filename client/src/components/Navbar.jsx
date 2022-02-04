import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    const fontStyle={
        fontFamily:"Rochester,cursive",
        fontSize:"3rem",
        marginRight:"3px"
    }
    const fontStyle1={
        fontFamily:"Rochester,cursive",
        fontSize:"2rem",
        marginRight:"5px"
    }
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={fontStyle}>Satiate |</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/"  style={fontStyle1}>Home</a>
        <a className="nav-link" href="/about" style={fontStyle1}>About Us</a>
        <a className="nav-link" href="/contact" style={fontStyle1}>Contact Us</a>
      </div>
    </div>
    <Link
    to="/register"
    style={{background:"#F44E77"}}
    className="btn px-3 py-2 my-2 my-sm-0 text-light rounded-3" type="submit">Register Organization</Link>
  </div>
</nav>

    </div>
  )
};

export default Navbar;
