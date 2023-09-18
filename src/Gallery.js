import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function Gallery() {
const filterClick = (e)=>{
    console.log(e.target.id)
}
  return (
    <div className='gallery'>
        <Navbar/>
        <div className='gallery_body'>
            <h1>Explore gallery</h1>
            <input type='search' placeholder='Search gallery...'/>
            <div className='tabs' onClick={filterClick}>
                <div id='' className='active'>All</div>
                <div id='male'>Male</div>
                <div id='female'>Female</div>
                <div id='kids'>Kids</div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Gallery
