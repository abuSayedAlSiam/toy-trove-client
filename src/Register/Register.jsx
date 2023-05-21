import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignUp = event => {
        setError('')
        setSuccess('')
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        console.log(name, email, password, photoUrl)

        createUser(email, password)
        .then((result) => {
            const createdUser = result.user;
    
            updateProfile(createdUser, {
              displayName: name,
              photoURL: photoUrl,
            });
          
    
            event.target.reset();
            setSuccess("User has created successfully");
            toast.success("User has created successfully!");
          })
          .catch((error) => {
            setError(error.message);
            toast.error("Something went wrong!")
          });
            
    
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow">
                <h1 className="text-2xl font-semibold mb-6">Register</h1>
                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Name
                        </label>
                        <input
                              className="input input-primary w-full"
                            type="text"
                            name="name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Photo Url
                        </label>
                        <input
                              className="input input-primary w-full"
                            type="text"
                            name="photoUrl"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Email
                        </label>
                        <input
                              className="input input-primary w-full"
                            type="email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Password
                        </label>
                        <input
                            className="input input-primary w-full"
                            type="password"
                            name="password"
                            required
                        />
                    </div>
                    <button
                        className="btn btn-primary w-full"
                        type="submit"
                    >
                       Register Account
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <span className="text-gray-600">Already have an account? </span>
                    <Link
                        className=" text-blue-500 font-semibold hover:underline "
                        to="/login"
                    >
                         Login
                    </Link>
                </div>
                <div className='mt-4'>
                    <p className='text-red-400 text-center'>{error}</p>
                    <p className='text-green-400 text-center' >{success}</p>
                </div>
            </div>
        </div>
    );
};

export default Register;