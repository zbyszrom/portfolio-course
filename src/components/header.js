import { Link } from "gatsby"
import React from "react"

import logo from '../images/logo.png'
import HeaderContent from './headerContent'
//import { AnchorLink } from "gatsby-plugin-anchor-links";
// to use smoth scrollong to an anchor with gatsby-plugin-anchor-links replace Link with AnchorLink



const Header = () =>{

  

  return(
    <header>
    <div className = "container">
      <nav>
      <img src={logo} alt="My Portfolio" className = "logo" />
        <ul>
          <li><Link to = '/'>Home</Link></li>
          <li><Link to = '/work'>Work</Link></li>
          <li><Link to = '/about'>About</Link></li>
          <li><Link to = '/contact'>Contact</Link></li>
          <li><Link to = '/#creativeProcess'>My Creative Process</Link></li>

        </ul>

      </nav>
      <HeaderContent/>
    </div>
    </header>
  )
} 
  
export default Header
