import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const Social = () => {
  return (
    <div className="social">
      <ul>
        <a href=""><BsLinkedin/></a>
        <a href=""><FaGithubSquare/></a>
        <a href=""><FaFacebookSquare/></a>
        <a href=""><FaInstagramSquare/></a>
        <a href=""><IoMdMail/></a>
      </ul>
    </div>
  )
}

export default Social