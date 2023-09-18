import { useLayoutEffect, useRef } from "react"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { gsap } from "gsap"

export default function Home() {
  const rollRef = useRef(null)
  useLayoutEffect(()=>{
    const listen=(e)=>{
      const width = window.innerWidth
      const ex = e.clientX;
      const yy = e.clientY;
      if(width>1000){
        gsap.to(rollRef.current, {
          x:ex,
          y:yy,
          duration: 0.35,
          ease: "none",
          overwrite: "auto",
          stagger: 0.035,
        });
      }
     
    }
    window.addEventListener('mousemove', listen)
    return(()=>{
      window.removeEventListener('mousemove',listen)
    })
  })
  return (
   <div className="homepage">
      <div className="roll" ref={rollRef}></div>
      <Navbar/>
      <Header/>
      <Footer/>
   </div>
  )
}
