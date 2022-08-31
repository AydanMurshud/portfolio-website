import React from 'react'
import Social from './Social'
import Nav from './Nav/Nav'
import './Nav/Nav.css'
import profilePic from './../../assets/profilePic.png'
import cv from './../../assets/CV.pdf'


const Header = () => {
  return (
    <header>

      <div className="container header__container">
        <Nav />
        <div className="social"><Social /></div>
        <div className="profilePic">
          <img src={profilePic} alt="" />
        </div>
        <div className="intro">
          <h5>Hello, I'm</h5>
          <h1>Aydan Murshud</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quos veritatis dolores beatae nam doloremque sint modi natus? Quo, exercitationem amet in eaque repellendus repellat quisquam maiores eos commodi odit ex vero autem doloremque impedit dolorum id dolore molestias, doloribus nihil eligendi ratione. Incidunt, ducimus!</p>
          <div className="cta-container">
            <a className='btn cta' href="">Contact</a>
            <a className='btn' href="" download={cv} type="text/html" >Download CV</a>
          </div>
        </div>
      </div>
      <div className="divider">Divider</div>
    </header>
  )
}

export default Header