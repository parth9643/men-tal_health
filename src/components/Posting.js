import { Button } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
/*import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';*/
import React, { useEffect, useState } from 'react';
import './Main.css';
import Post from './Post';
import db from "./Firebase";

const Posting = () => {

  const[posts,setposts]= useState([]);
  const[postMessage,setMessage]=useState(" ");

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot => (
      setposts(snapshot.docs.map(doc=>doc.data()))
    ))
  },[])

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      username: "ps",
      text: postMessage,
    });

    setMessage("");
  };


  return (
    <div className='posting'>
      <div className='post-head'>
        <h2>Home</h2>
      </div>

      {/* POST BOX */}
      <div className='post-box'>
        <form>
          <div className='post-box1'>
          <AccountCircleRoundedIcon fontSize="large"/>
          <input 
          onChange={(e)=>setMessage(e.target.value)}
          value={postMessage} 
          placeholder='Share your fellings' type='text'></input>
          </div>
          <Button 
          onClick={sendPost}
          className='post-btn'>Post</Button>
        </form>
      </div>



      {/* POST */}
      {posts.map(posts => (
        <Post
        username={posts.username}
        profilePhoto={posts.profilePhoto}
        text={posts.text}

      />
      ))}
      <Post


      />
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>


      

    </div>
  )
}

export default Posting
