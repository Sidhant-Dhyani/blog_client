
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CiSearch } from "react-icons/ci";
import './Search.css'

const Search = ({ onSearchResultChange }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchClick = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/post/search?keywords=${searchTerm}`);
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
            <CiSearch className='cisearch' onClick={handleSearchClick} />
        </div>
    )
}

export default Search;