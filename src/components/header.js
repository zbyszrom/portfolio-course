import { Link } from "gatsby"
import React from "react"
import logo from '../images/logo.png'

const Header = () =>{

  return(
    <header>
    <div>
      <nav>
      <img src={logo} alt="My Portfolio" className = "logo" />
        <ul>
          <li><Link to = '/'>Home</Link></li>
          <li><Link to = '/work'>Work</Link></li>
          <li><Link to = '/about'>About</Link></li>
          <li><Link to = '/contact'>Contact</Link></li>
        </ul>

      </nav>
    </div>
    </header>
  )
} 
  
export default Header
