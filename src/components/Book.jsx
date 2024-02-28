import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Book = ({item}) => {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img 
            variant="top"
            src={item.cover} 
            alt={item.title}
        />
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
                {item.intro}
            </Card.Text>
            <Button variant="primary"><Link to={`/view/${item.id}` } className="nav-link">See book</Link></Button>
        </Card.Body>
    </Card>
  )
}
