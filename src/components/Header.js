import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from "@clerk/clerk-react";

function Header() {
  const { isLoaded, isSignedIn, user } = useUser();
 
  if (!isLoaded) {
    return null;
  }
  if(!isSignedIn){
    <div className='header'>
    <h1 className='greetings'>
      Hello!
    </h1>
    <div className='line'></div>
    <h3>Welcome to Gallorie</h3>
    <Link to='/gallory'>
     <button>View gallery</button>
    </Link>
  </div>
  }
  return (
    <div className='header'>
      <h1 className='greetings'>
        Hello! {user?.username}
      </h1>
      <div className='line'></div>
      <h3>Welcome to Gallorie</h3>
      <Link to='/gallery'>
       <button>View gallery</button>
      </Link>
    </div>
  )
}

export default Header
