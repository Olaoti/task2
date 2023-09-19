import React, { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import List from './components/List'
import Card from './components/Card.js'


function Gallery() {
   const [selected, setSelected] = useState('')
  const [filteredList, setFilteredList] = useState()
const filterClick = (e)=>{
    setSelected(e.target.id)
}
const search = (e)=>{
  setSelected(e.target.value)
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
        <Navbar/>
        <div className='gallery_body'>
            <h1>Explore gallery</h1>
            <input type='search' placeholder='Search gallery...' onInput={search}/>
            <div className='tabs' onClick={filterClick}>
                <div id='' className={`${selected===''&&'active'}`}>All</div>
                <div id='male' className={`${selected==='male'&&'active'}`}>Male</div>
                <div id='female' className={`${selected==='female'&&'active'}`}>Female</div>
                <div id='kid' className={`${selected==='kid'&&'active'}`}>Kids</div>
            </div>
            <div className='images-sect'>
              {filteredList?.map((sublist, index)=>{
                return <>
                <Card key={sublist?.id} id={sublist?.id} src={sublist?.image} alt={sublist?.title} index={index} moveImage={moveImage}/>
                </>
              })}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Gallery
