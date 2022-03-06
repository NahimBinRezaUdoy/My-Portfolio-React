import React from 'react'
import './testmonial.css'
import Tasin from '../../assets/tasin.jpg'
import Lemon from '../../assets/lemon.jpg'
import Nayeem from '../../assets/nayeem.jpg'
import Evan from '../../assets/evan.jpg'

const data = [
  {
    avatar: Tasin,
    name: 'MD Tasin Sakib',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non molestiae eligendi ipsa quas maiores vitae repellendus corrupti officiis dolor!'
  },
  {
    avatar: Lemon,
    name: 'Lemon Khan',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non molestiae eligendi ipsa quas maiores vitae repellendus corrupti officiis dolor!'
  },
  {
    avatar: Nayeem,
    name: 'Jannatul Nayeem',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non molestiae eligendi ipsa quas maiores vitae repellendus corrupti officiis dolor!'
  },
  {
    avatar: Evan,
    name: 'Asad Ullah Evan',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non molestiae eligendi ipsa quas maiores vitae repellendus corrupti officiis dolor!'
  },
]

const Testmonial = () => {
  return (
    <section id='testnmonial'>
      <h5>Review from clients</h5>
      <h2>Testmonials</h2>

      <div className="container testimonial__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testmonial