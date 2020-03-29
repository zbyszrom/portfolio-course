import React from 'react'
import { Link } from "gatsby"


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
        <Link to="/work" >View My Work</Link>
      </div>
    )
}

export default HeaderContent