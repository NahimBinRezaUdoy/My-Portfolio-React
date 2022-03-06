import React from 'react'
import './testmonial.css'
import Tasin from '../../assets/tasin.jpg'
import Lemon from '../../assets/lemon.jpg'
import Nayeem from '../../assets/nayeem.jpg'
import Evan from '../../assets/evan.jpg'

const Testmonial = () => {
  return (
    <section id='testnmonial'>
      <h5>Review from clients</h5>
      <h2>Testmonials</h2>

      <div className="container testimonial__container">

        <article className="testimonial">
          <div className="client__avatar">
            <img src={Tasin} alt="Avatar One" />
            <h5 className='client__name'>Tasin Khan</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non molestiae eligendi ipsa quas maiores vitae repellendus corrupti officiis dolor!
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={Lemon} alt="Avatar One" />
            <h5 className='client__name'>Lemon Khan</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non molestiae eligendi ipsa quas maiores vitae repellendus corrupti officiis dolor!
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={Nayeem} alt="Avatar One" />
            <h5 className='client__name'>Even Khan</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non molestiae eligendi ipsa quas maiores vitae repellendus corrupti officiis dolor!
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={Evan} alt="Avatar One" />
            <h5 className='client__name'>Nayeem Khan</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non molestiae eligendi ipsa quas maiores vitae repellendus corrupti officiis dolor!
            </small>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Testmonial