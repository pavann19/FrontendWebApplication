import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { FaBars } from 'react-icons/fa'; // Import FaBars icon
import "./Nav.css";

const Nav = ({ handleInputChange, query, cartCount, toggleSidebar }) => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo-container">
          <h1>TeeRex Store</h1>
        </div>
        <div className="search-container">
          <div className="Home">
          <Link to="/" className="Home-link">
            <MdHomeFilled className="Home-btn" />
          </Link>
          </div>
          
          <input
            className="search-input"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Enter your search shoes."
          />
          <Link>
              <IoSearchOutline className="nav-icons search-icon" />
            </Link>
            <div className="cart-container">
              <Link to="/cart">
              <BsCart className="nav-icons cart-icon" />
              {/*{cartCount > 0 && <span className="cart-count">{cartCount}</span>}*/}
          </Link>
        </div>
        </div>
        
        <div className="total">
          <h3 className="total-cart">Total: {cartCount}</h3>
        </div>
        <button className="toggle-button" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
