import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import coverNotFound from '../img/cover-not-found.png';
import { truncateText } from '../helpers/helper';
import { BookModal } from './BookModal';
import { useAppContext } from '../store/Store';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';


export const Book = ({item, type}) => {
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
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className='ms-2'>
          {
            item.cover ? (
              <img 
                src={item.cover} 
                alt={item.title} 
                style={{cursor:'pointer'}}
                width="70" 
                height="100" 
                onClick={handleShowBook}/>
              ) : (
                <img 
                  src={coverNotFound} 
                  alt="cover not found" 
                  style={{cursor:'pointer'}}
                  width="70" 
                  height="100" 
                  onClick={handleShowBook}/>
              )
          }
        </div>
        <div className="ms-2 me-auto">
          <div className="fw-bold">{truncateText(item.title, 40)}</div>
          <div>
            {item.author}
          </div>
          <div>
          {truncateText(item.intro, 200)}
          </div>
        </div>
        <div className="ms-2 d-flex justify-content-around align-items-center min-vh-10">
        {
          type === 'fire' ? (
            <>
              <Button variant="secondary"><Link to={`/edit/${item.id}`} className="nav-link"><MdEdit /></Link></Button>
              <Button variant="danger" onClick={handleDeleteBook}><MdDelete /></Button>
            </>
          ):(
            <Button variant="primary"><MdAdd /></Button>
          )
        }
        </div>
        <ToastContainer />
      </ListGroup.Item>
      <BookModal book={item} show={showBook} handleShowBook={handleShowBook}/>
    </>
  )
}
