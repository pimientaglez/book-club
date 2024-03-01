import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaRegBookmark } from "react-icons/fa6";

export const NavigationBar = () => {
  return (
    <Navbar bg="light" data-bs-theme="light" expand="lg" className="bg-body-tertiary pt-3 pb-3">
    <Container>
      <FaRegBookmark />{''}
      <Navbar.Brand>Book-App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/create" className="nav-link">Create</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}
