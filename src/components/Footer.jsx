import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedinIn, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='h-12 bg-[#063446] mt-20 rounded-t-md'>
      <div className=' text-white flex justify-center gap-4 items-center h-full'>
      <div className="text-sm">Created By Sparsh</div>
      <a href="https://www.instagram.com/itssparshiii" target='_black'><FontAwesomeIcon className='hover:text-[#01d293] hover:scale-110 duration-300' icon={faInstagram} size='xl' /></a>
      <a href="https://www.facebook.com/sparshsharmadav"><FontAwesomeIcon className='hover:text-[#01d293] hover:scale-110 duration-300' icon={faFacebook} size='lg' /></a>
      <a href="https://www.linkedin.com/itssparshiii"><FontAwesomeIcon className='hover:text-[#01d293] hover:scale-110 duration-300' icon={faLinkedinIn} size='lg' /></a>
      <a href="https://x.com"><FontAwesomeIcon className='hover:text-[#01d293] hover:scale-110 duration-300' icon={faXTwitter} size='lg' /></a>
      <a href="https://www.github.com/Sparsh-06"><FontAwesomeIcon className='hover:text-[#01d293] hover:scale-110 duration-300' icon={faGithub} size='lg' /></a>
      </div>
    </div>
  )
}

export default Footer
