import React from 'react';
import { Link } from 'react-router-dom';

const ToyCard = ({ toy }) => {
    const { _id, toyName, subCategory, price, availableQuantity, picture } = toy || "";
    // console.log(toy);
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={picture} alt="toy" className="rounded-xl h-36" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{toyName}</h2>
                <p>Category: {subCategory}</p>
                <p>Price: <span className='font-bold'>{price} $</span></p>
                <p>Available Quantity: {availableQuantity}</p>
                <div className='w-full'>
                    <Link to={`/toy/${_id}`}>
                        <button className="btn btn-primary text-white w-full">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;