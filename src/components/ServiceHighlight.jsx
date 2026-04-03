import React, { useEffect, useState } from "react";
import "../styles/ServiceHighlight.css";
import img1 from '../assets/produk1.png';
import img2 from '../assets/produk2.png';
import img3 from '../assets/produk3.png';
import AOS from 'aos'
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";


function ServiceHighlight() {
    const [previewImg, setPreviewImg] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:false,
            mirror:true
        })
    })

    const goToProduct = () =>{
        navigate('/product')
    } 

  return (
    <section className="service-highlight">
      <div className="container">

        {/* LEFT CONTENT */}
        <div className="text-content" data-aos='fade-up'>
          <h2>More Than Just Services</h2>
          
          <p>
            We don’t just provide services — we become your trusted partner in delivering complete solutions.
          </p>

          <p>
            From digital solutions to sourcing industrial products, we help you get everything you need in one place.
          </p>

         
        </div>

        {/* IMAGE GRID */}
        <div className="image-wrapper">
            <img src={img1} alt="Produk 1" onClick={() => setPreviewImg(img1)} data-aos="fade-up"/>
            <img src={img2} alt="Produk 2" onClick={() => setPreviewImg(img2)} data-aos="fade-up" data-aos-delay="200"/>
            <img src={img3} alt="Produk 3" onClick={() => setPreviewImg(img3)} data-aos="fade-up" data-aos-delay="300"/>
        </div>

        {/* MODAL PREVIEW */}
        {previewImg && (
            <div className="preview-modal" onClick={() => setPreviewImg(null)}>
            <img src={previewImg} alt="Preview" className="preview-img" />
            </div>
        )}

        <div className="btn-container" data-aos='fade-up'>
             <button className="btn-primary" onClick={goToProduct}>Explore More Product <MdKeyboardArrowRight size={20}/></button>
        </div>

      </div>
    </section>
  );
}

export default ServiceHighlight;