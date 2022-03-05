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


const data = [
  {
    id: 1,
    image: MovieDesign,
    title: 'Movie Website',
    github: 'https://github.com/NahimBinRezaUdoy/MovieWebsiteDesign',
    demo: 'https://udmovie.netlify.app/'
  },
  {
    id: 2,
    image: PortfolioWeb,
    title: 'This is My Portfolio',
    github: 'https://github.com/NahimBinRezaUdoy/MyResume',
    demo: 'https://nahimudoy.netlify.app/',
  },
  {
    id: 3,
    image: Resume,
    title: 'This is My Resume',
    github: 'https://github.com/NahimBinRezaUdoy/ResumeDesign',
    demo: 'https://nahimresume.netlify.app/',
  },
  {
    id: 4,
    image: DarkClub,
    title: 'DarkClub Website (Design)',
    github: 'https://github.com/NahimBinRezaUdoy/DarkClub',
    demo: 'https://darkclub.netlify.app/',
  },
  {
    id: 5,
    image: DonationNation,
    title: 'Socail Website(Laravel)',
    github: 'https://github.com/NahimBinRezaUdoy/DonationNation',
    demo: 'https://www.youtube.com/watch?v=H7gUID97xOo',
  },
  {
    id: 6,
    image: DigitalClassroom,
    title: 'Online Education System',
    github: 'https://github.com/NahimBinRezaUdoy/Education-Server',
    demo: '#',
  },
  {
    id: 7,
    image: Movie,
    title: 'Movie Website (Laravel)',
    github: 'https://github.com/NahimBinRezaUdoy/MovieApp',
    demo: 'https://www.youtube.com/watch?v=MYBY-AKorJw',
  },
  {
    id: 8,
    image: PostShare,
    title: 'Post Shareing App (Laravel)',
    github: 'https://github.com/NahimBinRezaUdoy/WeShare',
    demo: 'https://www.youtube.com/watch?v=NTmgIBxfSAs',
  },
  {
    id: 9,
    image: Survey,
    title: 'Survey Website (Laravel)',
    github: 'https://github.com/NahimBinRezaUdoy/WeShare',
    demo: 'https://www.youtube.com/watch?v=NTmgIBxfSAs',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target="_blank" >Github</a>
                <a href={demo} className='btn btn-primary' target="_blank" >Live Demo</a>  
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio