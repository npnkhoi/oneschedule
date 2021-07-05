import React from 'react'
import './index.css'

const CTA = ({link, text}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className='text-decoration-none'>
      <div className='cta'>
        <div className='o-heading'>{text}</div>
      </div>
    </a>
  )
}

export default CTA
