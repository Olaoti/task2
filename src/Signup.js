import React from 'react'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'

function Signup() {
  return (
    <div className='signup'>
      <Navbar/>
        <form>
          <label>Password: </label>
          <input type='password' id='password' name='password'required/>
          <div className='error'></div>
          <label>Email </label>
          <input type='email' id='email' name='email'/>
          <label>Username: </label>
          <input type='name' id='name' name='name' required/>
          <div className='error'></div>
          <button type='submit' >SEND</button>
        </form>
        <p>Already have an account? <Link to="/login"><span>Log in</span></Link></p>
        <Footer/>
    </div>
  )
}

export default Signup
