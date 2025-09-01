import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


function Navbar() {
  return (
     <>
      <nav className="navbar" style={{position: "relative"}}>
      <div className="navbar-container" style={{ display: 'flex', justifyContent: '', alignItems: 'center',padding:"10px 20px"}}>
        <h1 className="navbar-title" ></h1>
        <ul className="navbar-links" style={{ display: 'flex',fontSize:"18px", justifyContent: 'space-between', alignItems: 'center', listStyle:"none", textDecoration:"none", marginTop:"10px" }}> 
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services" style={{marginLeft:"60px", marginRight:"0px"}}>Services</Link></li>
          <li><a href="#">Blog</a></li>
          <li><a href="/contact">Contact</a></li>         

        </ul>
        <ul style={{display:"flex", flexDirection:"row",gap:"30px", listStyle:"none"}}>

          <li className="cart-hold"></li>
         <li className="search-hold"></li>

         

        </ul>



      </div>
    </nav>
   
      </>
  )
}

export default Navbar;
