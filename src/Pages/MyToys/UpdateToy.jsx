import { rankings } from 'match-sorter';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import UseTitle from '../../Hooks/UseTitle';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    UseTitle('Update Toy');
    const toy = useLoaderData();
    const {
        _id, toyName, price, picture, sellerEmail, sellerName, availableQuantity, subCategory, ratings, toyDetails
    } = toy || "";

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const availableQuantity = form.availableQuantity.value;
        const toyDetails = form.toyDetails.value;

        console.log(price, availableQuantity, toyDetails)

        const toyData = {
            price, availableQuantity, toyDetails
        }

        // validate 
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to update this toy?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#50C878',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update Toy!'
        }).then((result) => {
            if (result.isConfirmed) {
                handleSwalFireWithUpdate()
                form.reset();

            }
            else { return }
        })

        // update to the server 
        const handleSwalFireWithUpdate = () => {

            fetch(`http://localhost:5000/updateToy/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                }, body: JSON.stringify(toyData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount > 0) {
                        form.reset();
                        toast.success('Updated Successfully')
                        Swal.fire(
                            `Updated Successful!`,
                            `${toyName} has been updated.`,
                            'success'
                        )

                    }

                })
                .catch(err => toast.error("Something went wrong"));

        }
    }

    return (
        <div className='w-10/12 mx-auto'>
            <h2 className='text-center text-4xl font-bold mt-3 mb-8'>Update Toy <span className='text-primary'>({toyName})</span></h2>
            {/* all code here  */}

            <form onSubmit={handleSubmit} className="w-8/12 mx-auto py-8 px-16 bg-gray-100 shadow-md rounded-md">

                <div className="mb-4 w-full">
                    <label className="text-gray-700 font-semibold">Price:</label>
                    <input type="text" name="price" defaultValue={price} required
                        className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="text-gray-700 font-semibold">Available Quantity:</label>
                    <input type="text" name="picture" defaultValue={availableQuantity} required
                        className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
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