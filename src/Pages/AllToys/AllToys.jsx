import React, { useEffect, useState } from 'react';
import ToyCard from './toyCard';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const allToys = useLoaderData();
 

    return (
        <div>
            <div>
                <h2 className='text-xl md:text-4xl font-bold text-center my-10 text-primary '>All Toys</h2>
            </div>
            <div className='grid grid-cols-3 gap-4 md:w-11/12 mx-auto'>
                {
                    allToys.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
                }
            </div>
        </div>
    );
};

export default AllToys;