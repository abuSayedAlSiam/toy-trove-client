import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const AddAToy = () => {

    const {user} = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const price = form.price.value; 
        const imageUrl = form.imageUrl.value; 
        const sellerName = form.sellerName.value; 
        const sellerEmail = form.sellerEmail.value; 
        const availableQuantity = form.availableQuantity.value; 
        const ratings = form.ratings.value; 
        const toyDetails = form.toyDetails.value;

        console.log(toyName, price, imageUrl, sellerEmail, sellerName, availableQuantity, ratings, toyDetails)

        const toyData = {
            toyName, price, imageUrl, sellerEmail: user?.email, sellerName, availableQuantity, ratings, toyDetails
        }
        // add to server 
        fetch(`http://localhost:5000/addToy`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify(toyData)
        })
            .then(res =>res.json())
            .then(data => console.log(data))
    }

    return (
        <div className='w-10/12 mx-auto'>
            <h2 className='text-center text-4xl font-bold mt-3 mb-8'>Add A New Toy</h2>
            {/* all code here  */}

            <form onSubmit={handleSubmit} className="w-9/12 mx-auto p-4 bg-gray-100 shadow-md rounded-md">
            <div className='flex justify-between gap-4'>
                    <div className="mb-4 w-full">
                        <label className="text-gray-700 font-semibold">Toy Name:</label>
                        <input  type="text" name="toyName" required
                            className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="mb-4 w-full">
                        <label className="text-gray-700 font-semibold">Price:</label>
                        <input  type="text" name="price" required
                            className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-gray-700 font-semibold">Image URL:</label>
                    <input type="text"   name="imageUrl" required
                        className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div className='flex justify-between gap-4'>
                    <div className="mb-4 w-full">
                        <label className="text-gray-700 font-semibold">Seller Name:</label>
                        <input  type="text" name="sellerName" defaultValue={user?.displayName} required
                            className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="mb-4 w-full">
                        <label className="text-gray-700 font-semibold">Seller Email:</label>
                        <input  type="email" name="sellerEmail" defaultValue={user?.email} required
                            className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                </div>
                <div className='flex justify-between gap-4'>
                    <div className="mb-4 w-full">
                        <label className="text-gray-700 font-semibold">Available Quantity:</label>
                        <input  type="text" name="availableQuantity" required
                            className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="mb-4 w-full">
                        <label className="text-gray-700 font-semibold">Ratings:</label>
                        <input type="ratings" name="ratings" required
                            className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-gray-700 font-semibold">Toy Details:</label>
                    <textarea type="text"   name="toyDetails" required
                        className="w-full h-auto px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div>
                    <input type="submit" value="Add Toy"
                        className="px-4 py-2 my-3 w-full font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" />
                </div>
            </form>

        </div>
    );
};

export default AddAToy;