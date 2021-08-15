import React from 'react'
import avatar from '../assets/Avatar.png'
import './About.css'

const About = () => {
  return (
    <div className='about d-flex flex-column align-items-center 
      text-start m-auto o-big-body'>
      <p className='o-title'>Hi there!</p>

      <div className='d-flex flex-row align-items-center justify-content-between w-100'>
        <div className='w-25 d-flex flex-column align-items-center flex-shrink-0'>
          <img src={avatar} className='w-100' alt='avatar of Khoi'/>
          
          <div className='d-flex flex-row mt-2'>
            <a href='https://github.com/npnkhoi' target='_blank' rel="noreferrer">
              <i className='fab fa-github 2x o-dark-primary'/>
            </a>
            <a href='https://www.linkedin.com/in/npnkhoi/' target='_blank' rel="noreferrer">
              <i className='fab fa-linkedin-in 2x o-dark-primary ms-2'/>
            </a>
            <a href='mailto: khoi.nguyen.190037@student.fulbright.edu.vn' target='_blank' rel="noreferrer">
              <i className='far fa-envelope 2x o-dark-primary ms-2'/>
            </a>
          </div>
        </div>
        
        <div className='ms-4'>
          <p>My name is Khoi. I am a Fulbright student and I program for fun. I don&apos;t like copying class schedule to paper before each semester, when thinking which courses to choose. Therefore, I built OneSchedule to visualize course schedules. This app is inspried by <a href='https://nusmods.com/' target="_blank" rel="noreferrer">NUSMods</a>.</p>
          <p>OneSchedule is free and open-source (
            <a href='https://github.com/npnkhoi/oneschedule' target='_blank' rel="noreferrer">Github</a>
            ).
          </p>
        </div>
      </div>

      <div className='mt-5'>
        <p className='o-heading o-dark-primary'>Special thanks to:</p>
        
        <ul>
          <li>Le Thuc Minh Chau for being the first person to support this idea.</li>
          <li>Fulbright Registrar Office for generously providing the data of the courses.</li>
          <li> <a href='https://fullstackopen.com/en/'>Full Stack open course</a> from University of Helsinki for teaching me everything about fullstack web development.</li>
          <li>The kind reviewers -- Huyen Nguyen, Tuong Minh, Binh Giang, chi Duyen (Ann), Dan Tam & Huy Vu, anh Vu Le, and more -- for showing me how to improve.</li>
        </ul>
      </div>
      
      <iframe width="560" height="315" src="https://www.youtube.com/embed/KKc_RMln5UY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default About
