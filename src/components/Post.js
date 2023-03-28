import React from 'react'
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';
import { Button } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import './Main.css';


const Post = ({
    username, text,profilePhoto
}) => {
  return (
    <div>
    <div className='post'>
  

    <div className='post_body'>
      <div className='post_header'>
        <div className='post_headertext'>
          <h3>
          <div className='icon'>
          {profilePhoto}
          </div>
          
            <span className="post_username">
              {username}
            </span>
          </h3>
        </div>

        <div className='post-message'>
          <p>{text}</p>
        </div>

      </div>
    </div>


    <div className="post_footer">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
        <IosShareRoundedIcon fontSize="medium" />
        <BookmarkAddedRoundedIcon fontSize='medium'/>
        
      </div>
  
  </div>
    </div>
  )
}

export default Post
