import React from 'react'
import './../Nav/Nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { FaGraduationCap } from 'react-icons/fa'
import { MdWorkOutline } from 'react-icons/md'
import { BsCodeSlash } from 'react-icons/bs'
import { MdConnectWithoutContact } from 'react-icons/md'

const Nav = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="#home"><AiOutlineHome /></a>
        <a href="#education"><FaGraduationCap /></a>
        <a href="#experiance"><MdWorkOutline /></a>
        <a href="#projects"><BsCodeSlash /></a>
        <a href="#contacts"><MdConnectWithoutContact/></a>
      </div>
    </nav>
  )
}

export default Nav