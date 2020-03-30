import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import HeaderContent from './headerContent'
import logo from '../images/logo.png'

//import { AnchorLink } from "gatsby-plugin-anchor-links";
// to use smoth scrollong to an anchor with gatsby-plugin-anchor-links replace Link with AnchorLink

const getImage = graphql`
query {
    Bcg: file(name: {eq: "showcase"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
}
`




const Header = (props) =>{

  const data = useStaticQuery(getImage)
    const backgroundFluid = data.Bcg

  

  return(
    <header>
      <BackgroundImage fluid = {backgroundFluid.childImageSharp.fluid} className = 'bcgImg'>
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
    </BackgroundImage>
    </header>
  )
} 
  
export default Header
