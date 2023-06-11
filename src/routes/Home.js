import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import img1 from '../Images/1.jpg'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Navbar/>
    <Hero 
    cName='hero'
    heroImg={img1}
    title="Your Journey Your Story"
    text='Choose Your Favourite Destination'
    buttonText='Travel Plans'
    url='/'
    btnClass='show'
     />
    <Destination/>
    <Trip/>
    <Footer/>
    </>
  )
}

export default Home