import React, { useEffect, useState } from 'react';
import ToyCard from './toyCard';


const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    const [limit, setLimit] = useState(20);
    useEffect(()=> {
        fetch(`http://localhost:5000/allToys?limit=${limit}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    } ,[allToys, limit])
    
    const handleLimit = () => {
        setLimit(0)
    }

    return (
        <div>
            <div>
                <div >
                    <h2 className='text-xl md:text-4xl font-bold text-center text-primary '>All Toys</h2>
                </div>
               
            </div>
            <div className='grid grid-cols-4 gap-4 md:w-11/12 mx-auto'>
                {
                    allToys.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
                }
            </div>
            <div hidden={!limit} className='w-2/12 mx-auto mt-4'>

            <button onClick={()=>handleLimit()} className='btn btn-primary mx-auto'>See All</button>
            </div>
        </div>
    );
};

export default AllToys;