// src/components/CreatePost.js
import React, { useState } from 'react';
import { postsCollection } from '../firebase';
import { addDoc } from 'firebase/firestore';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(postsCollection, {
        title,
        content,
        createdAt: new Date()
      });
      setTitle('');
      setContent('');
      alert('Post added successfully!');
    } catch (error) {
      console.error('Error adding post: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-post-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;



