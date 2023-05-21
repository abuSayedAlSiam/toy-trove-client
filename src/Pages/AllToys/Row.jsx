import React from 'react';
import { Link } from 'react-router-dom';

const Row = ({ toy, index }) => {
    const { _id, sellerName, toyName, subCategory, price, availableQuantity, picture } = toy || "";
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="mask mask-squircle w-12 h-12 mx-auto">
                    <img src={picture} />
                </div>
            </td>
            <td>{toyName}</td>
            <td>{sellerName}</td>
            <td>{subCategory}</td>
            <td>{price}$</td>
            <td>{availableQuantity} items in stock</td>
            <td>
                <Link to={`/toy/${_id}`}>
                    <button className="btn btn-primary text-white w-full">View Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default Row;