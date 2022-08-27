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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, fugiat labore quisquam incidunt quis illum consequuntur tenetur voluptatem ut eveniet libero ducimus beatae aperiam, maiores itaque? In sint et nemo, excepturi eos magni numquam perferendis quia vel laudantium temporibus, aut vitae error corrupti possimus impedit. </p>
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
            <div class="divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
            <Nav />
        </header>
    )
}

export default Header