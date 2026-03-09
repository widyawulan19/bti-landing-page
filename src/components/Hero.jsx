import React, { useEffect } from 'react'
import '../styles/Hero.css'
import heroImg from '../assets/hero.png';
import {Link} from 'react-router-dom'
import AOS from 'aos'

function Hero() {

    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:false
        })
        AOS.refresh();
    },[])

  return (
    <section className='hero-container' id="home">
        <div className="hero-box">
            <div className="hero-left" >
                <div className="left-btn fade-up">
                    <button>
                        Transforming Ideas into Reality
                    </button>
                </div>
                <div className="left-desc fade-up delay-1">
                    <h1>Delivering <span>Technology Solutions</span> </h1>
                    <p>We provide enterprise-grade digital solutions tailored to your business needs, helping you scale with confidence and modern technology.</p>
                </div>
                <div className="action-btn fade-up delay-2">
                    
                    <button className='active'><Link to="/#project">View Our Porto</Link></button>
                    <button className='normal'><Link to="/#contact">Get in Touch</Link></button>
                </div>
            </div>
            <div className="hero-right hero-right-anim">
                <div className="right-box">
                    {/* Overlay Top Right */}
                    <div className="overlay-card overlay-top pop delay-3">
                        <h2>5+</h2>
                        <p>YEARS OF EXCELLENCE</p>
                    </div>

                    {/* Overlay Bottom Left */}
                    <div className="overlay-card overlay-bottom pop delay-4">
                        <h3>99.9%</h3>
                        <p>RELIABILITY RATE</p>
                    </div>

                    <img src={heroImg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero