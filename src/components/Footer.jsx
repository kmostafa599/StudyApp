import React from 'react'
import Facebook from '../assets/logos/Facebook.svg'
import Instagram from '../assets/logos/Instagram.svg'
import Lightning from '../assets/logos/Lightning.svg'
import Star from '../assets/logos/Star.svg'
import Sun from '../assets/logos/Sun.svg'
import Twitter from '../assets/logos/Twitter.svg'
import Youtube from '../assets/logos/Youtube.svg'
import favicon from '../assets/favicon.svg'

import Highlight3 from '../assets/Highlight3.svg'
import Logo_white from '../assets/Logo_white.svg'
const Footer = () => {
  return (
    <div>
         <section className="bg-black sectionSize">
        <div className="mb-4">
          <img src={Logo_white} alt="Logo" className="h-4" />
        </div>
        <div className="flex mb-8">
          <a href="#">
            <img src={Facebook} alt="Facebook logo" className="mx-4" />
          </a>
          <a href="#">
            <img src={Youtube} alt="Youtube logo" className="mx-4" />
          </a>
          <a href="#">
            <img src={Instagram} alt="Instagram logo" className="mx-4" />
          </a>
          <a href="#">
            <img src={Twitter} alt="Twitter logo" className="mx-4" />
          </a>
        </div>
        <div className="text-white font-montserrat text-sm">
          © 2021 STARTUP. All rights reserved
        </div>
      </section>
    </div>
  )
}

export default Footer