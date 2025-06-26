import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../components/ItemCard';

const StudentPage = () => {
    const [items, setItems] = useState([]);

    return (
        <div>
            <div className='Header'>
                <h1>Student Page</h1>
                <h2>See the latest found items below or find the nearest lost and found near you!</h2>
            </div>
            <div className='Item-List'>
                {/* add card and list */}
            </div>
        </div>
    )

}

export default StudentPage