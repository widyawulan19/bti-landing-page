import React, { useEffect } from "react";
import '../styles/Contact.css'
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import AOS from 'aos'

function ContactSection() {

  // animation 
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:false
    })
    AOS.refresh();
  },[])


  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info" data-aos='fade-right'>

            <div className="contact-title">
                <h2>Let's Start a Conversation</h2>
                {/* <hr className="line"/> */}
            </div>
          

          <p className="contact-desc">
            Ready to take your digital presence to the next level? 
            Our consultants are here to help.
          </p>

          <div className="contact-item">
            <div className="contact-icon">
              <FiMail />
            </div>
            <div>
              <h4>Email Us</h4>
              <p>hallo@bti-indo.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FiPhone />
            </div>
            <div>
              <h4>Call Us</h4>
              <p>+62 21 794 5301</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FiMapPin />
            </div>
            <div className="contact-des">
              <h4>Our Headquarters</h4>
              <p>
               Gedung Graha Krama Yudha Lt. 4 Unit B, Duren Tiga, Jakarta Selatan 12760
              </p>
            </div>
          </div>

          {/* <div className="contact-social">
            <span><FaLinkedinIn /></span>
            <span><FaTwitter /></span>
            <span><FaFacebookF /></span>
          </div> */}

        </div>

        {/* RIGHT SIDE FORM */}

        <div className="contact-form" data-aos='zoom-in'>
          <div className="form-header">
            <h3>Send us a message</h3>
            <p className="form-sub">
              We typically respond within 2-4 business hours.
            </p>
          </div>

          

          <form
          action="https://formspree.io/f/mreygobq"
            // action="https://formspree.io/f/xgonenyy"
            method="POST"
          >

            <div className="form-row">
              <div className="row-cont">
                <label>Firts Name</label>
                <input 
                  className="input" 
                  type="text" 
                  name="firstName"
                  placeholder="First Name" 
                  required
                />
              </div>
              <div className="row-cont">
                <label>Last Name</label>
                <input className="input" type="text" name="lastName" placeholder="Last Name" required/>
              </div>
            </div>

            <div className="row-cont">
              <label>Email Address</label>
              <input 
                className="input-email" 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                required
              />
            </div>

            <div className="row-cont">
              <label>Select Service</label>
              <select name="service" required>
                <option>Select Service</option>
                <option>Website Development</option>
                <option>UI/UX Design</option>
                <option>Digital Marketing</option>
            </select>
            </div>
            
            <div className="row-cont">
              <label>Detail Brief</label>
               <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your project..."
                required
              />
            </div>
           

            <button type="submit" className="contact-btn">
              Send Message →
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;