import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaRegBookmark } from "react-icons/fa6";
import { useAppContext } from '../store/Store';

export const NavigationBar = () => {
  const {fetchBooks} = useAppContext();
  const [query, setQuery] = useState('');

  const handleSearchQuery = (e) => {
    if (e.key === 'Enter') {
      fetchBooks(query);
      setQuery('');
    } else {
      setQuery(e.target.value);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks(query);
  }
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
      <Form onSubmit={(e)=>{handleSubmit(e)}}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={query}
              onChange={handleSearchQuery}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" variant="secondary">Search</Button>
          </Col>
        </Row>
      </Form>
    </Container>
    </Navbar>
  )
}
