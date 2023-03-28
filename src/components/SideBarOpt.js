import React from 'react';
import './Main.css';


const SideBarOpt = ({text, Icons}) => {
  return (
    <div>
      <div className='sideBarOpt'>
      <Icons/>
      <h2>{text}</h2>
      </div>
    </div>
  )
}

export default SideBarOpt
