import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import './Card.css'
const Card = ({ props }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/${props.title}/${props._id}`);
    }
    return (
        <div className='card'>
            <img src="https://ideausher.com/wp-content/uploads/2024/01/Automation-In-Agriculture-With-App-Development.-Features-Steps-and-Cost.webp" alt="" />
            <div className='post_info'>
                <p className='title'>{props.title}</p>
                <div className='icon'>
                    <IoPersonSharp />
                    <p>By {`${props.author}`}</p>
                </div>
                <button className='read_button' onClick={handleClick}>Read Blog</button>
            </div>

        </div>
    )
}

export default Card;
