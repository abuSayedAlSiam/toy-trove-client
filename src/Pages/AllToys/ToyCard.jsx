import React from 'react';

const ToyCard = ({toy}) => {
    const {_id, toyName, category, price, availableQuantity, picture} = toy || "";
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="toy" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{toyName}</h2>
                <p>Catefory: {category}</p>
                <p>Price: {price} $</p>
                <p>Available Quantity: {availableQuantity}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;