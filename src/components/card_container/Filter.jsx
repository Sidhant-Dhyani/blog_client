import React from 'react'
import './Filter.css'

const Filter = ({ filters, onFilterChange }) => {
    const { tag } = filters;

    const handleInputChange = (field, value) => {
        onFilterChange({
            ...filters,
            [field]: value,
        });
    };

    return (
        <div className='filter'>
            <select
                className="filter_select"
                value={tag}
                type="select"
                onChange={(e) => handleInputChange("tag", e.target.value)}
            >
                <option value="">Select Category</option>
                <option value="65a8cb433bb782a34a2139cb">Javascript</option>
                <option value="65a8cb433bb782a34a2139cc">Web Development</option>
                <option value="65a8cb433bb782a34a2139cd">FrontEnd</option>
                <option value="65a8cb433bb782a34a2139ce">Backend</option>
                <option value="65a8cb433bb782a34a2139cf">Nodejs</option>
                <option value="65a8cb433bb782a34a2139cd">React</option>
            </select>
        </div>
    )
}

export default Filter