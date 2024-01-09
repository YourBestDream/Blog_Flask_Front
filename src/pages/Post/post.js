import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Post() {
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postCategory, setPostCategory] = useState('');
    const [postTags, setPostTags] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchCategoriesAndTags = async () => {
            try {
                const categoriesResponse = await axios.get('/categories');
                setCategories(categoriesResponse.data);

                const tagsResponse = await axios.get('/tags');
                setTags(tagsResponse.data);
            } catch (error) {
                console.error('Error fetching categories and tags:', error);
            }
        };

        fetchCategoriesAndTags();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const postData = {
            title: postTitle,
            content: postContent,
            category: postCategory,
            tags: postTags
        };

        try {
            const response = await axios.post('/post', postData);
            console.log(response.data);
            // Handle success (clear form, show message, etc.)
            setPostTitle('');
            setPostContent('');
            setPostCategory('');
            setPostTags([]);
        } catch (error) {
            console.error('Error adding post:', error);
            // Handle error
        }
    };

    const handleTagChange = (event) => {
        const selectedTags = Array.from(event.target.selectedOptions, option => option.value);
        setPostTags(selectedTags);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                placeholder="Post Title"
                required
            />
            <textarea 
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="Write your post here"
                required
            />
            <select 
                value={postCategory}
                onChange={(e) => setPostCategory(e.target.value)}
                required
            >
                <option value="">Select a category</option>
                {categories.map(category => (
                    <option key={category.id} value={category.name}>{category.name}</option>
                ))}
            </select>
            <select 
                multiple
                value={postTags}
                onChange={handleTagChange}
            >
                {tags.map(tag => (
                    <option key={tag.id} value={tag.name}>{tag.name}</option>
                ))}
            </select>
            <button type="submit">Add Post</button>
        </form>
    );
}