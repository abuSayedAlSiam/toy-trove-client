import React from 'react';
import { Link } from 'react-router-dom';

const handleSignUp = event => {
    event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)


}

const Register = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow">
                <h1 className="text-2xl font-semibold mb-6">Login</h1>
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
                    <span className="text-gray-600">Already have an account?</span>
                    <Link
                        className=" text-blue-500 font-semibold hover:underline "
                        to="/login"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;