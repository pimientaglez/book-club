import React, { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { useAppContext } from '../store/Store';
import { useParams } from 'react-router-dom';

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
        View
        <h2>{book?.title}</h2>
        <div>{book?.cover? <img src={book.cover} width="400" alt={book.title}/> : '' }</div>
        <div>{book?.author}</div>
        <div>{book?.intro}</div>
        <div>{book?.completed ? 'Leido': 'Por terminar'}</div>
        <div>{book?.review}</div>
    </Layout>
  )
}
