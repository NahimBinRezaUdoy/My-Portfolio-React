import React from 'react'
import './about.css'
import ME from '../../assets/aboutMe.jpeg'
import { FaAward, FaUsers, FaCode, FaRocket, FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaLaptopCode } from 'react-icons/fa'
import { AiFillProject, AiFillTool } from 'react-icons/ai'
import { BsCalendarCheck } from 'react-icons/bs'
import { MdWork, MdSchool } from 'react-icons/md'

const About = () => {
  const stats = [
    {
      icon: <FaAward />,
      title: 'Experience',
      value: '5+ Years',
      description: 'Professional Development'
    },
    {
      icon: <FaUsers />,
      title: 'Clients',
      value: '20+',
      description: 'Satisfied Worldwide'
    },
    {
      icon: <AiFillProject />,
      title: 'Projects',
      value: '50+',
      description: 'Successfully Delivered'
    },
    // {
    //   icon: <FaRocket />,
    //   title: 'Startups',
    //   value: '15+',
    //   description: 'Built From Scratch'
    // }
  ]

  const expertise = [
    { name: 'Laravel', level: 95, icon: <FaCode /> },
    { name: 'React/Next.js', level: 90, icon: <AiFillTool /> },
    { name: 'REST APIs', level: 92, icon: <FaLaptopCode /> },
    { name: 'MySQL', level: 88, icon: <FaCode /> }
  ]

  return (
    <section id='about'>
      <div className="container">
        {/* Header */}
        <div className="about__header">
          <h5>Get To Know</h5>
          <h2 className='title'>About Me</h2>
          <p className="about__subtitle">
            Passionate Full-Stack Developer crafting digital excellence
          </p>
        </div>

        <div className="about__container">
          {/* Left Column: Image, Quick Info, and Stats */}
          <div className="about__left">
            {/* Profile Image */}
            <div className="image__wrapper">
              <div className="about__me-image">
                <img src={ME} alt="Nahim Bin Reza Udoy" />
                <div className="image__overlay">
                  <div className="overlay__badge">
                    <FaAward className="badge-icon" />
                    <span>5+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="quick__info">
              <div className="info__item">
                <div className="info__icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info__content">
                  <h4>Location</h4>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="info__item">
                <div className="info__icon">
                  <BsCalendarCheck />
                </div>
                <div className="info__content">
                  <h4>Status</h4>
                  <p>Available for Projects</p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="stats__section">
              <h3>My Journey in Numbers</h3>
              <div className="stats__cards">
                {stats.map((stat, index) => (
                  <div key={index} className="stat__card">
                    <div className="stat__icon">{stat.icon}</div>
                    <div className="stat__content">
                      <h3>{stat.value}</h3>
                      <p>{stat.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Main Content */}
          <div className="about__right">
            {/* Introduction */}
            <div className="intro__section">
              <h3>Hello! I'm <span className="highlight">Nahim Bin Reza Udoy</span></h3>
              <div className="intro__content">
                <p>
                  A passionate <strong>Full-Stack Developer</strong> with 5+ years of experience 
                  specializing in Laravel, React, and modern web technologies. I transform 
                  complex business requirements into elegant, scalable digital solutions.
                </p>
                <p>
                  My expertise spans from building robust backend systems with Laravel 
                  to creating beautiful, responsive frontends with React and Next.js. 
                  I'm committed to delivering high-quality, maintainable code that drives 
                  business growth and exceeds client expectations.
                </p>
              </div>
            </div>

            {/* Expertise Section */}
            <div className="expertise__section">
              <h3>Technical Expertise</h3>
              <div className="expertise__grid">
                {expertise.map((skill, index) => (
                  <div key={index} className="skill__card">
                    <div className="skill__header">
                      <div className="skill__icon">{skill.icon}</div>
                      <div className="skill__info">
                        <h4>{skill.name}</h4>
                        <span className="skill__level">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="skill__bar">
                      <div 
                        className="skill__progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Experience */}
            <div className="timeline__section">
              <h3>Education & Experience</h3>
              <div className="timeline">
                <div className="timeline__item">
                  <div className="timeline__icon">
                    <MdSchool />
                  </div>
                  <div className="timeline__content">
                    <h4>Bachelor's Degree</h4>
                    <p className="timeline__institution">Daffodil International University</p>
                    <p className="timeline__details">Computer Science and Engineering</p>
                    <span className="timeline__year">2021</span>
                  </div>
                </div>
                <div className="timeline__item">
                  <div className="timeline__icon">
                    <MdWork />
                  </div>
                  <div className="timeline__content">
                    <h4>Lead Software Engineer</h4>
                    <p className="timeline__institution">Mentors'</p>
                    <p className="timeline__details">Full-Stack Development & Team Leadership</p>
                    <span className="timeline__year">2024-Present</span>
                  </div>
                </div>
              </div>
            </div>

            

            {/* CTA */}
            <div className="about__cta">
              <a href="#contact" className='btn btn-primary'>
                <FaBriefcase /> Let's Work Together
              </a>
              <a href="#portfolio" className='btn btn-secondary'>
                View My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About