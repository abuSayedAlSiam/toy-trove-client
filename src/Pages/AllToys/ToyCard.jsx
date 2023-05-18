import React from 'react';
import { Link } from 'react-router-dom';

const ToyCard = ({ toy }) => {
    const { _id, toyName, category, price, availableQuantity, picture } = toy || "";
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={picture} alt="toy" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{toyName}</h2>
                <p>Catefory: {category}</p>
                <p>Price: {price} $</p>
                <p>Available Quantity: {availableQuantity}</p>
                <div className="card-actions">
                    <Link to={`/toy/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;