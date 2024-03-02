import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import coverNotFound from '../img/cover-not-found.png';

export const Book = ({item}) => {
  return (
    <Card style={{ width: '18rem' }}>
        {
          item.cover? (
            <Card.Img 
                variant="top"
                src={item.cover} 
                alt={item.title}
                className="cover-book"
            />
          ) : (
            <Card.Img 
                variant="top"
                src={coverNotFound}
                alt="cover not found"
            />
          )
        }
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
                {item.intro? (item.intro.length > 100 ? `${item.intro.substring(0, 99)}...`: item.intro) : ''}
            </Card.Text>
            <Button variant="primary"><Link to={`/view/${item.id}` } className="nav-link">See book</Link></Button>
        </Card.Body>
    </Card>
  )
}
