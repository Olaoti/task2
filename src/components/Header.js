import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <h1 className='greetings'>
        Hello!
      </h1>
      <div className='line'></div>
      <h3>Welcome to Gallorie</h3>
      <Link to='login'>
       <button>View gallery</button>
      </Link>
    </div>
  )
}

export default Header
