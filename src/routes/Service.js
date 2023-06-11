import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import img3 from '../Images/3.jpg'
import Footer from '../components/Footer'
import Trip from '../components/Trip'
function Service() {
  return (
    <>
      <Navbar/>
    <Hero 
    cName='hero-mid'
    heroImg={img3}
    title="Service"

    btnClass='hide'
     />
     <Trip/>
    <Footer/>
    </>
  )
}

export default Service