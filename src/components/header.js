import { Link } from "gatsby"

import React from "react"

const Header = () =>{

  return(
    <header>
    <div>
      <nav>
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
