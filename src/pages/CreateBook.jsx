import React, { useState } from 'react'
import {useAppContext} from '../store/Store';
import { Layout } from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

export const CreateBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [cover, setCover] = useState("");
    const [intro, setIntro] = useState("");
    const [completed, setCompleted] = useState(false);
    const [review, setReview] = useState("");

    const {createItem} = useAppContext();
    const navigate = useNavigate();
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        switch (name) {
            case "title": 
                setTitle(value);
                break;
            case "author": 
                setAuthor(value);
                break;
            case "intro": 
                setIntro(value);
                break;
            case "completed": 
                setCompleted(e.target.checked);
                break;
            case "review": 
                setReview(value);
                break;
            default:
        }
    }
    const handleChangeFile = (e) => {
        const element = e.target;
        const file = element.files[0];
        const reader = new FileReader();
        
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setCover(reader.result.toString());
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBook = {
            id: crypto.randomUUID(),
            title,
            author,
            cover,
            intro,
            completed,
            review,
        }
        createItem(newBook);
        navigate("/");
    }

    const style = {
        width:'50%', 
        marginTop:'3em', 
        marginBottom:'3em',
    }

    return (
    <Layout>
        <Container style={style} >
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="title" 
                        onChange={handleChange} 
                        value={title} 
                        placeholder="Enter book title" 
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Author</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="author" 
                        onChange={handleChange} 
                        value={author}
                        placeholder="Enter book author" 
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>File</Form.Label>
                    <Form.Control 
                        type="file" 
                        name="cover" 
                        onChange={handleChangeFile}  
                    />
                    <div>{!!cover ? <img src={cover} width="200px" alt="preview"/> : ""}</div>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Intro</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="intro" 
                        onChange={handleChange} 
                        value={intro} 
                        placeholder="Enter book intro" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                        type="checkbox" 
                        name="completed" 
                        onChange={handleChange} 
                        value={completed}
                        label="Check completed" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Review</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="review" 
                        onChange={handleChange} 
                        value={review}
                        placeholder="Enter book review" />
                </Form.Group>
                <Button variant="primary" type="submit" value="Register Book">
                    Submit
                </Button>
            </Form>
        </Container>
    </Layout>
  )
}
