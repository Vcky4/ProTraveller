import React, { useEffect, useState } from 'react';
import Post from '../components/Post';
import FilterBar from '../components/FilterBar';
import { Header } from '../components/Header';
import { Modal } from '../utill';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    location: '',
    content: '',
    cleanliness: 1,
    affordability: 1,
    service: 1,
    username: 'Samuel Thompson',
    reactions: 0,
  });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const [locationFilter, setLocationFilter] = useState('All');

  const filteredPosts = posts.filter((post) => locationFilter === 'All' || post.location === locationFilter);

  useEffect(() => {
    setPosts([
      { id: 1, location: 'Paris', content: 'Beautiful Eiffel Tower', reactions: 42, cleanliness: 3, affordability: 2, service: 4, username: 'Samuel Thompson' },
      { id: 2, location: 'New York', content: 'City that never sleeps', reactions: 58, cleanliness: 4, affordability: 4, service: 3, username: 'Racheal Peter' },
      { id: 3, location: 'London', content: 'Big Ben', reactions: 105, cleanliness: 3, affordability: 5, service: 4, username: 'Ann Nick' },
      { id: 4, location: 'Paris', content: 'The Louvre', reactions: 72, cleanliness: 4, affordability: 3, service: 5, username: 'Collins Uda' },
      // Add more posts
      { id: 5, location: 'Tokyo', content: 'Beautiful cherry blossoms', reactions: 35, cleanliness: 4, affordability: 3, service: 5, username: 'Samuel Thompson' },
      { id: 6, location: 'Sydney', content: 'Iconic Opera House', reactions: 62, cleanliness: 5, affordability: 2, service: 4, username: 'John' },
      { id: 7, location: 'London', content: 'Big Ben', reactions: 105, cleanliness: 3, affordability: 5, service: 4, username: 'Samuel Thompson' },
      { id: 8, location: 'Paris', content: 'The Louvre', reactions: 72, cleanliness: 4, affordability: 3, service: 5, username: 'Samuel Thompson' },
      { id: 9, location: 'Tokyo', content: 'Beautiful cherry blossoms', reactions: 35, cleanliness: 4, affordability: 3, service: 5, username: 'Cathrine' },
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
        <div className="container mx-auto p-4">
          <Header />
          <h1 className="text-3xl font-bold mb-4">Explore The Beauty</h1>
          <div className='flex text-sm items-center'>
            <FilterBar locationFilter={locationFilter} setLocationFilter={setLocationFilter} />
            {/* Your create button */}
            <button onClick={openModal} className='button-background ml-8 mb-4 text-white px-10 py-1 rounded'>
              Create
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPosts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className='font-semibold'>Tell Your Experience</h2>
          <input
            className="border p-2 rounded-md w-full mt-4"
            type="text"
            placeholder="Location"
            value={newPost.location}
            onChange={(e) => setNewPost({ ...newPost, location: e.target.value })}
          />
          <textarea
            className="border p-2 rounded-md w-full mt-4"
            type="text"
            placeholder="Content"
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          />
          <select
            className="border p-2 rounded-md w-full mt-4"
            placeholder="Cleanliness"
            value={newPost.cleanliness}
            onChange={(e) => setNewPost({ ...newPost, cleanliness: e.target.value })}
          >
            <option value="1">Cleanliness</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select
            className="border p-2 rounded-md w-full mt-4"
            placeholder="Affordability"
            value={newPost.affordability}
            onChange={(e) => setNewPost({ ...newPost, affordability: e.target.value })}
          >
            <option value="1">Affordability</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select
            className="border p-2 rounded-md w-full mt-4"
            placeholder="Service"
            value={newPost.service}
            onChange={(e) => setNewPost({ ...newPost, service: e.target.value })}
          >
            <option value="1">Service</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button
            className="button-background text-white px-3 py-2 rounded-md mt-4"
            onClick={() => {
              setPosts([{
                ...newPost,
                id: posts.length + 1,
                reactions: 0,
                username: 'William Thompson',
                createdAt: new Date().toISOString()
              }, ...posts]);
              setNewPost({
                location: '',
                content: '',
                cleanliness: 1,
                affordability: 1,
                service: 1,
                username: 'Samuel Thompson',
                reactions: 0,
              });
              closeModal();
            }}
          >
            Create
          </button>
          <button
            className="bg-blue-500 text-white px-3 py-2 rounded-md mt-4 ml-4"
            onClick={closeModal}
          >
            Cancel
          </button>
        </Modal>
      </div>
    </>
  );
};

export default Home;