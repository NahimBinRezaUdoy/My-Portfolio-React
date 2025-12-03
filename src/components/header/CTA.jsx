import React from 'react'
import { FaDownload, FaEnvelope, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa'
import { IoDocumentText } from 'react-icons/io5'
import './header.css'

const CTA = () => {
  const cvUrl = '../../assets/NahimBinRezaUdoy.pdf'

  return (
    <div className="cta__container">
      <div className="cta__buttons">
        <a href={cvUrl} download className="cta-btn cv-btn">
          <div className="btn-content">
            <div className="btn-icon-wrapper">
              <FaDownload className="btn-icon" />
              <IoDocumentText className="btn-icon-secondary" />
            </div>
            <div className="btn-text">
              <span className="btn-label">Download CV</span>
              <span className="btn-subtext">PDF Format</span>
            </div>
          </div>
          <div className="btn-badge space-5">Latest</div>
        </a>

        <a href="#contact" className="cta-btn contact-btn">
          <div className="btn-content">
            <div className="btn-icon-wrapper">
              <FaEnvelope className="btn-icon" />
            </div>
            <div className="btn-text">
              <span className="btn-label">Let's Talk</span>
              <span className="btn-subtext">Start Project</span>
            </div>
          </div>
          <div className="btn-arrow">→</div>
        </a>
      </div>

      <div className="social-links">
        <a 
          href="https://linkedin.com/in/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-btn linkedin-btn"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="social-icon" />
          <span className="social-label">LinkedIn</span>
          <div className="social-badge">Pro</div>
        </a>

        <a 
          href="https://github.com/NahimBinRezaUdoy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-btn github-btn"
          aria-label="GitHub Profile"
        >
          <FaGithub className="social-icon" />
          <span className="social-label">GitHub</span>
          <div className="social-badge">50+ Repos</div>
        </a>

        <a 
          href="https://your-boardsite.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-btn board-btn"
          aria-label="Portfolio Board"
        >
          <FaCode className="social-icon" />
          <span className="social-label">Portfolio</span>
          <div className="social-badge">View</div>
        </a>
      </div>
    </div>
  )
}

export default CTA