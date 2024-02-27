import React, { useState } from 'react'
import {useAppContext} from '../store/Store';
import { Layout } from '../components/Layout';
import { useNavigate } from 'react-router-dom';

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

    return (
    <Layout>
        <form onSubmit={handleSubmit}>
            <div>
                <div>Title</div>
                <input 
                    type="text" 
                    name="title" 
                    onChange={handleChange} 
                    value={title}
                />
            </div>
            <div>
                <div>Author</div>
                <input 
                    type="text" 
                    name="author" 
                    onChange={handleChange} 
                    value={author}
                />
            </div>
            <div>
                <div>Cover</div>
                <input 
                    type="file" 
                    name="cover" 
                    onChange={handleChangeFile} 
                />
                <div>{!!cover ? <img src={cover} width="200px" alt="preview"/> : ""}</div>
            </div>
            <div>
                <div>Intro</div>
                <input 
                    type="text" 
                    name="intro" 
                    onChange={handleChange} 
                    value={intro}
                />
            </div>
            <div>
                <div>Completed</div>
                <input 
                    type="checkbox" 
                    name="completed" 
                    onChange={handleChange} 
                    value={completed}
                />
            </div>
            <div>
                <div>Review</div>
                <input 
                    type="text" 
                    name="review" 
                    onChange={handleChange} 
                    value={review}
                />
            </div>
            <div>
                <input type="submit" value="Register Book" />
            </div>
        </form>
    </Layout>
  )
}
