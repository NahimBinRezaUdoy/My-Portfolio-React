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
              <p> web dev service </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p> using your </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p> requirements specification </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p> requirements specification </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p> requirements specification </p>
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
              <p> highly available functional</p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p> and visually engaging </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p> web products and</p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>both platform-based and </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p> custom web solutions </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p> for enterprises.</p>
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
              <p>Web support and maintenance</p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>services are aimed </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>at ensuring that websites</p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>are highly available </p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p> reliable and stay relevant</p>
            </li>
            <li>
              <BsFillPatchCheckFill className='service__list-icon'/>
              <p>to current business needs</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services