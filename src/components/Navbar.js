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
        <Link to="/overview">
          <h5 className='overview'>Overview</h5>
        </Link>
        <Link to="/gallery">
          <h5 className='gallery'>Gallery</h5>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
