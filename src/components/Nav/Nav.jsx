import React from 'react'
import './Nav.css'
import { AiTwotoneHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillMessage } from 'react-icons/ai'
import { FaUserGraduate } from 'react-icons/fa'
import { AiOutlineQrcode } from 'react-icons/ai'


const Nav = () => {
    return (
        <nav>
            <div className="container nav__container">
                <ul className="menu">
                    <li className="menu-item">
                        <a href="#header"><AiTwotoneHome /></a>
                    </li>
                    <li className="menu-item">
                        <a href="#about"><BsFillPersonFill /></a>
                    </li>
                    <li className="menu-item">
                        <a href="#education"><FaUserGraduate /></a>
                    </li>
                    <li className="menu-item">
                        <a href="#projects"><AiOutlineQrcode /></a>
                    </li>
                    <li className="menu-item">
                        <a href="#contactscls"><AiFillMessage /></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav