import React, { useEffect } from 'react';
import axios from 'axios';
import './home.css'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/post')
    }
    useEffect(() => {
        const fetchResponse = async () => {
            try {
                const response = await axios.get('/home');
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchResponse();
    }, []);

    return (
        <>
        <button onClick={handleClick}>Add a post</button>
            <p>Hello</p>
        </>
    );
}
