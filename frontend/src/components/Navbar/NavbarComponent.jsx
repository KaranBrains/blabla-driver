import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../images/logo.png";

function NavbarComponent() {
  return (
    <React.Fragment>
      <Navbar
        expand="lg"
        className="nav-background py-2 px-3"
        sticky="top"
        collapseOnSelect={true}
        variant="light"
      >
        <Navbar.Brand href="/" className="mx-0">
          <img src={Logo} alt="logo" className="img-fluid py-0 my-0 logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact to="/" activeClassName="activeNav">
              <Nav.Link
                href="/"
                className="font-demi font-17 px-3 navbar-item
                  text-primaryColor text-center"
              >
                Company
              </Nav.Link>
            </NavLink>
            <NavLink to="/contact" activeClassName="activeNav">
              <Nav.Link
                as={Link}
                to="/contact"
                className="font-demi font-17
                  px-3 navbar-item text-primaryColor text-center"
              >
                Contact Us
              </Nav.Link>
            </NavLink>
            <NavLink to="/login" activeClassName="activeNav">
              <Nav.Link
                href="/login"
                className="font-demi font-17
                  px-3 navbar-item text-primaryColor text-center"
              >
                Login
              </Nav.Link>
            </NavLink>
            <NavLink to="/signup" activeClassName="activeNav">
              <Nav.Link
                href="/login"
                className="font-demi font-17
                  px-3 navbar-item text-primaryColor text-center"
              >
                Signup
              </Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarComponent;
