import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
      <Navbar/>
      <form>
        <label>Username:</label>
        <input type='name'/>
        <div className='error'></div>
        <label>Password:</label>
        <input type='password'/>
        <div className='error'></div>
        <button> Log in</button>
      </form>
      <p>Do not have an account yet? <Link to="/signup"><span>Sign up</span></Link></p>
      <Footer/>
    </div>
  )
}

export default Login
