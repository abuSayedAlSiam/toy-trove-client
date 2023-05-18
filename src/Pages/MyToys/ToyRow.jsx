import React from 'react';

const ToyRow = ({ toy }) => {
    const { _id, toyName, subCategory, sellerName, price, availableQuantity, picture } = toy || "";

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        <div className="text-sm opacity-50">{subCategory}</div>
                    </div>
                </div>
            </td>
            <td>{price}$</td>
            <td>{availableQuantity}</td>
            <td>{sellerName}</td>
            <th>
                <button className="btn btn-success mr-3 btn-xs">Update</button>
                <button className="btn btn-error btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default ToyRow;