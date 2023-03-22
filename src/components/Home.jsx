import React from 'react'
import man from '../assets/man.jpg'
import './Home.css'


const Home = () => {
    return (
        <div className="home mx-12 my-44 ">
          <div className="content my-24  hom ">
            <h1 className=' hom1'>You're not alone. <br /> We're here for you.</h1>
            <p className='mx-12 hom2'> Our platform encourages open conversations about mental health, without judgment or shame. Share your experiences and help others do the same.
                     </p>
                     <div className='flex justify-evenly hom3 '>

            <button className='butt'>Login</button>
            <button className='butt'>sign-up</button>

                     </div>
          </div>
          <div className="image ">
            <img  className=' m-0 rounded-2xl ' src={man} alt="Hero Section Image" />
          </div>
        </div>
      )
}

export default Home


