import React from 'react'
// import {AiFillInstagram,AIOutlineTwitter} from 'react-icons/ai'
import {BiLogoInstagramAlt,BiLogoTwitter} from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p >2023 Nice Store All rights reserverd</p>
      <p className='icons'>
      <BiLogoInstagramAlt/>
      <BiLogoTwitter/>
      </p>
    </div>
  )
}

export default Footer