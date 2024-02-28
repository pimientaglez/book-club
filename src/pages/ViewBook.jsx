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
                <h2 className="text-white">{book?.title}</h2>
                <div><span className="fs-5 text-white">Author: </span><span className="text-white">{book?.author}</span></div>
                <div className="text-white">{book?.intro}</div>
                <div>{book?.completed ? <div className="text-white"><FcCheckmark/> Completed</div>: <div className="text-white"><TbProgress/> Reading...</div>}</div>
                <div><span className="fs-5 text-white">Review: </span><span className="text-white">{book?.review}</span></div>
            </div>

        </Container>
        
    </Layout>
  )
}
