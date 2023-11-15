import React, { useEffect, useState } from 'react';
import Post from '../components/Post';
import FilterBar from '../components/FilterBar';
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';


const Profile = () => {
    const [posts, setPosts] = useState([]);

    const [locationFilter, setLocationFilter] = useState('All');

    const filteredPosts = posts.filter((post) => locationFilter === 'All' || post.location === locationFilter);

    useEffect(() => {
        setPosts([
            { id: 1, location: 'Paris', content: 'Beautiful Eiffel Tower', reactions: 42, cleanliness: 3, affordability: 2, service: 4, username: 'Samuel Thompson' },
            { id: 2, location: 'New York', content: 'City that never sleeps', reactions: 58, cleanliness: 4, affordability: 4, service: 3, username: 'Samuel Thompson' },
            { id: 3, location: 'London', content: 'Big Ben', reactions: 105, cleanliness: 3, affordability: 5, service: 4, username: 'Samuel Thompson' },
            { id: 4, location: 'Paris', content: 'The Louvre', reactions: 72, cleanliness: 4, affordability: 3, service: 5, username: 'Samuel Thompson' },
            // Add more posts
            { id: 5, location: 'Tokyo', content: 'Beautiful cherry blossoms', reactions: 35, cleanliness: 4, affordability: 3, service: 5, username: 'Samuel Thompson' },
            { id: 6, location: 'Sydney', content: 'Iconic Opera House', reactions: 62, cleanliness: 5, affordability: 2, service: 4, username: 'Samuel Thompson' },
            { id: 7, location: 'London', content: 'Big Ben', reactions: 105, cleanliness: 3, affordability: 5, service: 4, username: 'Samuel Thompson' },
            { id: 8, location: 'Paris', content: 'The Louvre', reactions: 72, cleanliness: 4, affordability: 3, service: 5, username: 'Samuel Thompson' },
            { id: 9, location: 'Tokyo', content: 'Beautiful cherry blossoms', reactions: 35, cleanliness: 4, affordability: 3, service: 5, username: 'Samuel Thompson' },
            { id: 10, location: 'Sydney', content: 'Iconic Opera House', reactions: 62, cleanliness: 5, affordability: 2, service: 4, username: 'Samuel Thompson' },
            { id: 11, location: 'London', content: 'Big Ben', reactions: 105, cleanliness: 3, affordability: 5, service: 4, username: 'Samuel Thompson' },
            { id: 12, location: 'Paris', content: 'The Louvre', reactions: 72, cleanliness: 4, affordability: 3, service: 5, username: 'Samuel Thompson' },
            { id: 13, location: 'Tokyo', content: 'Beautiful cherry blossoms', reactions: 35, cleanliness: 4, affordability: 3, service: 5, username: 'Samuel Thompson' },
            { id: 14, location: 'Sydney', content: 'Iconic Opera House', reactions: 62, cleanliness: 5, affordability: 2, service: 4, username: 'Samuel Thompson' },
        ])
    }, [])

    return (
        <>

            <div
                className="flex justify-center bg-cream"
            // style={{
            //   backgroundImage: `url(${home})`,
            //   backgroundSize: 'cover', // Adjust to your needs
            //   backgroundPosition: 'center', // Adjust to your needs
            // }}
            >
                {/* Dark overlay */}
                {/* <div
          className="absolute inset-0 bg-black opacity-50"
          style={{ mixBlendMode: 'multiply' }}
        /> */}
                <div className="container mx-auto p-4 z-20">
                    <Header />
                    <div className='flex grid align-center mb-8'>
                        <img
                            src={`https://source.unsplash.com/300x300/?profile`}
                            alt="Profile"
                            className="rounded-full h-80 w-80 object-cover mb-4"
                        />
                        <div className='justify-center'>
                            <h1 className="text-3xl font-bold mb-4">Samuel Thompson</h1>
                            <p className="text-lg max-w-4xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut al
                            </p>
                            <button className='button-background text-white px-10 py-1 rounded mt-4'>
                                <Link to="" smooth>Edit</Link>
                            </button>
                        </div>
                    </div>
                    <FilterBar locationFilter={locationFilter} setLocationFilter={setLocationFilter} />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredPosts.map((post) => (
                            <Post key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
