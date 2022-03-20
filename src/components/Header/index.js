import React from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="navbar-brand">
            Admin Dashboard
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="d-flex flex-row-reverse"
          >
            <Nav className="mr-auto"></Nav>
            <Nav>
              <NavLink to="/signin" className="nav-link">
                SignIn
              </NavLink>
              <NavLink to="/signup" className="nav-link">
                SignUp
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;