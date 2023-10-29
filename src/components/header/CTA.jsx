import React from 'react'
import CV from '../../assets/Resume_Marko.pdf'


function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download Resume</a>
        </div>
  )
}

export default CTA
