import React from 'react'
import { useAppContext } from '../store/Store'
import { Layout } from '../components/Layout';
import { Book } from '../components/Book';
import Container from 'react-bootstrap/Container';

export const HomePage = () => {
    const {items} = useAppContext();
  return (
    <Layout>
        <Container style={{width:'70%', marginTop:'3em', marginBottom:'3em', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gridColumnGap: '2em', gridRowGap: '2em' }}>
            {items.map(item => <Book key={item.id} item={item}/> )}
        </Container>
    </Layout>
  )
}
