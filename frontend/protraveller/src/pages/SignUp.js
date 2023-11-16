import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import flight2 from '../images/flight2.jpg';
import logo from '../images/logo.png'

const SignUp = () => {
    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [signUpData, setSignUpData] = useState({
        username: '',
        password: '',
    })


    //sign up
    const handleSignUp = () => {
        // Handle sign-up logic
        if (signUpData.password !== confirmPassword) {
            alert('Passwords do not match');
            // toast.error('Passwords do not match', {
            //     position: 'top-right',
            //     autoClose: 3000, // Close the alert after 3 seconds
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //   });
        }
        fetch('http://127.0.0.1:8000/api/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUpData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.message === undefined) {
                    alert(data.username || data.password)
                } else {
                    alert(data.message)
                    navigate('/home');
                }
                console.log(data)
            })
            .catch(err => console.log(err))
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
                    placeholder="UserName"
                    value={signUpData.username}
                    onChange={(e) => setSignUpData({
                        ...signUpData,
                        username: e.target.value
                    })}
                    className="w-full border choc-brown rounded py-2 px-3 mb-2"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={signUpData.password}
                    onChange={(e) => setSignUpData({
                        ...signUpData,
                        password: e.target.value
                    })}
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
