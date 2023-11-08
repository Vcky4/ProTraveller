import React, { useState } from 'react';

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
      <h3 className="text-lg font-semibold mb-2">{post.location}</h3>
      <p className="text-gray-700">{post.content}</p>
      <div className="mt-2 flex items-center space-x-4">
        <button
          className="text-blue-500 hover:underline"
          onClick={handleReact}
        >
          React ({reactions})
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
