import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import coverNotFound from '../img/cover-not-found.png';
import { truncateText } from '../helpers/helper';

export const Book = ({item}) => {
  return (
    <Card style={{ width: '18rem' }}>
        {
          item.cover? (
            <Card.Img 
                variant="top"
                src={item.cover} 
                alt={item.title}
                className="card-cover"
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
            <Card.Title className="card-title">
              {truncateText(item.title, 50)}
            </Card.Title>
            <Card.Text className="card-description">
                {truncateText(item.intro, 100)}
            </Card.Text>
            <Button variant="primary"><Link to={`/view/${item.id}` } className="nav-link">See book</Link></Button>
        </Card.Body>
    </Card>
  )
}
