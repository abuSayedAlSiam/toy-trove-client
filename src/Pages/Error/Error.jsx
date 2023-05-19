import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '/error.svg'

const Error = () => {
  return (
    <div className="mt-4 flex flex-col justify-center items-center mx-auto">
      <h1>404 - Page Not Found</h1>
      <img className='h-96' src={errorImg} alt="" />
       
      <Link to="/" className="btn btn-primary mt-4">
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
