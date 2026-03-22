import React, { useState, useEffect } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/posts') // Use 3001 if 3000 is busy
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="app-container">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <img src={post.userImage} alt="user" className="avatar" />
          <span>{post.username}</span>
          <img src={post.postImage} alt="content" className="main-img" />
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;