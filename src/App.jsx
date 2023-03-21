import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import Signup from "./components/SignUp"
import {Routes, Route, Link} from "react-router-dom"

 import Login from "./components/Login"
import Help from "./components/Help"
const App = () => {
  return (
    <div className='app'>
      


<Routes>
<Route exact path='/' element={<Navbar/>}></Route>
  <Route exact path='/signup' element={<Signup/>}></Route>
  <Route exact path='/Login' element={<Login/>}></Route>
  <Route exact path='/Help' element={<Help/>}></Route>
</Routes>

    </div>
  )
}

export default App
