import { rankings } from 'match-sorter';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateToy = () => {
    const toy = useLoaderData();
    const {
        _id, toyName, price, picture, sellerEmail, sellerName, availableQuantity, subCategory, ratings, toyDetails
    } = toy || "";

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const price = form.price.value; 
        const picture = form.picture.value; 
        const sellerName = form.sellerName.value; 
        const sellerEmail = form.sellerEmail.value; 
        const availableQuantity = form.availableQuantity.value; 
        const subCategory = form.subCategory.value; 
        const ratings = form.ratings.value; 
        const toyDetails = form.toyDetails.value;

        console.log(toyName, price, picture, sellerEmail, subCategory, sellerName, availableQuantity, ratings, toyDetails)

        const toyData = {
            toyName, price, picture, sellerEmail, sellerName, availableQuantity, subCategory, ratings, toyDetails
        }

        // update to the server 

        fetch(`http://localhost:5000/updateToy/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify(toyData)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }

    return (
        <div className='w-10/12 mx-auto'>
            <h2 className='text-center text-4xl font-bold mt-3 mb-8'>Update Toy <span className='text-primary'>({toyName})</span></h2>
            {/* all code here  */}

            <form onSubmit={handleSubmit} className="w-9/12 mx-auto p-4 bg-gray-100 shadow-md rounded-md">
                <div className='flex justify-between gap-4'>
                    <div className="mb-4 w-full">
                        <label className="text-gray-700 font-semibold">Toy Name:</label>
                        <input type="text" name="toyName" defaultValue={toyName} required
                            className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="mb-4 w-full">
                        <label className="text-gray-700 font-semibold">Price:</label>
                        <input type="text" name="price" defaultValue={price} required
                            className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-gray-700 font-semibold">Image URL:</label>
                    <input type="text" name="picture" defaultValue={picture} required
                        className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div className='flex justify-between gap-4'>
                    <div className="mb-4 w-full">
                        <label className="text-gray-700 font-semibold">Seller Name:</label>
                        <input type="text" name="sellerName" defaultValue={sellerName} required
                            className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="mb-4 w-full">
                        <label className="text-gray-700 font-semibold">Seller Email:</label>
                        <input type="email" name="sellerEmail" defaultValue={sellerEmail} required
                            className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                </div>
                <div className='flex justify-between gap-4'>
                    <div className="mb-4 w-full">
                        <label className="text-gray-700 font-semibold">Sub CAtegory:</label>
                        <input type="text" name="subCategory" defaultValue={subCategory} required
                            className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="mb-4 w-full">
                        <label className="text-gray-700 font-semibold">Available Quantity:</label>
                        <input type="text" name="availableQuantity" defaultValue={availableQuantity} required
                            className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="mb-4 w-full">
                        <label className="text-gray-700 font-semibold">Ratings:</label>
                        <input type="ratings" name="ratings" defaultValue={ratings} required
                            className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-gray-700 font-semibold">Toy Details:</label>
                    <textarea type="text" name="toyDetails" defaultValue={toyDetails} required
                        className="w-full h-auto px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div>
                    <input type="submit" value="Update Toy"
                        className="px-4 py-2 my-3 w-full font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" />
                </div>
            </form>

        </div>
    );
};

export default UpdateToy;