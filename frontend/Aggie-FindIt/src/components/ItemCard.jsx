import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({Catagory, Building, Time}) => {
    return (
        <div className="ItemCard-Container">
            <h2>Catagory: {Catagory}</h2>
            <h2>Building: {Building}</h2>
            <h2>Found at: {time}</h2>
        </div>
    )
}

export default ItemCard;