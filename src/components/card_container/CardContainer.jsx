import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from '../search/Search'
import Card from '../card/Card'
import Filter from './Filter'
import './CardContainer.css'

const CardContainer = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);

    const [filters, setFilters] = useState({
        tag: "",
    });
    const handleFilterChange = (updatedFilters) => {
        setFilters(updatedFilters);
    };
    const updateSearchResult = (result) => {
        setFilteredProducts(result);
    };

    useEffect(() => {
        const fetchData = async () => {
            const queryParams = `?tag=${filters.tag}`
            const url = `http://localhost:4000/api/post/all/${queryParams}`;
            try {
                const response = await axios.get(url);
                console.log(response.data);
                const fetchedProducts = response.data;
                setFilteredProducts(fetchedProducts);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [filters]);

    return (
        <div className='container'>
            <div className='filter_container'>
                <Search onSearchResultChange={updateSearchResult} />
                <Filter filters={filters} onFilterChange={handleFilterChange} />
            </div>
            <div className='card_container'>
                {filteredProducts.map((product, index) => {
                    return <Card key={index} props={product} />;
                })}
            </div>
        </div>
    )
}

export default CardContainer;