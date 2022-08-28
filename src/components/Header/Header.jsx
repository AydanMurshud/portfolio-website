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
        </header>
    )
}

export default Header