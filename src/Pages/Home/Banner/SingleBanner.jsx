import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const SingleBanner = ({ banner }) => {
    const { photo } = banner || "";
    const navigate = useNavigate();

    const handleExplore = () => {
        navigate('/allToys');
    };
    return (
        <div className="relative overflow-hidden">
            <img
                style={{ height: "500px" }}
                className="w-full object-cover"
                src={photo}
                alt="Image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <div className="text-center text-white">
                    <h2 className="md:text-7xl  text-2xl font-bold text-shadow mb-10">
                        Toy Trove
                    </h2>
                    <p className="mx-auto md:text-lg w-5/6">
                    Experience the Ultimate online toy shopping brought to you.
                    </p>
                     <button className="btn btn-primary mt-4 text-white" onClick={()=>handleExplore()}>
                        Explore
                    </button>
                </div>
            </div>
        </div>

    );
};

export default SingleBanner;