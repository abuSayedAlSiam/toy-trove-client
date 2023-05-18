import React, { useEffect, useState } from 'react';
import ToyCard from '../../AllToys/toyCard';

const Transformers = () => {
    const [toys, setToys] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/allToys/Transformers')
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

export default Transformers;