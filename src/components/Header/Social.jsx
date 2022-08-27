import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import{BsGithub} from 'react-icons/bs'

const Social = () => {
  return (
      <ul>
        <a href=""><BsLinkedin /></a>
        <a href=""><BsGithub/></a>
        <a href=""><BsFacebook /></a>
        <a href=""><BsInstagram /></a>
        <a href=""><GrMail/></a>
    </ul>
  )
}

export default Social