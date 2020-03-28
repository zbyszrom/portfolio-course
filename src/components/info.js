import React from 'react'
import {FaAward} from 'react-icons/fa'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'

const getImage = graphql`
query {
    photo: file(name: {eq: "about"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
}
`
const SImg = styled(Img)`
 width: 50vw;
`


const Info =()=>{

  const data = useStaticQuery(getImage)
  const about = data.photo.childImageSharp.fluid

    return(
        <div className = 'container'>
      <h2>About me</h2>
      <div className = 'line'></div>
      <p>
          Let me tell you a little about myself and what I do...
        </p>
        <div>
          <SImg fluid = {about} alt=''className = ''/>
          <div>
          <h4>Your Project Is In Safe Hands</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis nostrum, eaque velit ipsam facilis sed, quisquam
              nesciunt unde nihil voluptatum commodi consequuntur molestiae?
              Fugiat, perspiciatis reprehenderit. Architecto delectus vitae
              deserunt!
            </p>
          </div>
          
          <div>
            <FaAward/>
            <h3>Award One</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              magni!
            </p>
          </div>
          <div>
          <FaAward/>
            <h3>Award Two</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              magni!
            </p>
          </div>
          <div>
          <FaAward/>
            <h3>Award Three</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              magni!
            </p>
          </div>
        </div>
        </div>

    )
}

export default Info