import React, { useEffect, useState } from 'react';
import ToyCard from './toyCard';
import UseTitle from '../../Hooks/UseTitle';

const AllToys = () => {
    UseTitle('All Toys');
    const [allToys, setAllToys] = useState([]);
    const [limit, setLimit] = useState(20);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const fetchToys = async () => {
            try {
                const response = await fetch(`https://toy-trove-server.vercel.app/allToys?limit=${limit}&toyName=${searchText}`);
                const data = await response.json();
                setAllToys(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchToys();
    }, [limit, searchText]);

    const handleLimit = () => {
        setLimit(0);
    };

    const handleSearch = event => {
        event.preventDefault();
        const search = event.target.search.value;
        setSearchText(search);
    };

    return (
        <div>
            <div>
                <div>
                    <h2 className='text-xl md:text-4xl mt-4 font-bold text-center text-primary'>All Toys</h2>
                </div>
                <form onSubmit={handleSearch} className="w-10/12 md:w-3/12 md:ml-auto mx-auto mb-4">
                    <label className="label">
                      Input the same name to search
                    </label>
                    <div className="input-group">

                        <input type="text" placeholder="Search…" name="search" className="input input-bordered" />
                        <button type="submit" className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </form>
            </div>
            <div className='md:grid grid-cols-4 gap-4 md:w-11/12 mx-auto'>
                {
                    allToys.map(toy => <ToyCard key={toy._id} toy={toy} />)
                }
            </div>
            <div hidden={!limit} className='w-2/12 mx-auto mt-4'>
                <button onClick={handleLimit} className='btn mx-auto'>See All</button>
            </div>
        </div>
    );
};

export default AllToys;
