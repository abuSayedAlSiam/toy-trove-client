import React, { useEffect, useState } from 'react';
import ToyCard from '../Home/ShopByCategory/ToyCard';
import UseTitle from '../../Hooks/UseTitle';
import Row from './Row';
import HashLoader from 'react-spinners/HashLoader';

const AllToys = () => {
    UseTitle('All Toys');
    const [allToys, setAllToys] = useState([]);
    const [limit, setLimit] = useState(20);
    const [searchText, setSearchText] = useState("");
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const fetchToys = async () => {
            try {
                const response = await fetch(`https://toy-trove-server.vercel.app/allToys?limit=${limit}&toyName=${searchText}`);
                const data = await response.json();
                setAllToys(data);
                setLoader(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchToys();
    }, [limit, searchText]);

    const handleLimit = () => {
        setLimit(0);
    };

    const handleSearch = () => {
        setSearchText(searchText)
    };


    return (
        <div>
            <div>
                <div>
                    <h2 className='text-xl md:text-4xl mt-4 font-bold text-center text-primary'>All Toys</h2>
                </div>
                <div className="w-10/12 md:w-3/12 md:ml-auto mx-auto mt-4">

                    <div className="input-group">
                        <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search…" name="search" className="input input-bordered" />
                        <button onClick={handleSearch} type="submit" className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                    <label className="label">
                        Search by name
                    </label>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full text-center">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Photo</th>
                                <th>Toy Name</th>
                                <th>Seller Name</th>
                                <th>Sub Category</th>
                                <th>Price</th>
                                <th>Available <br /> Quantity</th>
                                <th>View Details</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* row  */}
                            {
                                allToys.map((toy, index) => <Row key={toy._id} index={index} toy={toy}></Row>)
                            }
                        </tbody>
                    </table>
                    <div hidden={!loader} className='w-1/12 mx-auto my-10'>
                        <HashLoader color="#00d9ff" />
                    </div>
                </div>
            </div>
            <div hidden={limit == 0 || allToys.length < limit} className='w-32 md:w-1/12 mx-auto mt-4'>
                <button onClick={handleLimit} className='btn mx-auto'>See All</button>
            </div>
        </div>
    );
};

export default AllToys;
