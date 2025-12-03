import React, { useState } from 'react'
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
import DemoProfile from '../../assets/demoProfile1.png'
import FinanceNextVerseSkill from '../../assets/FinanceNextVerseSkill.png'
import HolidayZoon from '../../assets/holidayZoon.png'

const data = [
  {
    id: 1,
    image: DonationNation,
    title: 'DonationNation - Social Platform',
    description: 'Full-featured social donation platform with user profiles, donations, and community features',
    github: 'https://github.com/NahimBinRezaUdoy/DonationNation',
    demo: 'https://www.youtube.com/watch?v=H7gUID97xOo',
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'REST API'],
    featured: true
  },
  {
    id: 2,
    image: Movie,
    title: 'Movie Database',
    description: 'Movie catalog and review system with user ratings and recommendations',
    github: 'https://github.com/NahimBinRezaUdoy/MovieApp',
    demo: 'https://www.youtube.com/watch?v=MYBY-AKorJw',
    tags: ['Laravel', 'API', 'Bootstrap', 'MySQL'],
    featured: true
  },
  {
    id: 3,
    image: HolidayZoon,
    title: 'HolidayZone - Travel Website',
    description: 'Travel and holiday booking platform',
    github: '#',
    demo: 'https://holidayzone.netlify.app/',
    tags: ['React', 'CSS', 'Travel', 'Booking'],
    featured: true
  },
  {
    id: 4,
    image: PostShare,
    title: 'WeShare - Social Media Platform',
    description: 'Post sharing application with likes, comments, and user interactions',
    github: 'https://github.com/NahimBinRezaUdoy/WeShare',
    demo: 'https://www.youtube.com/watch?v=NTmgIBxfSAs',
    tags: ['Laravel', 'MySQL', 'AJAX', 'Bootstrap'],
    featured: true
  },
  {
    id: 5,
    image: FinanceNextVerseSkill,
    title: 'NextVerse Finance - Financial Dashboard',
    description: 'Financial management dashboard with analytics',
    github: '#',
    demo: 'https://nextverseskillfinance.netlify.app/',
    tags: ['Next.js', 'Tailwind', 'Finance', 'Dashboard'],
    featured: true  
  },
  {
    id: 6,
    image: MovieDesign,
    title: 'Movie Website (Frontend)',
    description: 'Modern movie browsing interface with responsive design',
    github: 'https://github.com/NahimBinRezaUdoy/MovieWebsiteDesign',
    demo: 'https://udmovie.netlify.app/',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    featured: false
  },
  {
    id: 7,
    image: PortfolioWeb,
    title: 'Portfolio Website',
    description: 'Professional portfolio website with modern design',
    github: 'https://github.com/NahimBinRezaUdoy/MyResume',
    demo: 'https://nahimudoy.netlify.app/',
    tags: ['React', 'CSS', 'JavaScript', 'Responsive'],
    featured: false
  },
  {
    id: 8,
    image: DemoProfile,
    title: 'Portfolio - Md. Rahman',
    description: 'Earlier version of my portfolio website',
    github: '#',
    demo: 'https://udoyportfolio1.netlify.app/',
    tags: ['HTML', 'CSS', 'JavaScript', 'Portfolio'],
    featured: true
  },
  {
    id: 9,
    image: Survey,
    title: 'Survey System',
    description: 'Survey creation and management system with analytics dashboard',
    github: 'https://github.com/NahimBinRezaUdoy/WeShare',
    demo: 'https://www.youtube.com/watch?v=NTmgIBxfSAs',
    tags: ['Laravel', 'MySQL', 'Charts', 'Bootstrap'],
    featured: false
  },
  {
    id: 10,
    image: Resume,
    title: 'Resume Design',
    description: 'Interactive resume/CV template with clean layout',
    github: 'https://github.com/NahimBinRezaUdoy/ResumeDesign',
    demo: 'https://nahimresume.netlify.app/',
    tags: ['HTML', 'CSS', 'JavaScript', 'Design'],
    featured: false
  },
  {
    id:11,
    image: DarkClub,
    title: 'DarkClub Website Design',
    description: 'Dark theme website design for entertainment',
    github: 'https://github.com/NahimBinRezaUdoy/DarkClub',
    demo: 'https://darkclub.netlify.app/',
    tags: ['HTML', 'CSS', 'JavaScript', 'Dark Theme'],
    featured: false
  },
  {
    id: 12,
    image: DigitalClassroom,
    title: 'Digital Classroom - Online Education System',
    description: 'Comprehensive e-learning platform with course management and student tracking',
    github: 'https://github.com/NahimBinRezaUdoy/Education-Server',
    demo: '#',
    tags: ['Laravel', 'MySQL', 'JavaScript', 'CSS'],
    featured: false
  }
]

