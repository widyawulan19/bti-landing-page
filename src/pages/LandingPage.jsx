import React from 'react'
import '../styles/LandingPage.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Expertise from '../components/Expertise'
import About from '../components/About'
import Scope from '../components/Scope'
import Clients from '../components/Clients'
import ContactSection from '../components/ContactSection'
import Porto2 from '../components/Porto2'
import Footer from '../components/Footer'
import ServiceHighlight from '../components/ServiceHighlight'

const LandingPage=()=> {
  return (
    <div className='landing-container'>
      <Navbar/>
      <Hero/>
      <ServiceHighlight/>
      <Expertise/>
      <About/>
      <Scope/>
      <Porto2/>
      <Clients/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default LandingPage