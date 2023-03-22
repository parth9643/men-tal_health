import React from 'react'
import man from '../assets/man.jpg'
import './Home.css'


const Home = () => {
    return (
        <div className="home">
          <div className="content">
            <h1 className='text-lg font-semibold mb-2'>Welcome to My Website</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et  <br /> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button>Learn More</button>
          </div>
          <div className="image">
            <img  className='w-1/2 m-0 ' src={man} alt="Hero Section Image" />
          </div>
        </div>
      )
}

export default Home


