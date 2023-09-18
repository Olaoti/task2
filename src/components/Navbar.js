import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [show,setShow] = useState(false)
  return (
    <div className={`navbar`}> 
      <div className='mobile-nav'>
        <Link to={'/'}>
          <h4 className='myname'>
              gallorie
          </h4>
          </Link>
          <div className='stick'></div>
          <div className={`hamburger ${show?('cancel'):('show')}`} onClick={()=>{setShow(!show)}}>
            <span></span>
            <span></span>
          </div>
      </div>
      <div className={`nav-links ${show?('display'):('nodisplay')}`}>
        <Link to="/gallery">
          <h5 className='gallery'>Gallery</h5>
        </Link>
        <Link to='/login'>
          <h5>Log in</h5>
        </Link>
        <Link to='/signup'>
          <button>Sign up</button>
      </Link>
      </div>
    </div>
  )
}

export default Navbar
