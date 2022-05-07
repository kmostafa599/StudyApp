import React from 'react'
import { Link } from 'react-router-dom'
import Facebook from '../assets/logos/Facebook.svg'
import Instagram from '../assets/logos/Instagram.svg'
import Twitter from '../assets/logos/Twitter.svg'
import Youtube from '../assets/logos/Youtube.svg'

import Logo_white from '../assets/Logo_white.svg'
const Footer = () => {
  return (
    <div>
         <section className="bg-black sectionSize">
        <div className="mb-4">
          <img src={Logo_white} alt="Logo" className="h-4" />
        </div>
        <div className="flex mb-8">
          <Link to='/'>
            <img src={Facebook} alt="Facebook logo" className="mx-4" />
          </Link>
          <Link to='/'>
            <img src={Youtube} alt="Youtube logo" className="mx-4" />
          </Link>
          <Link to='/'>
            <img src={Instagram} alt="Instagram logo" className="mx-4" />
          </Link>
          <Link to='/'>
            <img src={Twitter} alt="Twitter logo" className="mx-4" />
          </Link>
        </div>
        <div className="text-white font-montserrat text-sm">
          © 2021 STARTUP. All rights reserved
        </div>
      </section>
    </div>
  )
}

export default Footer