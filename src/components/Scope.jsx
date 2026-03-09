import React, { useEffect, useState } from 'react'
import '../styles/Scope.css'
import { scopeList } from '../data/scope' 
import { FaCheck } from 'react-icons/fa6';
import AOS from 'aos';
import { Link } from 'react-router-dom';

function Scope() {

  const [selectedScope, setSelectedScope] = useState(null)

  const handleOpenModal = (scope) => {
    setSelectedScope(scope)
  }

  const handleCloseModal = () => {
    setSelectedScope(null)
  }

  // animate 
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:false,
      mirror:true
    })
    AOS.refresh();
  },[]);

  return (
    <section className='scope-container' id='scope'>

      <div className="scope-header" data-aos='fade-up'>
        <h3>SCOPE OF WORK</h3>
        <hr className='line'/>
        <h2>Discover What We Do & Offer To Our Clients</h2>
      </div>

      <div className="scope-box">
        {scopeList.map((scope,i) => (
          <div 
            className="scope-card" 
            key={scope.id} 
            data-aos='zoom-in'
            data-aos-delay={i * 200}
          >

            <div className="scope-icon">
              <span>{scope.icon}</span>
            </div>

            <h4>{scope.title}</h4>

            <div className="scope-list">
              {scope.list.slice(0, 4).map((item) => (
                <div className="list-item" key={item.id}>
                  <FaCheck className='icon-check'/>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>

            {scope.list.length > 4 && (
              <button 
                className="detail-btn"
                onClick={() => handleOpenModal(scope)}
              >
                Detail Scope
              </button>
            )}

            <button className='scope-btn'><Link to="/#contact">Contact Team</Link></button>

          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedScope && (
        <div className="scope-modal-overlay" onClick={handleCloseModal}>
          <div className="scope-modal" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedScope.title}</h3>

            <div className="modal-list">
              {selectedScope.list.map((item) => (
                <div className="list-item" key={item.id}>
                  <FaCheck className='icon-check'/>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>

            <button className="detail-btn" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}

    </section>
  )
}

export default Scope