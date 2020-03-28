import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from "styled-components"

const getImages = graphql `
query  {
  personImages: allFile(filter: {relativeDirectory: {eq: "persons"}}, sort: {fields: childImageSharp___fluid___originalName}) {
    edges {
      node {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
          id
        }
      }
    }
  }
}
`  

const SImg = styled(Img)`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 0.5rem;   
`


const Testimonials = ()=>{

  const data = useStaticQuery(getImages)
  const persons = data.personImages.edges

    return(
        <div className = 'container'>
            <h2>Testimonials</h2>
            <div className = "line"></div>
            <p >Take a look at what my clients say...</p>
            <div>
                <div>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates officiis quia nostrum nam ab vel laudantium, ea,
              corrupti culpa illum soluta ipsam eos, eius ad error voluptate
              sint? Non, fugit! 
                </p>
                <ul>
                    <li>
                    <SImg fluid = {persons[0].node.childImageSharp.fluid} alt = ""></SImg>  
                    </li>
                    <li>Steve Thompson, Boston</li>
                </ul>
                </div>
                <div>
                <p>
                Lorem * ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates officiis quia nostrum nam ab vel laudantium, ea,
              corrupti culpa illum soluta ipsam eos, eius ad error voluptate
              sint? Non, fugit! 
                </p>
                <ul>
                    <li>
                    <SImg fluid = {persons[1].node.childImageSharp.fluid} alt = ""></SImg>  
                    </li>
                    <li>Sam Smith, New York</li>
                </ul>
                </div>
                <div>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates officiis quia nostrum nam ab vel laudantium, ea,
              corrupti culpa illum soluta ipsam eos, eius ad error voluptate
              sint? Non, fugit! 
                </p>
                <ul>
                    <li className>
                    <SImg fluid = {persons[2].node.childImageSharp.fluid} alt = "" className ='testimonialImg'></SImg>  
                    </li>
                    <li>ara Williams, Michigan</li>
                </ul>
                </div>
                <div>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates officiis quia nostrum nam ab vel laudantium, ea,
              corrupti culpa illum soluta ipsam eos, eius ad error voluptate
              sint? Non, fugit! 
                </p>
                <ul>
                    <li>
                    <SImg fluid = {persons[3].node.childImageSharp.fluid} alt = ""></SImg>  
                    </li>
                    <li>Jill Johnson, London</li>
                </ul>
                </div>


            </div>
        </div>
    )
}

export default Testimonials