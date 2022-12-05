import React from 'react'
import { FaGithub } from 'react-icons/fa'

import './Footer.css'

export default function Footer () {
  return (
    <footer>
      <a href='https://github.com/MuKhAlt/odin-shopping-cart' target={'_blank'} rel="noreferrer">
        <FaGithub data-testid='GitHubIcon' />
      </a>
    </footer>
  )
}
