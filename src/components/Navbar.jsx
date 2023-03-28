import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import "./Navbar.css"
// import {Link} from "react-scroll"
import {Link} from "react-router-dom"
const Navbar = ()=> {

    const [nav,setNav]=useState(false)
     const links=[
        {
            id: 1,
            link:"/Home"
            

        },
        {
            id:2,
            link:"/Posts",
        },
        {
            id:3,
            link:"/Help",
        },
        {
            id:4,
            link:"/signup",
        },
        {
            id:5,
            link:"/Login"
        },
     ];
  return (

    <div className="flex justify-between items-center w-full h-20 px-4 bg-gray-800 text-gray-400 fixed opacity-70 nav">

       
       <div>
        <h1 className="text-5xl font-signature ml-2">Abhishek</h1>
       </div>
       <ul className="hidden md:flex">
        {links.map(({ id, link})=>(

<Link  to={link}>


             <li key={id} className="px-4 cursor-pointer capitalise font-medium text-white hover:scale-105 duration-200"> {link}</li>  
\
             </Link>
         ))} 
       </ul>
       <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
         {nav?<FaTimes size={30}/>: <FaBars size={30}/>}
       </div>
       {nav &&(

       <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
       {links.map(({ id, link})=>(

 <Link to={link}> <li key={id} className="px-4 cursor-pointer capitalize py-6  text-4xl"> 
                {link.slice(1)}
              </li>  </Link>

))} 
        
          
       </ul>
       )}

    </div>
  );
};

export default Navbar