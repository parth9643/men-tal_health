import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import Signup from "./components/SignUp"
import Footer from "./components/Footer"
import {Routes, Route, Link} from "react-router-dom"
 import Login from "./components/Login"
import Home from './components/Home'
import Affooter from './components/Affooter'
 import Courosel from './components/Courosel'


const App = () => {
  return (
    <div className='app'>
    

<Navbar className=""/>
      


<Routes>


{/* <Route exact path='/*' element={<Footer/>}></Route> */}
{/* <Route exact path='/Home' element={<Home/>}></Route> */}
  
  <Route exact path='/Home' element={<Home/>}></Route>
 
  
  <Route exact path='/signup' element={<Signup/>}></Route>
  <Route exact path='/Login' element={<Login/>}></Route>
</Routes>
<div className='mx-44'>

<Courosel />
</div>
<Footer/>
<Affooter/>

    </div>
  )
}

export default App
