import React, { useState } from 'react';
import Post from '../components/Post';
import FilterBar from '../components/FilterBar';

const Home = () => {
  const [posts, setPosts] = useState([
    { id: 1, location: 'Paris', content: 'Beautiful Eiffel Tower', reactions: 42 },
    { id: 2, location: 'New York', content: 'City that never sleeps', reactions: 58 },
    // Add more posts
  ]);

  const [locationFilter, setLocationFilter] = useState('All');

  const filteredPosts = posts.filter((post) => locationFilter === 'All' || post.location === locationFilter);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to ProTraveller</h1>
      <FilterBar locationFilter={locationFilter} setLocationFilter={setLocationFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
