import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer-bkg'>
      <p className='footer-p'>Kim Capilla 2022</p>
      <div className='links-container'>
      <a href='https://github.com/kimcapgab' target="_blank" rel="noreferrer">
          <img className='github' src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643482528/Project%204/github-logo_1_fgui4b.png" alt="github" />
          </a>
      <a href='https://www.linkedin.com/in/kim-capilla-gabbert/' target="_blank" rel="noreferrer" >
          <img className='linkedin' src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643482530/Project%204/linkedin-logo_gqiulw.png" alt="linkedin" />
          </a>
      </div>
    </div>

  )
}
