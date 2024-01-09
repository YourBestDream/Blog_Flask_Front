import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css'
import Card from '../../modules/Card/card';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [posts,setPosts] = useState([])
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/post')
    }
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/posts-retrieve');

                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
        <button onClick={handleClick}>Add a post</button>
            <p>Hello</p>
        <div className='post-container'>
            {posts.map(post => (
                <Card key={post.id} photo={'/python3.12.png'} title={post.title} text={post.content} date={post.date} />
            ))}
        </div>
        </>
    );
}
