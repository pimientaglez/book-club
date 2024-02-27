import React from 'react'
import { useAppContext } from '../store/Store'
import { Layout } from '../components/Layout';
import { Book } from '../components/Book';

export const HomePage = () => {
    const {items} = useAppContext();
  return (
    <Layout>
        {items.map(item => <Book key={item.id} item={item}/> )}
    </Layout>
  )
}
