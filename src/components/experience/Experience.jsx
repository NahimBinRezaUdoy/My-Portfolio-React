import React from 'react'
import './experience.css'
import {BsBookmarkCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <h4>React Js</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>
        {/* End of Frontend */}


        <div className="experience__backend">
          <h3>Backend Developer</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <h4>Laravel</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <h4>Python</h4>
              <small className='text-light'>Basic</small>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <h4>C++</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <h4>Java</h4>
              <small className='text-light'>Basic</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience