import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa' 
function HeaderSocial() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/marko-strauss-189a00298/" target=" blank"><BsLinkedin /></a>
        <a href="https://github.com/MarkoStrauss/" target=" blank"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocial