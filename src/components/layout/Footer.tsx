import React from 'react'
// import config from '../utils/config'
import './Footer.scss'

const Footer = () => (
  <div className='d-flex flex-column align-items-center justify-content-center text-center text-white bg-dark py-5'>
    <span>
      Designed and built with love by OneSchedule Team.
    </span>
    <span>
      Copyright © 2021 - Present, OneSchedule.
    </span>
    <div>
      <a className='me-3 text-decoration-none text-secondary'href="https://github.com/npnkhoi/oneschedule">Github</a>
      <a className='me-3 text-decoration-none text-secondary'href="https://www.facebook.com/fuv.oneschedule">Facebook</a>
      <a className='me-3 text-decoration-none text-secondary'href="https://npnkhoi.notion.site/OneSchedule-Updates-c3ce635ee748488a9fa33ecb925e3bdb">Updates</a>
      <a className='me-3 text-decoration-none text-secondary'href="https://npnkhoi.github.io/#/">Author</a>
    </div>
  </div>
)

export default Footer
