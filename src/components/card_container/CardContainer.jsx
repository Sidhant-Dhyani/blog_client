import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../search/Search';
import Card from '../card/Card';
import Filter from './Filter';
import './CardContainer.css';

const CardContainer = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState({
        tag: '',
    });
    const [sortOption, setSortOption] = useState('');

    const handleFilterChange = (updatedFilters) => {
        setFilters(updatedFilters);
    };

    const updateSearchResult = (result) => {
        setFilteredProducts(result);
    };

    const handleSortChange = (e) => {
        const selectedSort = e.target.value;
        setSortOption(selectedSort);
        sortFilteredProducts(selectedSort, filteredProducts);
    };

    const sortFilteredProducts = (selectedSort, products) => {
        let sortedProducts = [...products];

        if (selectedSort === 'asc') {
            sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        } else if (selectedSort === 'desc') {
            sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        }
        setFilteredProducts(sortedProducts);
    };

    const fetchData = async () => {
        const queryParams = `?tag=${filters.tag}`;
        const url = `https://blog-server-ecru.vercel.app/api/post/all/${queryParams}`;
        try {
            const response = await axios.get(url);
            console.log(response.data);
            const fetchedProducts = response.data;
            setFilteredProducts(fetchedProducts);
            sortFilteredProducts(sortOption, fetchedProducts);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [filters]);

    return (
        <div className="container">
            <div className="filter_container">
                <Search onSearchResultChange={updateSearchResult} />
                <Filter filters={filters} onFilterChange={handleFilterChange} />
                <select
                    className="filter_select"
                    value={sortOption}
                    onChange={handleSortChange}
                >
                    <option value="">Sort</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
            </div>
            <div className="card_container">
                {filteredProducts.map((product, index) => {
                    return <Card key={index} props={product} />;
                })}
            </div>
        </div>
    );
};

export default CardContainer;
