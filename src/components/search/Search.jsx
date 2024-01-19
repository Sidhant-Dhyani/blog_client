
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Search.css'

const Search = ({ onSearchResultChange }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchClick = async () => {
        try {
            const response = await axios.get(`https://blog-server-ecru.vercel.app/api/post/search?keywords=${searchTerm}`);
            onSearchResultChange(response.data);
            setSearchTerm('');
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };
    return (
        <div className='search'>
            <input type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className='cisearch' onClick={handleSearchClick}>Search</button>
        </div>
    )
}

export default Search;