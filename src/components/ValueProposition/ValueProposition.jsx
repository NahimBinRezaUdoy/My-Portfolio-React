import React from 'react'
import './valueproposition.css'
import { FaCheckCircle, FaRocket, FaShieldAlt, FaClock, FaUsers, FaCode, FaHeadset } from 'react-icons/fa'
import { MdSecurity, MdSpeed, MdSupport } from 'react-icons/md'
import { GiAchievement } from 'react-icons/gi'

const ValueProposition = () => {
  const valuePoints = [
    {
      icon: <FaCheckCircle />,
      title: 'Proven Track Record',
      description: '5+ years of successful project delivery with 100% client satisfaction rate',
      color: '#4ade80'
    },
    {
      icon: <FaRocket />,
      title: 'Fast Delivery',
      description: 'Optimized development process ensuring timely delivery without compromising quality',
      color: '#3b82f6'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Secure Solutions',
      description: 'Industry-standard security practices to protect your application and data',
      color: '#f59e0b'
    },
    {
      icon: <FaClock />,
      title: '24/7 Support',
      description: 'Round-the-clock maintenance and support for your peace of mind',
      color: '#8b5cf6'
    },
    {
      icon: <FaUsers />,
      title: 'Client-Centric Approach',
      description: 'Collaborative development process with regular updates and feedback',
      color: '#ef4444'
    },
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Well-structured, documented, and maintainable code following best practices',
      color: '#06b6d4'
    }
  ]

  const clientResults = [
    {
      metric: '50+',
      label: 'Projects Completed',
      icon: <GiAchievement />
    },
    {
      metric: '100%',
      label: 'Client Satisfaction',
      icon: <MdSupport />
    },
    {
      metric: '2-4x',
      label: 'Faster Development',
      icon: <MdSpeed />
    },
    {
      metric: '24/7',
      label: 'Support Available',
      icon: <FaHeadset />
    }
  ]

  return (
    <section id='value'>
      <div className="container">
        <div className="value__header">
          <h5>Why Work With Me</h5>
          <h2>Delivering Excellence in Every Project</h2>
          <p className="value__subtitle">
            I combine technical expertise with a client-focused approach to deliver solutions that 
            drive business growth and exceed expectations.
          </p>
        </div>

        {/* Value Metrics */}
        <div className="value__metrics">
          {clientResults.map((item, index) => (
            <div key={index} className="metric__card">
              <div className="metric__icon">
                {item.icon}
              </div>
              <div className="metric__content">
                <h3 className="metric__value">{item.metric}</h3>
                <p className="metric__label">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Grid */}
        <div className="value__grid">
          {valuePoints.map((point, index) => (
            <div 
              key={index} 
              className="value__card"
              style={{ '--card-color': point.color }}
            >
              <div className="card__icon" style={{ background: point.color }}>
                {point.icon}
              </div>
              <h3 className="card__title">{point.title}</h3>
              <p className="card__description">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="guarantee__banner">
          <div className="guarantee__content">
            <div className="guarantee__icon">
              <MdSecurity />
            </div>
            <div className="guarantee__text">
              <h3>My Guarantee to You</h3>
              <p>
                <strong>100% Satisfaction Guarantee:</strong> If you're not completely satisfied with 
                my work, I'll make it right or refund your money. Your success is my priority.
              </p>
            </div>
            <a href="#contact" className="guarantee__btn">
              Start Risk-Free
            </a>
          </div>
        </div>

        {/* Process Highlights */}
        <div className="process__section">
          <h3>My Development Process</h3>
          <div className="process__steps">
            <div className="process__step">
              <div className="step__number">1</div>
              <h4>Discovery & Planning</h4>
              <p>Understanding your requirements and planning the optimal solution</p>
            </div>
            <div className="process__step">
              <div className="step__number">2</div>
              <h4>Development & Testing</h4>
              <p>Building with clean code and rigorous testing at every stage</p>
            </div>
            <div className="process__step">
              <div className="step__number">3</div>
              <h4>Deployment & Support</h4>
              <p>Seamless deployment followed by ongoing maintenance and support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValueProposition