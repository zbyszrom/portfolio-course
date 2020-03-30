import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

const Button = styled(Link)`
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
        <div>
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
        <Button to="/work" >View My Work</Button>
      </div>
    )
}

export default HeaderContent