const professionalExperience = [
  {
    id: 1,
    company: 'Mentors\'',
    position: 'Lead Software Engineer',
    period: 'May 2025 - Present · 8 mos',
    location: 'Dhaka, Bangladesh · On-site',
    fullPeriod: 'Mar 2024 - Present · 1 yr 10 mos',
    isCurrent: true,
    responsibilities: [
      'Leading a team of developers in designing and implementing scalable software solutions',
      'Mentoring developers, conducting code reviews, and ensuring best coding practices',
      'Overseeing architecture decisions, complex system designs, and technical roadmaps',
      'Ensuring system performance, security, and scalability',
      'Taking ownership of critical projects and ensuring timely, high-quality delivery'
    ],
    skills: ['Team Leadership', 'Project Management', 'System Architecture', 'Code Review', 'Mentoring', 'Scalability']
  },
  {
    id: 2,
    company: 'Mentors\'',
    position: 'Software Engineer',
    period: 'Mar 2024 - May 2025 · 1 yr 3 mos',
    location: 'Dhaka, Bangladesh · On-site',
    fullPeriod: '',
    isCurrent: false,
    responsibilities: [
      'Managing project lifecycles, from requirement gathering to deployment & maintenance',
      'Participated in end-to-end project lifecycles—from requirement analysis to deployment and maintenance',
      'Contributed to performance optimization, security improvements, and system enhancements',
      'Developing high-performance, secure, and efficient web applications using Laravel, React, and AWS',
      'Overseeing database architecture & API development, ensuring optimal performance and security',
      'Collaborating with cross-functional teams to meet business objectives and enhance system functionality'
    ],
    skills: ['Software Development', 'SDLC', 'Laravel', 'React', 'AWS', 'API Development', 'Database Architecture']
  },
  {
    id: 3,
    company: 'Business Automation Ltd',
    position: 'Software Engineer',
    period: 'Mar 2022 - Mar 2024 · 2 yrs 1 mo',
    location: 'Dhaka, Bangladesh · On-site',
    fullPeriod: '',
    isCurrent: false,
    responsibilities: [
      'Played a key role in high-profile government projects including Bangladesh Investment Development Authority (BIDA)',
      'Developed Travel Agency Management System (MoCAT) for government use',
      'Contributed to Bangladesh Hi-Tech Park Authority (BHTPA) projects',
      'Worked on BSTI eApplication System for Bangladesh Testing and Standards Institute',
      'Designed and introduced new features & mechanisms to enhance project functionality and usability',
      'Developed and maintained scalable, secure, and efficient software solutions',
      'Wrote clean, maintainable code following industry best practices & standards'
    ],
    skills: ['Software Design', 'Software Development', 'Government Projects', 'System Integration', 'Code Quality']
  },
  {
    id: 4,
    company: 'Datatech BD Ltd.',
    position: 'Web Application Developer',
    period: 'Jan 2022 - Mar 2022 · 3 mos',
    location: 'Dhaka, Bangladesh · On-site',
    fullPeriod: '',
    isCurrent: false,
    responsibilities: [
      'Designed and developed responsive web applications for seamless user experiences',
      'Ensured cross-device compatibility and optimized website performance',
      'Worked closely with clients to understand business requirements and deliver tailored solutions'
    ],
    skills: ['Web Development', 'Responsive Design', 'Client Collaboration', 'Performance Optimization']
  }
]
const Portfolio = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllExperience, setShowAllExperience] = useState(false);
  
  // Show featured projects initially (6 projects), all when showAllProjects is true
  const displayedProjects = showAllProjects ? data : data.filter(project => project.featured);
  
  // Show all experience or just current role based on toggle
  const displayedExperience = showAllExperience ? professionalExperience : professionalExperience.slice(0, 1);

  return (
    <section id='portfolio'>
      <h5>My Professional Journey</h5>
      <h2>Experience & Portfolio</h2>

      <div className="portfolio__experience">
        <div className="container">
          <div className="experience__header">
            <h3>Professional Experience</h3>
            {professionalExperience.length > 1 && (
              <button 
                className="experience__toggle-btn"
                onClick={() => setShowAllExperience(!showAllExperience)}
              >
                {showAllExperience ? 'Show Current Role' : 'Show All Experience'}
              </button>
            )}
          </div>
          
          {displayedExperience.map((exp) => (
            <div key={exp.id} className="experience__item">
              <div className="experience__header-info">
                <h4>{exp.position}</h4>
                <span className={`experience__status ${exp.isCurrent ? 'current' : 'past'}`}>
                  {exp.isCurrent ? 'Current' : 'Past'}
                </span>
              </div>
              <div className="experience__company">
                <span className="experience__company-name">{exp.company}</span>
                <span className="experience__period">{exp.period}</span>
              </div>
              {exp.fullPeriod && (
                <div className="experience__full-period">
                  <small>{exp.fullPeriod}</small>
                </div>
              )}
              <p className="experience__location">{exp.location}</p>
              
              <div className="experience__responsibilities">
                <h5>Key Responsibilities & Achievements:</h5>
                <ul>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
              
              <div className="experience__skills">
                <h5>Skills:</h5>
                <div className="skills__tags">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill__tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          {professionalExperience.length > 1 && (
            <div className="experience__toggle-bottom">
              <button 
                className="btn btn-primary"
                onClick={() => setShowAllExperience(!showAllExperience)}
              >
                {showAllExperience ? 'Show Current Role Only' : 'Show Full Experience History'}
                <span className="experience__toggle-icon">
                  {showAllExperience ? ' ↑' : ' ↓'}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="portfolio__projects">
        <div className="container">
          <h3>Project Portfolio</h3>
          <div className="portfolio__container">
            {displayedProjects.map(({ id, image, title, description, github, demo, tags }) => (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p className="portfolio__description">{description}</p>
                <div className="portfolio__tags">
                  {tags.map((tag, index) => (
                    <span key={index} className="portfolio__tag">{tag}</span>
                  ))}
                </div>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank" rel="noopener noreferrer">
                    {github !== '#' ? 'GitHub' : 'Private'}
                  </a>
                  <a href={demo} className='btn btn-primary' target="_blank" rel="noopener noreferrer">
                    {demo !== '#' ? 'Live Demo' : 'Coming Soon'}
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          {data.length > 6 && (
            <div className="portfolio__toggle">
              <button 
                className="btn btn-primary"
                onClick={() => setShowAllProjects(!showAllProjects)}
              >
                {showAllProjects ? 'Show Less Projects' : 'Show More Projects'}
                <span className="portfolio__toggle-icon">
                  {showAllProjects ? ' ↑' : ' ↓'}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Portfolio