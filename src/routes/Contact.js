import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import img4 from '../Images/4.jpg'
import Footer from '../components/Footer'
import ContactForm from '../ContactForm'
function Contact() {
  return (
    <>
      <Navbar/>
    <Hero 
    cName='hero-mid'
    heroImg={img4}
    title="Contact"

    btnClass='hide'
     />
     <ContactForm/>
    <Footer/>
    </>
  )
}

export default Contact