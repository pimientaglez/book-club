import { createContext, useContext, useState } from "react";
import axios from 'axios';
import { convertBook } from "../helpers/helper";

import Container from 'react-bootstrap/Container';
import { collection, getDocs, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from "../firebaseConfig/firebase";

const API_KEY = "AIzaSyDMh7aOmz95oiqtNMvfnXtIJi1jLa-8gnE";
const BASE_API_URL = "https://www.googleapis.com/books/v1/volumes";

const AppContext = createContext({
    items: [],
    createItem: (item) => {},
    getItem: (id) => {},
    updateItem: (item) => {},
});

export default function Store ({children}) {
    const [fireBooks, setFireBooks] = useState([]);
    const [items, setItems] = useState([]);
    const [searchedBooks, setSearchedBooks] = useState([]);

    //get boks from firebase
    const booksCollection = collection(db, 'books');

    const getBooksFromFirebase = async() => {
        const data = await getDocs(booksCollection);
        setFireBooks(
            data.docs.map(doc => (
                {...doc.data(), id:doc.id}
            ))
        );
    }

    const createItem = (item) => {
        const temp = [...items, item];
        setItems(temp);
    }
    const getItem = (id) => {
        const item = items.find(item => item.id === id);
        return item;
    }
    const updateItem = (item) => {
        const index = items.findIndex(i => i.id === item.id);
        const temp = [...items];
        temp[index] = {...item};
        setItems(temp);
    }

    const fetchBooks = async(query='') => {
        try {
            const response = await axios.get(`${BASE_API_URL}?q=${query}&key?${API_KEY}`);
            console.log(response.data);
            const parsedBooks = response.data.items.map(book => convertBook(book) )
            setSearchedBooks(parsedBooks);
          } catch (error) {
            console.error("There has been an error: "+error);
          }
    }

    return (
        <AppContext.Provider 
            value={{
                items,
                searchedBooks,
                createItem,
                getItem,
                updateItem,
                fetchBooks,
                getBooksFromFirebase,
                fireBooks,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}