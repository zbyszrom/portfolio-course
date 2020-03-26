import React from 'react'

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
        <a href="work.html" >View My Work</a>
      </div>
    )
}

export default HeaderContent