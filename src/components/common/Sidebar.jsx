import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBars,
  faLayerGroup
} from "@fortawesome/free-solid-svg-icons";
import "../../assets/scss/Sidebar.css";
import { Link, Outlet } from "react-router-dom";

function SidebarComp() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("Items"); // Default selection

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
            <Link to="" className="sidebar-link">
              <MenuItem
                className={
                  selectedMenuItem === "allPatients" ? "selected-menu-item" : ""
                }
                icon={<FontAwesomeIcon icon={faBed} />}
                onClick={() => handleMenuItemClick("allPatients")}
              >
                All Patients
              </MenuItem>
            </Link>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}
export default SidebarComp;