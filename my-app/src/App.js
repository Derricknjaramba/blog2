// src/App.js
import React from 'react';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Simple Blog</h1>
      <CreatePost />
      <PostList />
    </div>
  );
}

export default App;


