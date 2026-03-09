import React, { useEffect} from 'react'
import '../styles/About.css'
import img from '../assets/aboutfix.png'
import AOS from 'aos';

function About() {

    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:false,
        });
    },[]);

  return (
    <section className='about-container' id='about'>
        <div className="about-title" data-aos='fade-up'>
            <h3>ABOUT US</h3>
            <hr className='line'/>
        </div>
        <div className="about-box">
            <div className="about-img" data-aos='fade-right'>
                <div className="circle">
                <img src={img} alt='about img' />
                </div>
            </div>
            <div className="about-desc" data-aos='fade-up' >
                <h3>
                    To be the leading <span>IT construction, engineering </span> & <span>materials supply</span>  company in Indonesia.
                </h3>
                <div className="total" data-aos='fade-up'>
                    <div className="total1">
                        <h2>30+</h2>
                        <p>PROJECT FINISHED</p>
                    </div>
                    <div className="total1">
                        <h2>12+</h2>
                        <p>HAPPY CLIENTS</p>
                    </div>
                </div>
                <div className="text" data-aos='fade-up'>
                    <p>
                        PT. Bahasa Teknologi Indonesia Established in 2021 we focus to give the best service in IT, Electrical Engineering and Material Supply for our customers such as Development Application Systems, Mechanical Tools, Electrical Tools, Polyurethane and Stationary Supply. Our company strengthen by experiences for many years as your sales consultant.
                        We also supported by high quality product for supporting our customer problem and needs. PT. Bahasa Teknologi Indonesia committed to improve our service and product, give a competitive price product as per customer expectation and eventually enhance our customer satification.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About