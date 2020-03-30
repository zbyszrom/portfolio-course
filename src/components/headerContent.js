import React from 'react'
//import { Link } from "gatsby"
import styled from 'styled-components'
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Content = styled.div`
   text-align: center;
   padding-top: 20%;
`
const Button = styled(AnchorLink)`
  display: inline-block;
  padding: 0.8rem 2rem;
  transition: all 0.5s;
  border: none;
  cursor: pointer;
  color: var(--dark);
  background-color: var(--light);
`
const HeaderContent = ()=>{
    return(
        <Content>
        <h1>
          I Am John The
          <span
            
            data-wait="3000"
            data-words='["Photographer", "Designer", "UI/UX Dev"]'
          ></span>
        </h1>
        <p >
          I specialize in graphic design, UI/UX and photography
        </p>
        <Button to="/work#work" >View My Work</Button>
      </Content>
    )
}

export default HeaderContent