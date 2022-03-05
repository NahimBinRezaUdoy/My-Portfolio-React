import React from 'react'
import './portfolio.css'

import MovieDesign from '../../assets/movieDesign.jpg'
import PortfolioWeb from '../../assets/portfolioWeb.jpg'
import Resume from '../../assets/resume.jpg'
import DarkClub from '../../assets/darkClub.jpg'
import DonationNation from '../../assets/donation.PNG'
import DigitalClassroom from '../../assets/digitalClassroom.PNG'
import Movie from '../../assets/movie.PNG'
import PostShare from '../../assets/weshare.PNG'
import Survey from '../../assets/survey.PNG'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={MovieDesign} alt="" />
          </div>
            <h3>Movie Website</h3>
            <a href="https://github.com/NahimBinRezaUdoy/MovieWebsiteDesign" className='btn' target="_blank" >Github</a>
            <a href="https://udmovie.netlify.app/" className='btn btn-primary' target="_blank" >Live Demo</a>  
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={PortfolioWeb} alt="" />
          </div>
            <h3>This is My Portfolio</h3>
            <a href="https://github.com/NahimBinRezaUdoy/MyResume" className='btn' target="_blank" >Github</a>
            <a href="https://nahimudoy.netlify.app/" className='btn btn-primary' target="_blank" >Live Demo</a>  
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Resume} alt="" />
          </div>
            <h3>This is My Resume</h3>
            <a href="https://github.com/NahimBinRezaUdoy/ResumeDesign" className='btn' target="_blank" >Github</a>
            <a href="https://nahimresume.netlify.app/" className='btn btn-primary' target="_blank" >Live Demo</a>  
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={DarkClub} alt="" />
          </div>
            <h3>DarkClub Website (Design)</h3>
            <a href="https://github.com/NahimBinRezaUdoy/DarkClub" className='btn' target="_blank" >Github</a>
            <a href="https://darkclub.netlify.app/" className='btn btn-primary' target="_blank" >Live Demo</a>  
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={DonationNation} alt="" />
          </div>
            <h3>On this website, Admin can create blogs, events, images (based on any issue). Users can see those and can contact Admin and help if the user wants.</h3>
            {/* <a href="https://github.com/NahimBinRezaUdoy/DonationNation" className='btn' target="_blank" >Github</a> */}
            <a href="https://www.youtube.com/watch?v=H7gUID97xOo" className='btn btn-primary' target="_blank" >Live Demo</a>  
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={DigitalClassroom} alt="" />
          </div>
            <h3>On this website, Admin can create blogs, events, images (based on any issue). Users can see those and can contact Admin and help if the user wants.</h3>
            <a href="https://github.com/NahimBinRezaUdoy/Education-Server" className='btn' target="_blank" >Github</a>
            <a href="#" className='btn btn-primary' target="_blank" >Live Demo</a>  
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Movie} alt="" />
          </div>
            <h3>Movie Website (Laravel)</h3>
            <a href="https://github.com/NahimBinRezaUdoy/MovieApp" className='btn' target="_blank" >Github</a>
            <a href="https://www.youtube.com/watch?v=MYBY-AKorJw" className='btn btn-primary' target="_blank" >Live Demo</a>  
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={PostShare} alt="" />
          </div>
            <h3>Post Shareing App (Laravel)</h3>
            <a href="https://github.com/NahimBinRezaUdoy/WeShare" className='btn' target="_blank" >Github</a>
            <a href="https://www.youtube.com/watch?v=NTmgIBxfSAs" className='btn btn-primary' target="_blank" >Live Demo</a>  
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Survey} alt="" />
          </div>
            <h3>Survey Website (Laravel)</h3>
            <a href="https://github.com/NahimBinRezaUdoy/WeShare" className='btn' target="_blank" >Github</a>
            <a href="https://www.youtube.com/watch?v=NTmgIBxfSAs" className='btn btn-primary' target="_blank" >Live Demo</a>  
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Survey} alt="" />
          </div>
            <h3>Survey Website (Laravel)</h3>
            <a href="https://github.com/NahimBinRezaUdoy/WeShare" className='btn' target="_blank" >Github</a>
            <a href="https://www.youtube.com/watch?v=NTmgIBxfSAs" className='btn btn-primary' target="_blank" >Live Demo</a>  
        </article>
      </div>
    </section>
  )
}

export default Portfolio