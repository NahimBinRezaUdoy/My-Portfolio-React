import React from 'react'
import './services.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <div className="service">
          <div className="service__head">
            <h3>Web Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>I provide an end-to-end</p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Web dev service </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Using your </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Requirements specification </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Requirements specification </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Requirements specification </p>
            </li>
          </ul>
        </div>
        <div className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>I try my best to deliver</p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Highly available functional</p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>And visually engaging </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Web products and</p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Both platform-based and </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Custom web solutions </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>For enterprises.</p>
            </li>
          </ul>
        </div>
        <div className="service">
          <div className="service__head">
            <h3>Maintaince And Support</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Web support and</p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Maintenance services are  </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Aimed at ensuring that </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Are highly available </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>Reliable and stay relevant</p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>To current business needs</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services