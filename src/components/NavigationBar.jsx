import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaRegBookmark } from "react-icons/fa6";

export const NavigationBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
    <Container>
      <FaRegBookmark />{''}
      <Navbar.Brand>Book-App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home"><Link to="/" className="nav-link">Home</Link></Nav.Link>
          <Nav.Link href="#link"><Link to="/create" className="nav-link">Create</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}
