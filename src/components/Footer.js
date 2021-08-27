import React from 'react'
import config from '../utils/config'
import './Footer.css'

const Footer = () => (
  <div className='footer text-white'>
    Designed and built with love by OneSchedule Team.
    <br></br>
    Copyright © 2021 - Present, OneSchedule. Version {config.version} ({config.last_updated})
  </div>
)

export default Footer
