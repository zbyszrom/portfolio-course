import React from 'react'
import {FaFileAlt, FaDesktop,  FaObjectUngroup, FaThumbsUp} from 'react-icons/fa'

const Process = ()=>{
    return(
        <div className = 'container'>
            <h2> My creative process</h2>
            <div className='line'></div>
            <p>
            All of my UI/UX and design projects are based off of a practiced
          formula to get the result that I am looking for
            </p>
            <div>
             <FaFileAlt/> 
            <div >1</div>
            <h3>Discuss The Project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptas laborum repellendus dolorum! Harum, cupiditate.
            </p>
          </div>
          <div>
          <FaDesktop/>
            <div >2</div>
           
            <h3>Brainstorming & Concept</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptas laborum repellendus dolorum! Harum, cupiditate.
            </p>
          </div>
          <div>
          <FaObjectUngroup/>
            <div >3</div>       
            <h3>UI/UX Planning</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptas laborum repellendus dolorum! Harum, cupiditate.
            </p>
          </div>
          <div>
            <FaThumbsUp/>
            <div >4</div>       
            <h3>Interaction</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptas laborum repellendus dolorum! Harum, cupiditate.
            </p>
          </div>
          
   
            

        </div>
        
    )
}
export default Process