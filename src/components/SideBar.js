import React from 'react'
import SideBarOpt from './SideBarOpt'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import './Main.css';
import { Button } from '@mui/material';

const SideBar = () => {
  return (
    <div>
      <div className='sidebar'>
      {/*Icon ->insert kar daina */}
      <div className='logo'>
      <SideBarOpt Icons={LanguageRoundedIcon} />
      </div>
      <SideBarOpt Icons={HomeIcon } text='Home'/>
      <SideBarOpt  Icons={SearchIcon}  text='Explore'/>
      <SideBarOpt  Icons={GroupIcon} text='Connections'/>
      <SideBarOpt  Icons={NotificationsIcon} text='Notifications'/>
      <SideBarOpt  Icons={PersonIcon} text='Profile'/>

      <Button variant='outlined' className='sidebar-post' fullWidth>
        Post
      </Button>
      
      </div>
    </div>
  )
}

export default SideBar
