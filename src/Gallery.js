import React, { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import List from './components/List'
import Card from './components/Card.js'


function Gallery() {
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)
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

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }, []);

   const [selected, setSelected] = useState('')
  const [filteredList, setFilteredList] = useState()
const filterClick = (e)=>{
    setSelected(e.target.id)
}
const search = (e)=>{
  setSelected((e.target.value).toLowerCase())
}
useEffect(()=>{
  setFilteredList(List?.filter((sublist)=>{
    if(selected===''){
      return List
    }else if(sublist.tag.includes(selected)){
      return sublist.tag.includes(selected)
    }
    return sublist.title.includes(selected)
  }))
},[selected])


const moveImage = React.useCallback((dragIndex, hoverIndex) => {
  setFilteredList((prevCards) => {
    const clonedCards = [...prevCards];
    const removedItem = clonedCards.splice(dragIndex, 1)[0];
    clonedCards.splice(hoverIndex, 0, removedItem);
    return clonedCards;
  });
}, []);

  return (
    <div className='gallery'>
      {(loading)&&(
      <div className="loading-spin">
      <div className="spinner">
      </div>
    </div>
      )}
        <Navbar/>
        <div className='gallery_body'>
            <h1>Explore gallery</h1>
            <input type='search' placeholder='Search! Lady, beards...' onInput={search}/>
            <div className='tabs' onClick={filterClick}>
                <div id='' className={`${selected===''&&'active'}`}>All</div>
                <div id='male' className={`${selected==='male'&&'active'}`}>Male</div>
                <div id='female' className={`${selected==='female'&&'active'}`}>Female</div>
                <div id='kid' className={`${selected==='kid'&&'active'}`}>Kids</div>
            </div>
            <div className='images-sect'>
              {filteredList?.map((sublist, index)=>{
                return <>
                <Card key={sublist?.id} id={sublist?.id} src={sublist?.image} alt={sublist?.title} index={index} moveImage={moveImage} onLoad={handleImageLoad}/>
                </>
              })}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Gallery
