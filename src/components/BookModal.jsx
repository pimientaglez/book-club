import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import { FcCheckmark } from "react-icons/fc";
import { TbProgress } from "react-icons/tb";
import coverNotFound from '../img/cover-not-found.png';

export const BookModal = ({book, show, handleShowBook}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(show);
    }, [show])
    

    return (
        <>    
          <Modal
            variant="primary"
            show={visible}
            onHide={() => handleShowBook(false)}
            dialogClassName="modal-book"
          >
            <Modal.Header closeButton>
              <Modal.Title className="text-white">
                {`${book.title} - ${book.author}`}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container className="modal-book-container">
                    <div>
                        {book?.cover? <img src={book.cover} width="400" alt={book.title}/> :  <img src={coverNotFound} width="400" alt='cover not found'/>}
                    </div>
                    <div className="ms-4">
                        <h2 className="text-white mb-4">{book?.title}</h2>
                        <div className="mb-2"><span className="fs-5 text-white">Author: </span><span className="text-white">{book?.author}</span></div>
                        <div className="text-white mb-2">{book?.intro}</div>
                        <div>{book?.completed ? <div className="text-white"><FcCheckmark/> Completed</div>: <div className="text-white"><TbProgress/> Reading...</div>}</div>
                        { book.review ? (<div><span className="fs-5 text-white mb-2">Review: </span><span className="text-white">{book?.review}</span></div>) : '' }
                    </div>
                </Container>
            </Modal.Body>
          </Modal>
        </>
      );
}
