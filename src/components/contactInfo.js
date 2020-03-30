import React from 'react'
import {FaEnvelope, FaPhone, FaAddressCard} from 'react-icons/fa'
import styled from 'styled-components'

const Info = styled.div`
   display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
`

const ContactInfo = ()=>{
    return(
    <div className = 'container'>
        <Info>
          <div>
            <FaEnvelope/>
            <h3>Email</h3>
            <p>john@something.com</p>
          </div>
          <div> 
            <FaPhone/>         
            <h3>Phone</h3>
            <p>(555) 555-5555</p>
          </div>
          <div> 
            <FaAddressCard/>    
            <h3>Address</h3>
            <p>50 Main st, Boston MA</p>
          </div>
        </Info>
    </div>
    )
}

export default ContactInfo