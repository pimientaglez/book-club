import React, { useEffect } from 'react'
import { useAppContext } from '../store/Store'
import { Layout } from '../components/Layout';
import { Book } from '../components/Book';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

export const HomePage = () => {
  const {searchedBooks, getBooksFromFirebase, fireBooks} = useAppContext();

  useEffect(() => {
    getBooksFromFirebase();
  }, []);
  
  const style = {
      width:'70%',
      marginTop:'3em',
      marginBottom:'3em', 
  }
  return (
    <Layout>
        <Container style={style} className='dark className="d-flex justify-content-between align-items-start"'>
            <ListGroup as="ol" numbered>
              {searchedBooks && searchedBooks.map(item => <Book key={item.id} item={item} type="search"/> )}
              {fireBooks && fireBooks.map(item => <Book key={item.id} item={item} type="fire"/> )}
            </ListGroup>
        </Container>
    </Layout>
  )
}
