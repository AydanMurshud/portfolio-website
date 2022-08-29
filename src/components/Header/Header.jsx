import React from 'react';
import './Header.css'
import Nav from './Nav/Nav'
import './Nav/Nav.css'
import profilePic from './../../assets/profilePic.png'
import cv from './../../assets/CV.pdf'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import Social from './Social';

const Header = () => {
    return (
        <header id='header'>
            <div className="container header__container">
                <div className="social">
                    <Social />
                </div>
                <div className="hero">
                    <div className="profilePic">
                        <img src={profilePic} alt="" />
                    </div>
                    <div className="intro">
                        <h5>Hello, I'm</h5>
                        <h1>Aydan Murshud</h1>
                        <p>Web development student with a huge desire to develop and upgrade his skills in
a real work environment. Willing to learn from the best and eager to face the
encountered challenges.</p>
                        <div className="cta-container">
                            <a href={cv} download>Download CV</a>
                            <a className="cta" href="#contacts">Contact</a>
                        </div>
                    </div>
                </div>
                <div className="scroll">
                    <a href="#footer"><small>Scroll <span>Down <BsFillArrowDownCircleFill /></span></small></a>
                </div>
            </div>
            <Nav />
            <div class="divider">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
        </header>
    )
}

export default Header