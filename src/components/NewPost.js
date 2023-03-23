import React, { useState } from "react";
import "./New.css";

const CommunityPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  const handlePostSubmit = (event) => {
    event.preventDefault();
    const newPost = {title: newPostTitle, content: newPostContent};
    setPosts([...posts, newPost]);
    setNewPostTitle("");
    setNewPostContent("");
  };

  return (
    <div className="community-container">
      <div className="left-box">
        <h2 className="box-title">Welcome to the Community</h2>
        <p className="box-text">This is a safe space where you can share your thoughts and feelings with others. Feel free to post anything that's on your mind!</p>
      </div>
      <div className="right-box">
        <div className="box">
          <h2 className="box-title">Post Something</h2>
          <form onSubmit={handlePostSubmit}>
            <label>
              <input
                type="text"
                className="post-input"
                placeholder="Post Title"
                value={newPostTitle}
                onChange={(event) => setNewPostTitle(event.target.value)}
              />
            </label>
            <label>
              <textarea
                className="post-input"
                placeholder="Post Content"
                value={newPostContent}
                onChange={(event) => setNewPostContent(event.target.value)}
              />
            </label>
            <button type="submit" className="post-button">Post</button>
          </form>
        </div>
        <div className="box">
          <h2 className="box-title">Recent Posts</h2>
          <div className="post-list">
            {posts.map((post, index) => (
              <div key={index} className="post-item">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
