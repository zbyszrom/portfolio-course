import React from 'react'
import styled from 'styled-components'
import {FaFileAlt, FaDesktop, FaThumbsUp, FaObjectUngroup} from 'react-icons/fa'

const Specials = styled.div`
   margin-top: 3rem;
   display: grid;
   grid-gap: 1rem;
   grid-template-columns: repeat(4, 1fr);
`

const Specialize = ()=>{
    return(
    <div className = 'container'>
        <h2> I specialize in</h2>
        <div className = "line"></div>
        <p>
            Photography as well as creating digital masterpieces and UI/UX layouts
          for websites and mobile applications
        </p>
            <Specials>
            <div>
                <FaFileAlt/>
                <h3>Concepting</h3>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              molestias repellat quibusdam adipisci quas sed ullam accusantium
              aliquam numquam quidem. 
                </p>
            </div>
            <div>
                <FaDesktop/>
                <h3>UI/UX</h3>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              molestias repellat quibusdam adipisci quas sed ullam accusantium
              aliquam numquam quidem. 
                </p>
            </div>
        <div>
            <FaObjectUngroup/>
            <h3>Visual Design</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              molestias repellat quibusdam adipisci quas sed ullam accusantium
              aliquam numquam quidem. 
            </p>
        </div>
        <div>
        <FaThumbsUp/>
        <h3>Interaction</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          molestias repellat quibusdam adipisci quas sed ullam accusantium
          aliquam numquam quidem. 
        </p>
        </div>
        </Specials>
    </div>
    )
}
export default Specialize