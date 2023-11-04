import React, { useState } from "react";
import CogIcon from "@rsuite/icons/legacy/Cog";
import { Link } from "react-router-dom";
import "../../assets/scss/Navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
          <Link to="/" className="navbar-con-title-link">Champika Hardware</Link>
        </div>
        <div className="nav-flex"></div>
        <Nav className="navbar-con-items">
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Dropdown"
            menuVariant="dark"
            className="nav-items"
            show={dropdownOpen}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link to="Items" className="dropdown-item " onClick={handleLinkClick}>Action</Link>
          </NavDropdown>
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
