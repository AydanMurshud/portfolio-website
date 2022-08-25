import React from 'react';
import './Header.css'
import profilePic from './../../assets/profilePic.png'
import cv from './../../assets/CV.pdf'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import Social from './Social';

const Header = () => {
    return (
        <header id='header'>
            <div className="container header__container">
                <Social />
                <div className="hero">
                    <div className="profilePic">
                        <img src={profilePic} alt="" />
                    </div>
                    <div className="intro">
                        <h5>Hello, I'm</h5>
                        <h1>Aydan Murshud</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, fugiat labore quisquam incidunt quis illum consequuntur tenetur voluptatem ut eveniet libero ducimus beatae aperiam, maiores itaque? In sint et nemo, excepturi eos magni numquam perferendis quia vel laudantium temporibus, aut vitae error corrupti possimus impedit. </p>
                        <div className="cta-container">
                            <a href={cv} download>Download</a>
                            <a className="cta" href="#">Contact</a>
                        </div>
                    </div>
                </div>
                <small>Scrol Down <span><BsFillArrowRightCircleFill /></span></small>
            </div>
        </header>
    )
}

export default Header