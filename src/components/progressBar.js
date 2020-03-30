import React from 'react'
import styled from 'styled-components'

const Progress = styled.div`
  overflow: hidden;
      height: 20px;
      background: var(--medium);
      border-radius: 5px;
      margin-bottom: 0.6rem;

      div {
        height: 100%;
        color: #fff;
        text-align: center;
        background: var(--main);
      }
`

const ProgressBar = ()=>{
    return(
<div className = 'container'>
        <h2>Technical Skills</h2>
        <div className = 'line'></div>
        <h4>Photography:</h4>
        <Progress>
          <div style={{width:'75%'}}></div>
        </Progress>
          <h4>Photoshop:</h4>     
          <Progress>
          <div style={{width:'80%'}}></div>
          </Progress>
        <h4>Illistrator:</h4>
        <Progress>
          <div style={{width:'25%'}}></div>
          </Progress>
        <h4>HTML & CSS:</h4>
        <Progress>
          <div style={{width:'80%'}}></div>
          </Progress>
        <h4>React:</h4>
        <Progress>
          <div style={{width:'50%'}}></div>
          </Progress>
        <h4>Gatsby:</h4>
        <Progress>
          <div style={{width:'75%'}}></div>
          </Progress>
        
</div>
    )
}

export default ProgressBar