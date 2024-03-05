import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import coverNotFound from '../img/cover-not-found.png';
import { truncateText } from '../helpers/helper';
import { BookModal } from './BookModal';
import { useAppContext } from '../store/Store';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';


export const Book = ({item}) => {
  const [showBook, setShowBook] = useState(false);
  const { deleteBookFromFirebase } = useAppContext();
  const handleShowBook = (option) => {
    setShowBook(option);
  }
  const handleDeleteBook = (option) => {
    deleteBookFromFirebase(item.id);
    toast.success(`Book: ${item.title} successfully deleted`, {
      position: "top-center"
    });
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
              <Button variant="secondary"><Link to={`/edit/${item.id}`} className="nav-link"><MdEdit />Edit book</Link></Button>
              <Button variant="danger" onClick={handleDeleteBook}><MdDelete />Delete book</Button>
          </Card.Body>
          <ToastContainer />
      </Card>
      <BookModal book={item} show={showBook} handleShowBook={handleShowBook}/>
    </>
  )
}
