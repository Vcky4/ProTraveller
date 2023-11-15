import React, { useEffect, useState } from 'react';
import Post from '../components/Post';
import FilterBar from '../components/FilterBar';
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

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
        <div className="container mx-auto p-4 z-20">
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
        <h2>This is a Modal</h2>
        <p>Modal content goes here.</p>
      </Modal>
      </div>
    </>
  );
};

export default Home;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};
