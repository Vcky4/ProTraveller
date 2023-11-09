import React, { useState } from 'react';
import Post from '../components/Post';
import FilterBar from '../components/FilterBar';
import home from '../images/home.jpg'


const Home = () => {
  const [posts, setPosts] = useState([
    { id: 1, location: 'Paris', content: 'Beautiful Eiffel Tower', reactions: 42, cleanliness: 3, affordability: 2, service: 4 },
    { id: 2, location: 'New York', content: 'City that never sleeps', reactions: 58, cleanliness: 4, affordability: 4, service: 3 },
    { id: 3, location: 'London', content: 'Big Ben', reactions: 105, cleanliness: 3, affordability: 5, service: 4 },
    { id: 4, location: 'Paris', content: 'The Louvre', reactions: 72, cleanliness: 4, affordability: 3, service: 5 },
    // Add more posts
  ]);

  const [locationFilter, setLocationFilter] = useState('All');

  const filteredPosts = posts.filter((post) => locationFilter === 'All' || post.location === locationFilter);

  return (
    <div
      className="flex justify-center h-screen bg-cream"
    // style={{
    //   backgroundImage: `url(${home})`,
    //   backgroundSize: 'cover', // Adjust to your needs
    //   backgroundPosition: 'center', // Adjust to your needs
    // }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ mixBlendMode: 'multiply' }}
      />

      <div className="container mx-auto p-4 z-20">
        <h1 className="text-3xl font-bold mb-4">Welcome to ProTraveller</h1>
        <FilterBar locationFilter={locationFilter} setLocationFilter={setLocationFilter} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
