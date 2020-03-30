import React from "react"

import Layout from '../components/layout'
import Gallery from '../components/gallery'

const Work = () => (
  <Layout>
      
    <div className = 'container'>
      <h2 id ='work'>My work</h2>
      <div className = 'line'></div>
      <p >
          Check out some of my projects
      </p>
    <Gallery/>
     </div>     
  </Layout>
)
  
  export default Work