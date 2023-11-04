import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import flight2 from '../images/flight2.jpg';
import logo from '../images/logo.png'


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        // Handle sign-up logic
    };

    return (
        <div
            className="flex items-center justify-center h-screen"
            style={{
                backgroundImage: `url(${flight2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='absolute top-0 xl:left-20 left-0 mt-5 ml-5'>
                <Link to="/" smooth>
                    <div className=''>
                        <img src={logo} alt="" className='h-10 pointer-events-none' />
                    </div>
                </Link>
            </div>
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl choc-brown font-semibold mb-4">Sign Up</h2>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border choc-brown rounded py-2 px-3 mb-2"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border choc-brown rounded py-2 px-3 mb-2"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full border choc-brown rounded py-2 px-3 mb-4"
                />
                <button onClick={handleSignUp} className=" button-background text-white w-full py-2 rounded">
                    Sign Up
                </button>
                <p className="text-center text-sm mt-4">
                    Already have an account?{' '}
                    <Link to="/login" className="choc-brown hover:underline">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
