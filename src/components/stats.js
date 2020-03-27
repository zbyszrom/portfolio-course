import React from 'react'
import { FaUsers, FaAward, FaHourglassStart, FaCodeBranch} from 'react-icons/fa'

const Stats = ()=>{
    return(
        <div>
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




        </div>
    )
}
export default Stats