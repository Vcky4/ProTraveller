import React, { useState } from 'react';
import home from '../images/home.jpg'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'



const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle the login logic here, e.g., sending a request to your server
        navigate('/home'); // Navigate to the home page

        // For this example, we'll just log the email and password
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div
            className="flex items-center justify-center h-screen"
            style={{
                backgroundImage: `url(${home})`,
                backgroundSize: 'cover', // Adjust to your needs
                backgroundPosition: 'center', // Adjust to your needs
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
                <h2 className="text-2xl choc-brown font-semibold mb-4">Login</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block choc-brown text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full choc-brown p-2 border rounded"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block choc-brown text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full choc-brown p-2 border rounded"
                        placeholder="Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="w-full button-background text-white p-2 rounded"
                    onClick={handleLogin}
                >
                    Login
                </button>
                <p className="text-center text-sm mt-4">
                    Don't have an account?{' '}
                    <Link to="/signup" className="choc-brown hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
