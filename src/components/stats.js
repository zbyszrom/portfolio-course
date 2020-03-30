import React from 'react'
import { FaUsers, FaAward, FaHourglassStart, FaCodeBranch} from 'react-icons/fa'
import styled from 'styled-components'

const St = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
`

const Stats = ()=>{
    return(
        <St>
        <div>
          <ul>
            <li><FaUsers/></li>
            <li >Clients</li>
            <li >100</li>
          </ul>
        </div> 
        <div>
          <ul>
            <li><FaAward/></li>
            <li >Awards</li>
            <li >3</li>
          </ul>
        </div> 
        <div>
          <ul>
            <li><FaHourglassStart/></li>
            <li >Projects Completed</li>
            <li >135</li>
          </ul>
        </div> 
        <div>
          <ul>
            <li><FaCodeBranch/></li>
            <li >Hours Worked</li>
            <li >3500</li>
          </ul>
        </div> 




        </St>
    )
}
export default Stats