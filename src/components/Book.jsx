import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import coverNotFound from '../img/cover-not-found.png';
import { truncateText } from '../helpers/helper';
import { BookModal } from './BookModal';

export const Book = ({item}) => {
  const [showBook, setShowBook] = useState(false);
  const handleShowBook = (option) => {
    setShowBook(option);
  }
  return (
    <>
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
                {truncateText(item.title, 40)}
              </Card.Title>
              <Card.Text className="card-description">
                  {truncateText(item.intro, 100)}
              </Card.Text>
              <Button variant="primary" onClick={handleShowBook}>See book</Button>
          </Card.Body>
      </Card>
      <BookModal book={item} show={showBook} handleShowBook={handleShowBook}/>
    </>
  )
}
