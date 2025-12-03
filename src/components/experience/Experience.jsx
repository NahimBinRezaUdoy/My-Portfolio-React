import React from 'react'
import './experience.css'
import {BsBookmarkCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Expertise</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <div>
                <h4>React.js</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <div>
                <h4>Next.js</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <div>
                <h4>Tailwind CSS</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Frontend */}

        <div className="experience__backend">
          <h3>Backend & Full Stack</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <div>
                <h4>Laravel</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <div>
                <h4>REST API Development</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <div>
                <h4>API Integration</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details__icon'/>
              <div>
                <h4>Full Stack Development</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience