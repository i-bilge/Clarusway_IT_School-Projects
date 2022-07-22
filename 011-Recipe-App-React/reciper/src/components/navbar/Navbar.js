import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
          <Navbar.Brand>RECIPER</Navbar.Brand>
        <Nav defaultActiveKey="/" as="ul">
          <Nav.Item as="li">
            <Link to="/" className="nav-link">
              
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/about" className="nav-link">
              
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/details" className="nav-link">
              
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/login" className="nav-link">
              
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
