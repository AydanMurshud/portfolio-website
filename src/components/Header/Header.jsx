import React from 'react'
import './Header.css'
import Social from './Social'
import Nav from './Nav/Nav'
import './Nav/Nav.css'
import profilePic from './../../assets/profilePic.png'
import cv from './../../assets/CV.pdf'


const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <Social />
        <div className="profilePic">
          <img src={profilePic} alt="" />
        </div>
        <div className="intro">
          <h5>Hello, I'm</h5>
          <h1>Aydan Murshud</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quos veritatis dolores beatae nam doloremque sint modi natus? Quo, exercitationem amet in eaque repellendus repellat quisquam maiores eos commodi odit ex vero autem doloremque impedit dolorum id dolore molestias, doloribus nihil eligendi ratione. Incidunt, ducimus!</p>
          <div className="cta-container">
            <a className='btn' href="" download={cv} type="text/html" >Download CV</a>
            <a className='btn cta' href="">Contact</a>
          </div>
        </div>
      </div>
      <Nav />
      <div className="divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
    </header>
  )
}

export default Header