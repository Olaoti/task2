import React, {useState, useEffect} from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import List from './components/List'
import Card from './components/Card.js'
import { Link } from 'react-router-dom'

function Gallory() {

    const [loading, setLoading] = useState(true)
    
    const totalImages = Math.floor((List?.length)/4);
      const handleImageLoad = () => {
      }
      useEffect(() => {
        const loadedImages = [];
        List?.forEach((imageObj) => {
          const img = new Image();
          img.src = imageObj.image;
          img.onload = () => {
            loadedImages.push(imageObj.id);
            if (loadedImages.length >= totalImages) {
              setLoading(false)
            }
          };
        });
      }, [totalImages]);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false)
            console.log('topened')
        }, 3000)
        return clearTimeout(timer)
    })
      if(loading){
        return (
          <div className="loading-spin">
          <div className="spinner">
          </div>
        </div>)
      }

  return (
    <div className='gallery'>
        <Navbar/>
      <div className='gallery_body'>
        <h1>Explore + more</h1>
        <h4>Gallorie allows you to take control of the gallery, search images, drag and drop to rearrange where you want it!</h4>
        <Link to='/gallery'>
        <h5>Explore Gallorie!</h5>
        </Link> 
        <div className='images-sect'>
            {List?.map((sublist, index)=>{
            return <>
            <Card key={sublist?.id} id={sublist?.id} src={sublist?.image} alt={sublist?.title} index={index} onLoad={handleImageLoad}/>
            </>
            })}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Gallory
