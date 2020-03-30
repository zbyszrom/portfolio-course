import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
//import styled from "styled-components"

const getImages = graphql `
query  {
  itemImages: allFile(filter: {relativeDirectory: {eq: "items"}}, sort: {fields: childImageSharp___fluid___originalName}) {
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


const Gallery = ()=>{

    const data = useStaticQuery(getImages)
    const items = data.itemImages.edges
  

    return(
        <div className = 'items'>

    <div class="item">
            <div>
            <Img fluid = {items[0].node.childImageSharp.fluid} alt = ""></Img> 
            </div>
            <div>
              <p>Mobile UI Design</p>
              <h2>Face THe Experience</h2>   
            </div>
    </div>
    <div class="item">
            <div>
            <Img fluid = {items[1].node.childImageSharp.fluid} alt = ""></Img> 
            </div>
            <div>
              <p>Design Concept</p>
              <h2>Bezier Curves</h2>   
            </div>
    </div>
    <div class="item">
            <div>
            <Img fluid = {items[2].node.childImageSharp.fluid} alt = ""></Img> 
            </div>
            <div>
              <p>Photography</p>
              <h2>Dock Ponder</h2>   
            </div>
    </div>
    <div class="item">
            <div>
            <Img fluid = {items[3].node.childImageSharp.fluid} alt = ""></Img> 
            </div>
            <div>
              <p>Web Applications</p>
              <h2>Restaurant App</h2>   
            </div>
    </div>
    <div class="item">
            <div>
            <Img fluid = {items[4].node.childImageSharp.fluid} alt = ""></Img> 
            </div>
            <div>
              <p>Social Network Concept</p>
              <h2>FriendFeed</h2>   
            </div>
    </div>
    <div class="item">
            <div>
            <Img fluid = {items[5].node.childImageSharp.fluid} alt = ""></Img> 
            </div>
            <div>
              <p>Design</p>
              <h2>Great Gradients</h2>   
            </div>
    </div>
    <div class="item">
            <div>
            <Img fluid = {items[6].node.childImageSharp.fluid} alt = ""></Img> 
            </div>
            <div>
              <p>UI/UX</p>
              <h2>World Experience</h2>   
            </div>
    </div>
    <div class="item">
            <div>
            <Img fluid = {items[7].node.childImageSharp.fluid} alt = ""></Img> 
            </div>
            <div>
              <p>Mobile UI Design</p>
              <h2>Vanishing</h2>   
            </div>
    </div>
    <div class="item">
            <div>
            <Img fluid = {items[8].node.childImageSharp.fluid} alt = ""></Img> 
            </div>
            <div>
              <p>Design</p>
              <h2>Gap INC</h2>   
            </div>
    </div>

    </div>
   
    )
}

export default Gallery
