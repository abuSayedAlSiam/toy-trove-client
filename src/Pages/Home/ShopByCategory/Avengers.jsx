import React, { useEffect, useState } from 'react';
import ToyCard from './ToyCard';

const Avengers = () => {
    const [toys, setToys] = useState([]);

    useEffect(()=>{
        fetch('https://toy-trove-server.vercel.app/allToys/Avengers')
            .then(res => res.json())
            .then(data => setToys(data))
    } ,[setToys])
   
    return (
        <div className='md:grid md:grid-cols-3 gap-4'>
            {
                toys.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
            }
        </div>
    );
};

export default Avengers;