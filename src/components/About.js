import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import avatar from '../assets/Avatar.png'
import './About.scss'

const Contributor = ({contributor}) => {
  return (
    <div className='m-3 text-center'>
      <div className='cont-img rounded-circle overflow-hidden width'>
        <img className='w-100' src={contributor.avatar_url}/>
      </div>
      <a 
        href={contributor.html_url} 
        className='fw-bold'
      >
        {contributor.login}
      </a >
      <div>{contributor.contributions} commit(s)</div>
    </div>
  )
}

const Contributors = () => {
  const [contributors, setContributors] = useState()

  useEffect(() => {
    axios.get('https://api.github.com/repos/npnkhoi/oneschedule/contributors')
    .then((res) => {
      setContributors(res.data)
    })
  }, [])

  if (contributors) {
    return (
    <div className='d-flex flex-row flex-wrap'>
      {contributors
      .filter(contributor => contributor.login !== 'pazabol')
      .map((contributor) => (
        <Contributor contributor={contributor} key={contributor.login} />
      ))} 
            
    </div>
    )
  } else {
    return (<div>Loading ...</div>)
  }
}

const About = () => {
  return (
    <div className='d-flex flex-column align-items-center text-start m-auto o-big-body
      col-md-8'>
        <Helmet>
          <title>About - OneSchedule</title>
        </Helmet>
      <p className='o-title'>Hi there!</p>

      <div className='d-flex flex-column flex-md-row align-items-center justify-content-between'>
        <div className='d-flex flex-column col-6 align-items-center flex-shrink-0 col-md-4'>
          <img src={avatar} className='w-100' alt='avatar of Khoi'/>
          
          <div className='d-flex flex-row mt-2'>
            <a href='https://github.com/npnkhoi'>
              <i className='fab fa-github 2x o-dark-primary'/>
            </a>
            <a href='https://www.linkedin.com/in/npnkhoi/'>
              <i className='fab fa-linkedin-in 2x o-dark-primary ms-2'/>
            </a>
            <a href='mailto: khoi.nguyen.190037@student.fulbright.edu.vn'>
              <i className='far fa-envelope 2x o-dark-primary ms-2'/>
            </a>
          </div>
        </div>
        
        <div className='mt-4 mt-md-0 ms-md-4'>
          <p>My name is Khoi. I am a Fulbright student and I program for fun. I don&apos;t like copying class schedule to paper before each semester, when thinking which courses to choose. Therefore, I built OneSchedule to visualize course schedules. This app is inspired by <a href='https://nusmods.com/'>NUSMods</a>.</p>
          <p>
            OneSchedule is not an official channel of Fulbright.
            OneSchedule is free and open-source (
            <a href='https://github.com/npnkhoi/oneschedule'>Github</a>
            ).
            
          </p>
        </div>
      </div>

      <div className='mt-5'>
      <div className='o-heading o-dark-primary'>Our developers</div>
        <Contributors />
        <p className='o-heading o-dark-primary'>Special thanks to:</p>
        
        <ul>
          <li>Le Thuc Minh Chau for being the first person to support this idea.</li>
          <li> <a href='https://fullstackopen.com/en/'>Full Stack open course</a> from University of Helsinki for teaching me everything about fullstack web development.</li>
          <li>The kind reviewers -- Huyen Nguyen, Tuong Minh, Binh Giang, chi Duyen (Ann), Dan Tam & Huy Vu, anh Vu Le, and more -- for showing me how to improve.</li>
        </ul>
      </div>
      
      <iframe width='80%' height="400" src="https://www.youtube.com/embed/KKc_RMln5UY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default About
