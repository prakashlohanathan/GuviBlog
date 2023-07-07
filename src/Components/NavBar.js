import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">GUVI Blog</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/FullstackDeveloper">Full Stack Development</Nav.Link>
            <Nav.Link as={Link} to="/datascience">Data Science</Nav.Link>
            <Nav.Link as={Link} to="/cybersecurity">CyberSecurity</Nav.Link>
            <Nav.Link as={Link} to="/career">Career</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
