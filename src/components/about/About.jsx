import React from 'react'
import './about.css'
import ME from '../../assets/aboutme.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {AiFillProject} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working Experience</small>
            </article>
            <article className="about__card">
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>5+ Clients</small>
            </article>
            <article className="about__card">
              <AiFillProject className='about__icon'/>
              <h5>Project</h5>
              <small>15+ Completed Project</small>
            </article>
          </div>
          
          <p>My name is Nahim Bin Reza. You can call me Udoy. I belong to Mymensingh. My aim is to build a career as a Web Developer . I am a self motivated person.My hobby is to gather Knowledge on technology. I always maintain a positive attitude towards others.My strength is smiling in pain,patience.My weakness is more sensetive.That's all about me.Thnak you.</p>

          <a href="#contact" className='btn btn-priamry'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About