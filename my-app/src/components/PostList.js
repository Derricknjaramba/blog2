// src/components/PostList.js
import React, { useEffect, useState } from 'react';
import { postsCollection } from '../firebase';
import { query, getDocs, orderBy } from 'firebase/firestore';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(postsCollection, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const postsArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsArray);
    };

    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>Posted on {new Date(post.createdAt.seconds * 1000).toLocaleDateString()}</small>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default PostList;


