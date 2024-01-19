import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './BlogPage.css'
import { useParams } from 'react-router-dom'

const BlogPage = () => {
    const [blogData, setBlogData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://blog-server-ecru.vercel.app/api/post/one/${id}`);
                setBlogData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='blogpage'>
            <h1>{blogData.title}</h1>
            <img src='https://ideausher.com/wp-content/uploads/2024/01/Automation-In-Agriculture-With-App-Development.-Features-Steps-and-Cost.webp' alt='' className='blog_image' />
            <p>
                {blogData.desc}
            </p>
        </div>
    )
}

export default BlogPage