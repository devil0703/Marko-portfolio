import React from 'react'
import {AiOutlineHome} from 'react-icons/ai' 
import {AiOutlineUser, AiTwotonePicture} from 'react-icons/ai'
import {BiBook}from 'react-icons/bi'
import {RiServiceLine, } from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import './Nav.css'
import { useState } from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#') //to add the on click funtion to each of the option in the nav bar
  return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : " "}><AiOutlineHome/></a> 
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : " "}><AiOutlineUser/></a>
       <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : " "}><BiBook/> </a>
       <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : " "}><RiServiceLine/></a> 
       <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : " "}><AiTwotonePicture/></a> 
       {/* <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : " "}><BiMessageSquareDetail/></a> */}
        </nav> //curent value is set to # then by default is set to SetActiveNav is anytting other is selected it will be ser to that......
  )
}

export default Nav