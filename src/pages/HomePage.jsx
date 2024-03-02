import React, { useEffect } from 'react'
import { useAppContext } from '../store/Store'
import { Layout } from '../components/Layout';
import { Book } from '../components/Book';
import Container from 'react-bootstrap/Container';

/* import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal); */

export const HomePage = () => {
  const {items, searchedBooks, getBooksFromFirebase, fireBooks} = useAppContext();

  useEffect(() => {
    getBooksFromFirebase();
  });
  
  const style = {
      width:'70%',
      marginTop:'3em',
      marginBottom:'3em', 
      display:'grid', 
      gridTemplateColumns:'repeat(4,1fr)', 
      gridColumnGap: '2em', 
      gridRowGap: '2em',
  }
  return (
    <Layout>
        <Container style={style} className='dark'>
            {items.length > 0 && items.map(item => <Book key={item.id} item={item}/> )}
            {searchedBooks && searchedBooks.map(item => <Book key={item.id} item={item}/> )}
            {fireBooks && fireBooks.map(item => <Book key={item.id} item={item}/> )}
        </Container>
    </Layout>
  )
}
