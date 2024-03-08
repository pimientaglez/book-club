import React from 'react'
import { useAppContext } from '../store/Store'
import { Layout } from '../components/Layout';
import { Book } from '../components/Book';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

export const HomePage = () => {
  const {searchedBooks} = useAppContext();
  
  const style = {
      width:'70%',
      marginTop:'3em',
      marginBottom:'3em', 
  }
  return (
    <Layout>
        <Container style={style} className='dark d-flex justify-content-between align-items-start'>
            <ListGroup as="ol" numbered>
              {searchedBooks && searchedBooks.map(item => <Book key={item.id} item={item} type="search"/> )}
            </ListGroup>
        </Container>
    </Layout>
  )
}
