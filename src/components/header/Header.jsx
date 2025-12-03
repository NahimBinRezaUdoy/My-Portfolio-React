import React from 'react'
import './header.css'
import CTA from './CTA'
import { FaCheckCircle, FaArrowDown, FaCode, FaServer, FaDatabase, FaReact, FaRocket, FaUsers, FaAward } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'

const Header = () => {
  const stats = [
    { value: '5+', label: 'Years Experience', icon: <FaAward />, color: '#4db5ff' },
    { value: '50+', label: 'Projects', icon: <FaCode />, color: '#ff6b6b' },
    { value: '20+', label: 'Happy Clients', icon: <FaUsers />, color: '#4ade80' }
  ]

  const expertise = [
    { name: 'Laravel', icon: <FaServer /> },
    { name: 'REST API', icon: <FaCode /> },
    { name: 'React/Next.js', icon: <FaReact /> },
    { name: 'MySQL', icon: <FaDatabase /> }
  ]

  const features = [
    { text: 'High-performance applications', icon: <FaRocket /> },
    { text: 'Clean, maintainable code', icon: <FaCheckCircle /> },
    { text: 'On-time delivery', icon: <IoMdTime /> }
  ]

  return (
    <header className="header">
      <div className="container header__container">
        {/* Animated Background Elements */}
        <div className="bg-elements">
          <div className="element element-1"></div>
          <div className="element element-2"></div>
          <div className="element element-3"></div>
        </div>

        <div className="header__content">
          {/* Left Column - Main Content */}
          <div className="header__left">
            {/* Badges */}
            <div className="badge-container">
              <span className="status-badge">
                <span className="status-dot"></span>
                Available for Projects
              </span>
              <span className="experience-badge">5+ Years Professional</span>
            </div>

            {/* Greeting & Title */}
            <div className="title-section">
              <h5 className="header__greeting">
                <span className="wave">👋</span> Hello! I'm
              </h5>
              
              <h1 className="header__title">
                <span className="header__name">Nahim Bin Reza Udoy</span>
              </h1>
              
              <h2 className="header__subtitle">
                Expert <span className="highlight">Full-Stack Developer</span>
              </h2>
              
              <p className="header__description">
                I build <strong>high-performance web applications</strong> with 5+ years of 
                professional experience in Laravel, React, and modern web technologies. 
                Transforming ideas into scalable digital solutions.
              </p>
            </div>

            {/* Stats in Grid */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card" style={{ '--stat-color': stat.color }}>
                  <div className="stat-icon" style={{ background: stat.color }}>
                    {stat.icon}
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-value">{stat.value}</h3>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="features-list">
              <h4 className="features-title">
                <FaCheckCircle className="title-icon" /> What I Deliver
              </h4>
              <div className="features-items">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">{feature.icon}</div>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Expertise & CTA */}
          <div className="header__right">
            {/* Expertise Panel */}
            <div className="expertise-panel">
              <div className="panel-header">
                <h3>Core Expertise</h3>
                <div className="tech-badge">Tech Stack</div>
              </div>
              
              <div className="expertise-chips">
                {expertise.map((tech, index) => (
                  <div key={index} className="tech-chip">
                    <span className="chip-icon">{tech.icon}</span>
                    <span className="chip-text">{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* Code Snippet */}
              <div className="code-snippet">
                <div className="snippet-header">
                  <div className="window-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="filename">expertise.js</span>
                </div>
                <div className="snippet-content">
                  <div className="code-line">
                    <span className="keyword">const</span>
                    <span className="variable"> expertise</span>
                    <span className="operator"> =</span>
                    <span className="bracket"> [</span>
                  </div>
                  <div className="code-line">
                    <span className="string">  "Laravel Development"</span>
                    <span className="comma">,</span>
                  </div>
                  <div className="code-line">
                    <span className="string">  "REST API Architecture"</span>
                    <span className="comma">,</span>
                  </div>
                  <div className="code-line">
                    <span className="string">  "React/Next.js Apps"</span>
                    <span className="comma">,</span>
                  </div>
                  <div className="code-line">
                    <span className="string">  "Database Optimization"</span>
                  </div>
                  <div className="code-line">
                    <span className="bracket">];</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="cta-section">
              <div className="cta-content">
                <h3>Ready to Start?</h3>
                <p>Let's build something amazing together</p>
                <div className="cta-wrapper">
                  <CTA />
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="trust-badges">
              <div className="trust-badge">
                <FaCheckCircle className="trust-icon" />
                <span>100% Client Satisfaction</span>
              </div>
              <div className="trust-badge">
                <IoMdTime className="trust-icon" />
                <span>On-Time Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll */}
        <div className="header__bottom">
          <a href="#about" className='scroll__down'>
            <span className="scroll-text">Explore My Journey</span>
            <div className="scroll__arrow">
              <FaArrowDown className="scroll__icon" />
            </div>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header