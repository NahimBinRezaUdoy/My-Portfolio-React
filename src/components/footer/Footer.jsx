import React from 'react'
import './footer.css'
import { FaLinkedin, FaGithub, FaTrello, FaHeart, FaCode, FaPaperPlane, FaArrowUp } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const footerLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { 
      icon: <FaLinkedin />, 
      href: 'https://www.linkedin.com/in/nahim-bin-reza-udoy/', 
      label: 'LinkedIn',
      color: '#0077B5'
    },
    { 
      icon: <FaGithub />, 
      href: 'https://github.com/NahimBinRezaUdoy', 
      label: 'GitHub',
      color: '#333'
    },
    { 
      icon: <FaTrello />, 
      href: 'https://trello.com/nahimbinrezaudoy1/boards', 
      label: 'Trello',
      color: '#0079BF'
    },
    { 
      icon: <MdEmail />, 
      href: 'mailto:nahimbinrezaudoy@gmail.com', 
      label: 'Email',
      color: '#EA4335'
    }
  ]

  const quickContact = [
    { icon: <MdEmail />, text: 'nahimbinrezaudoy@gmail.com' },
    { icon: <MdLocationOn />, text: 'Dhaka, Bangladesh' }
  ]

  return (
    <footer className="footer">
      {/* Back to Top Button */}
      <button className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp className="arrow-icon" />
      </button>

      {/* Wave Divider */}
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="shape-fill"></path>
        </svg>
      </div>

      <div className="container">
        <div className="footer__content">
          {/* Logo & Tagline */}
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <span className="logo__text">NAHIM</span>
              <span className="logo__highlight">UDOY</span>
            </a>
            <p className="footer__tagline">
              Full-Stack Developer specializing in Laravel & Modern Web Solutions
            </p>
            <div className="footer__badges">
              <span className="badge">🚀 Available for Projects</span>
              <span className="badge">💼 5+ Years Experience</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h3 className="section__title">Quick Links</h3>
            <ul className="footer__links">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer__link">
                    <span className="link__icon">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__section">
            <h3 className="section__title">Get In Touch</h3>
            <div className="contact__info">
              {quickContact.map((item, index) => (
                <div key={index} className="contact__item">
                  <div className="contact__icon">{item.icon}</div>
                  <span className="contact__text">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="newsletter">
              <h4>Stay Updated</h4>
              <p>Subscribe to my newsletter for latest updates</p>
              <a href="mailto:nahimbinrezaudoy@gmail.com?subject=Subscribe%20to%20Newsletter" 
                 className="newsletter__btn">
                <MdEmail className="btn-icon" />
                Subscribe Now
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer__section">
            <h3 className="section__title">Connect With Me</h3>
            <div className="social__links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social__link"
                  style={{ '--social-color': social.color }}
                  aria-label={social.label}
                >
                  <div className="social__icon-wrapper">
                    {social.icon}
                  </div>
                  <span className="social__label">{social.label}</span>
                </a>
              ))}
            </div>
            
            <div className="cta__section">
              <h4>Ready to Start a Project?</h4>
              <a href="#contact" className="cta__btn">
                <FaPaperPlane className="cta-icon" />
                Let's Work Together
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider"></div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <div className="copyright">
            <p>
              <FaCode className="code-icon" /> 
              Crafted with <FaHeart className="heart-icon" /> by 
              <span className="author"> Nahim Bin Reza Udoy</span>
            </p>
            <p className="copyright__text">
              © {new Date().getFullYear()} UdoyPortfolio. All rights reserved.
            </p>
          </div>
          
          <div className="footer__legal">
            <a href="/privacy" className="legal__link">Privacy Policy</a>
            <span className="divider">•</span>
            <a href="/terms" className="legal__link">Terms of Service</a>
            <span className="divider">•</span>
            <a href="/sitemap" className="legal__link">Sitemap</a>
          </div>
        </div>

        {/* Floating Tech Elements */}
        <div className="floating-tech">
          <span className="tech-tag">Laravel</span>
          <span className="tech-tag">React</span>
          <span className="tech-tag">API</span>
          <span className="tech-tag">MySQL</span>
          <span className="tech-tag">Next.js</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer