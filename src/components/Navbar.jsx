import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';


function Navbar() {
  const location = useLocation();
  // const isLightBg = location.pathname === "/" || location.pathname === "/about";
  const isLightBg = location.pathname==="/about"

  return (
     <>
      <nav className={`navbar ${isLightBg ? "light-bg" : ""}`} style={{position: "relative"}}>
      <div className="navbar-container" style={{ display: 'flex', justifyContent: '', alignItems: 'center',padding:"10px 20px"}}>
        <h1 className="navbar-title" ></h1>
        <ul className="navbar-links" style={{ display: 'flex',fontSize:"18px", justifyContent: 'space-between', alignItems: 'center', listStyle:"none", textDecoration:"none", marginTop:"10px" }}>
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/services" activeClassName="active" style={{marginLeft:"60px", marginRight:"0px"}}>Services</NavLink></li>
          <li><a href="#">Blog</a></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>

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
