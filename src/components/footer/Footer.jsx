import React from 'react'
import './footer.css'

import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {ImTrello} from 'react-icons/im'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Udoy</a>

      <ul className="peramalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testmonial">Testmonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/nahim-bin-reza-udoy/" target="_blank"><AiFillLinkedin/></a>
        <a href="https://github.com/NahimBinRezaUdoy" target="_blank"><AiFillGithub/></a>
        <a href="https://trello.com/nahimbinrezaudoy1/boards" target="_blank"><ImTrello/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Udoy. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer