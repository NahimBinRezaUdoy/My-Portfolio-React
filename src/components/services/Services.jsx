import React, { useState } from 'react'
import './services.css'
import {BsFillPatchCheckFill, BsArrowRight} from 'react-icons/bs'
import {FaServer, FaCode, FaDatabase, FaReact, FaPaintBrush, FaTools, FaSync, FaRocket, FaMobileAlt} from 'react-icons/fa'

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  
  const services = [
    {
      id: 1,
      title: "Laravel Development",
      icon: <FaServer />,
      description: "Build or fix any Laravel website, API, or backend system",
      features: [
        "Laravel website development",
        "REST API development",
        "CRUD systems & Authentication",
        "Admin dashboards & panels",
        "Database design & optimization",
        "Bug fixing & refactoring",
        "Third-party API integration",
        "Payment gateway integration"
      ],
      whyChoose: [
        "5+ years hands-on experience",
        "Clean, optimized, secure code",
        "Fast delivery",
        "Long-term support"
      ],
      color: "var(--color-primary)"
    },
    {
      id: 2,
      title: "REST API Development",
      icon: <FaCode />,
      description: "Develop REST APIs or integrate third-party APIs",
      features: [
        "REST API development",
        "Authentication (JWT, Sanctum)",
        "JSON response formatting",
        "API documentation",
        "API testing (Postman)",
        "Third-party API integration",
        "Error handling & validation",
        "MySQL database design"
      ],
      whyChoose: [
        "Professional API architect",
        "Consistent response format",
        "Clean and secure endpoints",
        "Superfast delivery"
      ],
      color: "#4CC9F0"
    },
    {
      id: 3,
      title: "Frontend Fixes",
      icon: <FaTools />,
      description: "Fix any HTML, CSS, Bootstrap, or Tailwind issues",
      features: [
        "Fix HTML/CSS issues",
        "Responsive design fixing",
        "Tailwind & Bootstrap UI fixes",
        "Landing page corrections",
        "Styling & layout adjustments",
        "Component redesign",
        "Adding new sections",
        "Cross-browser compatibility"
      ],
      whyChoose: [
        "Fast delivery (1 hour)",
        "Pixel-perfect UI",
        "Expertise in Tailwind, Bootstrap 5",
        "Clean, readable code"
      ],
      color: "#7209B7"
    },
    {
      id: 4,
      title: "React/Next.js Development",
      icon: <FaReact />,
      description: "Build a full React or Next.js website",
      features: [
        "React/Next.js website",
        "Tailwind or Bootstrap styling",
        "API integration",
        "Components-based architecture",
        "Authentication pages",
        "Routing & protected pages",
        "Responsive UI design",
        "High performance build"
      ],
      whyChoose: [
        "Clean component structure",
        "Fast loading & SEO optimized",
        "Modern UI/UX best practices",
        "SEO-friendly architecture"
      ],
      color: "#61DAFB"
    },
    {
      id: 5,
      title: "Landing Page Design",
      icon: <FaPaintBrush />,
      description: "Design landing pages using HTML, CSS, Bootstrap, or Tailwind",
      features: [
        "100% responsive landing page",
        "Clean HTML, CSS, Tailwind, Bootstrap",
        "High-quality modern design",
        "SEO optimized",
        "Contact form integration",
        "Hero section & CTA buttons",
        "Animations & hover effects",
        "Fast loading times"
      ],
      whyChoose: [
        "5 years experience",
        "Pixel perfect implementation",
        "Fast delivery",
        "Unlimited revisions (Premium)"
      ],
      color: "#F72585"
    },
    {
      id: 6,
      title: "Database Optimization",
      icon: <FaDatabase />,
      description: "Fix SQL queries or database issues",
      features: [
        "SQL query optimization",
        "Database performance tuning",
        "MySQL query fixing",
        "Database design review",
        "Index optimization",
        "Query performance analysis",
        "Database migration scripts",
        "Backup & recovery solutions"
      ],
      whyChoose: [
        "Expert in MySQL optimization",
        "Performance-focused solutions",
        "Data integrity assurance",
        "Quick turnaround time"
      ],
      color: "#4361EE"
    },
    {
      id: 7,
      title: "Website Migration",
      icon: <FaSync />,
      description: "Migrate your website to another hosting",
      features: [
        "Full website migration",
        "Database transfer",
        "DNS configuration",
        "SSL certificate setup",
        "Email migration",
        "Backup creation",
        "Testing after migration",
        "Zero downtime migration"
      ],
      whyChoose: [
        "Smooth migration process",
        "Data security guaranteed",
        "Minimal downtime",
        "Post-migration support"
      ],
      color: "#4CC9F0"
    },
    {
      id: 8,
      title: "Website Speed Optimization",
      icon: <FaRocket />,
      description: "Speed up your website performance",
      features: [
        "Page speed optimization",
        "Image optimization",
        "Caching implementation",
        "CDN setup",
        "Code minification",
        "Lazy loading implementation",
        "Database optimization",
        "Performance monitoring"
      ],
      whyChoose: [
        "Significant speed improvement",
        "Google PageSpeed expertise",
        "Better SEO rankings",
        "Improved user experience"
      ],
      color: "#F9C74F"
    },
    {
      id: 9,
      title: "Mobile App API",
      icon: <FaMobileAlt />,
      description: "Create REST API for mobile applications",
      features: [
        "Mobile app API development",
        "Authentication for mobile apps",
        "Push notification setup",
        "File upload/download APIs",
        "Real-time updates",
        "Offline sync capabilities",
        "API security implementation",
        "Scalable architecture"
      ],
      whyChoose: [
        "Mobile-first API design",
        "Secure authentication",
        "Scalable solutions",
        "Cross-platform support"
      ],
      color: "#90BE6D"
    }
  ];

  // Show first 6 services initially, all when showAll is true
  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <section id='services' className='services-section'>
      <div className="services-header">
        <h5 className="section-subtitle">What I Offer</h5>
        <h2 className="section-title">My Services</h2>
        <p className="section-description">
          Professional solutions tailored to your needs with modern technology and best practices
        </p>
      </div>
      
      <div className="services-grid">
        {displayedServices.map((service) => (
          <div 
            key={service.id} 
            className={`service-card ${hoveredService === service.id ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
            style={{ '--service-color': service.color }}
          >
            <div className="service-card__header">
              <div className="service-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
              <div className="service-card__title-wrapper">
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
              </div>
            </div>

            <div className="service-card__content">
              <div className="service-features">
                <h4 className="features-title">Features</h4>
                <ul className="features-list">
                  {service.features.slice(0, 5).map((feature, index) => (
                    <li key={index} className="feature-item space-right-5">
                      <BsFillPatchCheckFill className='feature-icon'/>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="service-why">
                <h4 className="why-title">Why Choose Me</h4>
                <div className="why-tags">
                  {service.whyChoose.map((reason, index) => (
                    <span key={index} className="why-tag">
                      {reason}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="service-cta">
                <button className="service-btn">
                  Get Started
                  <BsArrowRight className="btn-icon" />
                </button>
              </div>
            </div>
            
            <div className="service-card__hover-overlay"></div>
          </div>
        ))}
      </div>
      
      <div className="services-toggle">
        <button 
          className="toggle-btn"
          onClick={() => setShowAll(!showAll)}
        >
          <span>{showAll ? 'Show Less Services' : 'Show All Services'}</span>
          <div className="toggle-icon-wrapper">
            <div className={`toggle-icon ${showAll ? 'up' : 'down'}`}>
              <BsArrowRight />
            </div>
          </div>
        </button>
      </div>
    </section>
  )
}

export default Services