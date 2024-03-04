import React, { useEffect, useState } from 'react'
import { Layout } from '../components/Layout';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useAppContext } from '../store/Store';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export const EditBook = () => {
    const { getBookByIdFromFirebase,updateBookByIdFromFirebase, fireBook } = useAppContext();
    const [book, setBook] = useState({});

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        getBookByIdFromFirebase(params.id);
        setBook(fireBook);
    }, [])
    
    const style = {
        width:'50%', 
        marginTop:'3em', 
        marginBottom:'3em',
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setBook({...book, [name]: value})
    }
    const handleChangeFile = (e) => {
        const element = e.target;
        const file = element.files[0];
        const reader = new FileReader();
        
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setBook({...book, 'cover': reader.result.toString()})
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedBook = {...book, id: params.id}
        updateBookByIdFromFirebase(updatedBook);
        toast.success(`Book ${book.title} updated successfully`, {
            position: 'top-right'
        })
        setTimeout(() => {
            navigate('/lists')
        }, 3500);
    }

    return (
    <Layout>
        <ToastContainer/>
        {
        <Container style={style} >
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label className="text-white">Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="title" 
                        onChange={handleChange}
                        value={book.title} 
                        placeholder="Enter book title" 
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label className="text-white">Author</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="author" 
                        onChange={handleChange}
                        value={book.author}
                        placeholder="Enter book author" 
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label className="text-white">File</Form.Label>
                    <Form.Control 
                        type="file" 
                        name="cover" 
                        onChange={handleChangeFile}
                    />
                    <div>{!!book.cover ? <img src={book.cover} width="200px" alt="preview"/> : ""}</div>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label className="text-white">Intro</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="intro" 
                        onChange={handleChange}
                        value={book.intro} 
                        placeholder="Enter book intro" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                        type="checkbox" 
                        name="completed" 
                        className="text-white"
                        onChange={handleChange}
                        value={book.completed}
                        label="Check completed" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label className="text-white">Review</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="review" 
                        onChange={handleChange}
                        value={book.review}
                        placeholder="Enter book review" />
                </Form.Group>
                <Button variant="primary" type="submit" value="Register Book">
                    Save
                </Button>
            </Form>
        </Container>
        }
    </Layout>
  )
}
