import React, { useEffect, useRef, useState } from 'react'
import '../styles/Expertise.css'
import {
    LuBuilding2,
    LuWrench,
    LuNetwork,
    LuPackage,
    LuZap,
    LuShieldCheck,
    LuCode
} from "react-icons/lu";
import AOS from 'aos'

export const keahlian = [
    {
        id: 1,
        name: "Contractor",
        subname: "Professional Construction Solutions",
        desc: "Delivering high-quality construction services with precision, safety, and on-time project completion.",
        icon: <LuBuilding2/>
    },
    {
        id: 2,
        name: "Maintenance",
        subname: "Reliable Maintenance Services",
        desc: "Providing preventive and corrective maintenance to ensure optimal performance and long-term reliability.",
        icon: <LuWrench/>
    },
    {
        id: 3,
        name: "Networking",
        subname: "Secure & Scalable Networking",
        desc: "Designing and implementing efficient network infrastructures for seamless business connectivity.",
        icon: <LuNetwork/>
    },
    {
        id: 4,
        name: "General Supplier",
        subname: "Trusted Industrial Supply Partner",
        desc: "Supplying high-quality materials and equipment to support various operational and project needs.",
        icon: <LuPackage/>
    },
    {
        id: 5,
        name: "Electrical Engineering",
        subname: "Advanced Electrical Solutions",
        desc: "Engineering safe, efficient, and innovative electrical systems for industrial and commercial environments.",
        icon: <LuZap/>
    },
    {
        id: 6,
        name: "System Developer",
        subname: "Custom System Development",
        desc: "Building tailored software solutions to streamline operations and enhance business productivity.",
        icon: <LuCode/>
    },
    {
        id: 7,
        name: "IT Engineering and Security",
        subname: "Integrated IT & Security Solutions",
        desc: "Delivering secure IT infrastructure and advanced security systems to protect your digital assets.",
        icon: <LuShieldCheck/>
    }
];

function Expertise() {

    const ref = useRef()
    const [show, setShow] = useState(false)

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShow(true)
                } else {
                    setShow(false) // supaya animasi ulang saat scroll lagi
                }
            },
            { threshold: 0.2 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()

    }, [])

    // AOS ANIMATION 
    useEffect(() =>{
        AOS.init({
            duration:1000,
            once:false
        })
        // AOS.refresh();
    },[])

    return (
        <section
            className='expert-container'
            id="services"
            ref={ref}
        >

            <div className="expert-desc" data-aos='fade-up' >
                <h1>Our Expertise Domains</h1>
                <hr className='line'/>
                <p>
                    Explore our wide range of professional services designed
                    to give your business a competitive edge in the digital era.
                </p>
            </div>

            <div className="expert-box">

                {keahlian.map((item) => (

                    <div
                        key={item.id}
                        className={`skill-card ${show ? "show" : ""}`}
                    >

                        <div className="skill-icon">
                            {item.icon}
                        </div>

                        <h3>{item.name}</h3>
                        <h4>{item.subname}</h4>
                        <p>{item.desc}</p>

                    </div>

                ))}

            </div>

        </section>
    )
}

export default Expertise