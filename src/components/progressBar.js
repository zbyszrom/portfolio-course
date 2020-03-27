import React from 'react'

const ProgressBar = ()=>{
    return(
<div className = 'container'>
        <h2>Technical Skills</h2>
        <div className = 'line'></div>
        <h4>Photography:</h4>
        <div class="progress">
          <div style={{width:'100%'}}></div>
          <h4>Photoshop:</h4>
        <div class="progress">
          <div style={{width:'100%'}}></div>
        </div>
        <h4>Illistrator:</h4>
        <div class="progress">
          <div style={{width:'100%'}}></div>
        </div>
        <h4>HTML & CSS:</h4>
        <div class="progress">
          <div style={{width:'100%'}}></div>
        </div>
        <h4>React:</h4>
        <div class="progress">
          <div style={{width:'100%'}}></div>
        </div>
        <h4>Gatsby:</h4>
        <div class="progress">
          <div style={{width:'100%'}}></div>
        </div>
        </div>
</div>
    )
}

export default ProgressBar