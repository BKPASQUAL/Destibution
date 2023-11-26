import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBars, faLayerGroup, faUserTie , faTruckField ,faUsers , faBuildingColumns ,faStore ,faLocationDot} from "@fortawesome/free-solid-svg-icons";
import "../../assets/scss/Sidebar.css";
import { Link } from "react-router-dom";

function SidebarComp() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(); // Default selection

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <>
      <div className="home-container">
        <Sidebar
          collapsed={collapsed}
          width="250px"
          collapsedWidth="80px"
          transitionDuration={500}
          backgroundColor="#ffffff"
        >
          <Menu>
            <button
              className="login-right-btn btn btn-dark collapse-btn"
              onClick={() => setCollapsed(!collapsed)}
            >
              <FontAwesomeIcon icon={collapsed ? faBars : faBars} />
            </button>
            <Link to="Items" className="sidebar-link">
              <MenuItem
                className={
                  selectedMenuItem === "Items" ? "selected-menu-item" : ""
                }
                icon={<FontAwesomeIcon icon={faLayerGroup} />}
                onClick={() => handleMenuItemClick("Items")}
              >
                Items
              </MenuItem>
            </Link>
            <Link to="Suppliers" className="sidebar-link">
              <MenuItem
                className={
                  selectedMenuItem === "Suppliers" ? "selected-menu-item" : ""
                }
                icon={<FontAwesomeIcon icon={faTruckField} />}
                onClick={() => handleMenuItemClick("Suppliers")}
              >
                Suppliers
              </MenuItem>
            </Link>
            <Link to="customer" className="sidebar-link">
              <MenuItem
                className={
                  selectedMenuItem === "Customer" ? "selected-menu-item" : ""
                }
                icon={<FontAwesomeIcon icon={faUserTie} />}
                onClick={() => handleMenuItemClick("Customer")}
              >
                Customer
              </MenuItem>
            </Link>
            <Link to="bank" className="sidebar-link">
              <MenuItem
                className={
                  selectedMenuItem === "bank" ? "selected-menu-item" : ""
                }
                icon={<FontAwesomeIcon icon={faBuildingColumns} />}
                onClick={() => handleMenuItemClick("bank")}
              >
                Bank
              </MenuItem>
            </Link>
            <Link to="area" className="sidebar-link">
              <MenuItem
                className={
                  selectedMenuItem === "area" ? "selected-menu-item" : ""
                }
                icon={<FontAwesomeIcon icon={faLocationDot} />}
                onClick={() => handleMenuItemClick("area")}
              >
                Area
              </MenuItem>
            </Link>
            <Link to="location" className="sidebar-link">
              <MenuItem
                className={
                  selectedMenuItem === "location" ? "selected-menu-item" : ""
                }
                icon={<FontAwesomeIcon icon={faStore} />}
                onClick={() => handleMenuItemClick("location")}
              >
                Location
              </MenuItem>
            </Link>
            <Link to="user" className="sidebar-link">
              <MenuItem
                className={
                  selectedMenuItem === "user" ? "selected-menu-item" : ""
                }
                icon={<FontAwesomeIcon icon={faUsers} />}
                onClick={() => handleMenuItemClick("user")}
              >
                Users
              </MenuItem>
            </Link>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}
export default SidebarComp;
