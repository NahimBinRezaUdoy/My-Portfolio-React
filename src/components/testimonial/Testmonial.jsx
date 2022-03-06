import React from 'react'
import './testmonial.css'
import Tasin from '../../assets/tasin.jpg'
import Lemon from '../../assets/lemon.jpg'
import Nayeem from '../../assets/nayeem.jpg'
import Evan from '../../assets/evan.jpg'

// Import Swiper React components
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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
    <section id='testmonial'>
      <h5>Review From Friends</h5>
      <h2>Testmonials</h2>

      <Swiper className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testmonial