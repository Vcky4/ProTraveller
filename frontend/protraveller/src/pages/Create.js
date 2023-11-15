import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

const Create = () => {


    return (
        <>
            <div
                className="flex justify-center bg-cream"
            >
                <div className="container mx-auto p-4 z-20">
                    <Header />
                    <h1 className="text-3xl font-bold mb-4">Tell Your Experience</h1>
                    <div className="bg-white rounded-md shadow-md p-4">
                        <div className='flex items-center'>
                            <img
                                src={`https://source.unsplash.com/50x50/?profile`}
                                alt="Profile"
                                className="rounded-full h-10 w-10 object-cover"
                            />
                            <h3 className="text-lg font-semibold ml-2">{'post?.username'}</h3>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{'post.location'}</h3>
                        <img
                            src={`https://source.unsplash.com/500x300/?upload`}
                            alt={`upload`}
                            className="mb-4 rounded-md"
                        />
                        <p className="text-gray-700">{'post.content'}</p>
                        {/* <div>
                            <div className="flex items-center">
                                <span className="mr-2">Cleanliness:</span>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FontAwesomeIcon
                                        key={star}
                                        icon={faStar}
                                        className={`text-${star <= post.cleanliness ? 'red' : 'gray'}-500`}
                                    />
                                ))}
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2">Affordability:</span>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FontAwesomeIcon
                                        key={star}
                                        icon={faStar}
                                        className={`text-${star <= post.affordability ? 'red' : 'gray'}-500`}
                                    />
                                ))}
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2">Service:</span>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FontAwesomeIcon
                                        key={star}
                                        icon={faStar}
                                        className={`text-${star <= post.service ? 'red' : 'gray'}-500`}
                                    />
                                ))}
                            </div>
                        </div>
                     */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Create;
