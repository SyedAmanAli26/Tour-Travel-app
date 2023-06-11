import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import img2 from '../Images/2.jpg'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

function About() {
  return (
    <>
     <Navbar/>
    <Hero 
    cName='hero-mid'
    heroImg={img2}
    title="About"

    btnClass='hide'
     />
     <AboutUs/>
    <Footer/>
    </>
  )
}

export default About