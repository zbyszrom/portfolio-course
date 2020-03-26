import React from 'react'
import {FaFacebook, FaTwitterSquare, FaYoutube } from "react-icons/fa"

const Footer = ()=> {
    return(
        <footer>
      <div>
        <p>Copyright &copy; 2020. All Rights Reserved</p>
        <div >
          <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook size = '1.8rem' /></a>
          <a href="" target="_blank" rel="noopener noreferrer"><FaTwitterSquare size = '1.8rem'/></a>
          <a href="" target="_blank" rel="noopener noreferrer"><FaYoutube size = '1.8rem'/></a>
        </div>
      </div>
    </footer>
    )
}
export default Footer