import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

const Post = ({ post }) => {
  const [reactions, setReactions] = useState(post.reactions);
  const [comment, setComment] = useState('');

  const handleComment = () => {
    // Handle adding a comment
  };

  const handleReact = () => {
    setReactions(reactions + 1);
    // Handle recording the user's reaction
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <div className='flex items-center'>
        <img
          src={`https://source.unsplash.com/50x50/?profile`}
          alt="Profile"
          className="rounded-full h-10 w-10 object-cover"
        />
        <h3 className="text-lg font-semibold ml-2">{post?.username}</h3>
      </div>
      <h3 className="text-lg font-semibold mb-2">{post.location}</h3>
      <img
        src={post?.image || `https://source.unsplash.com/500x300/?${post.location}`}
        alt={`${post.location}`}
        className="mb-4 rounded-md"
      />
      <p className="text-gray-700">{post.content}</p>
      <div>
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
      <div className="mt-2 flex items-center space-x-4">
        <button
          className="text-red-500 hover:underline flex items-center"
          onClick={handleReact}
        >
          <FontAwesomeIcon icon={faHeart} className="mr-2" />
          ({reactions})
        </button>
        <input
          className="border p-2 rounded-md w-full"
          type="text"
          placeholder="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-3 py-2 rounded-md"
          onClick={handleComment}
        >
          Comment
        </button>
      </div>
    </div>
  );
};

export default Post;
