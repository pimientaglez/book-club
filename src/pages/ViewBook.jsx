import React, { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { useAppContext } from '../store/Store';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { FcCheckmark } from "react-icons/fc";
import { TbProgress } from "react-icons/tb";


export const ViewBook = () => {
    const [book, setBook] = useState({});
    const {getItem} = useAppContext();
    const params = useParams();
    
    useEffect(() => {
        setBook(getItem(params.id));
    }, []);
    if (!book) {
        return <div>Item not found</div>
    }
    return (
    <Layout>
        <Container style={{width:'50%', marginTop:'3em', marginBottom:'3em', display: 'flex'}}>
            <div>
                {book?.cover? <img src={book.cover} width="400" alt={book.title}/> : '' }
            </div>
            <div className="ms-4">
                <h2>{book?.title}</h2>
                <div><span className="fs-5">Author: </span><span>{book?.author}</span></div>
                <div>{book?.intro}</div>
                <div>{book?.completed ? <div><FcCheckmark/> Completed</div>: <div><TbProgress/> Completed</div>}</div>
                <div><span className="fs-5">Review: </span><span>{book?.review}</span></div>
            </div>

        </Container>
        
    </Layout>
  )
}
