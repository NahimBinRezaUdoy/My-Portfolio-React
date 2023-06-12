import React from 'react'
import './about.css'
import ME from '../../assets/aboutMe.jpeg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {AiFillProject} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2 className='title'>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className="about__card">
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>5+ Clients</small>
            </article>
            <article className="about__card">
              <AiFillProject className='about__icon'/>
              <h5>Project</h5>
              <small>15+ Project</small>
            </article>
          </div>
          
          {/* <p>My name is Nahim Bin Reza. You can call me Udoy. I belong to Mymensingh. My aim is to build a career as a Web Developer . I am a self motivated person.My hobby is to gather Knowledge on technology. I always maintain a positive attitude towards others.My strength is smiling in pain,patience.My weakness is more sensetive.That's all about me.Thnak you.</p> */}
          <p>Successfully implemented and delivered new services across various projects, demonstrating my ability to handle complex development tasks. Played a crucial role in verifying the proper functioning of implemented solutions. Maintained effective communication and collaboration with responsible persons and team members. Demonstrated a commitment to continuous learning and staying informed about industry trends, new technologies</p>

          <a href="#contact" className='btn btn-priamry'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About