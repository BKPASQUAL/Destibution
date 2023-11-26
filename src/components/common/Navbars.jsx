import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/Navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

function Navbars() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    // Close the dropdown when a link is clicked
    setDropdownOpen(false);
  };

  return (
    <div>
      <Navbar className="navbar-con">
        <div className="navbar-con-title">
          <Link to="/" className="navbar-con-title-link">
            Champika Hardware
          </Link>
        </div>
        <div className="nav-flex"></div>
        <Nav className="navbar-con-items">
          <Menu>
            <MenuHandler>
              <button>Menu</button>
            </MenuHandler>
            <MenuList >
             <div>sawad</div>
            </MenuList>
          </Menu>
        </Nav>
        <Nav className="navbar-con-items">
          <Link
            to="customerinvoice"
            className="nav-items"
            onClick={handleLinkClick}
          >
            Invoice
          </Link>
        </Nav>
        <Nav className="navbar-con-items">
          <Link to="/" className="nav-items" onClick={handleLinkClick}>
            Home
          </Link>
        </Nav>
        <Nav className="navbar-con-items">
          <Link to="/" className="nav-items" onClick={handleLinkClick}>
            Home
          </Link>
        </Nav>
        <Nav className="navbar-con-items">
          <Link to="/" className="nav-items" onClick={handleLinkClick}>
            Home
          </Link>
          
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navbars;
