import React from 'react'
import styled from 'styled-components'

const Fields = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 1.2rem;
   margin-bottom: 1.2rem;
`

const ContactForm = ()=>{
    return(
      <div className = 'container'>
      <h2>Contact</h2>
      <div className = 'line'></div>
      <p>Here is how you can reach me</p>
      <form method="POST" data-netlify="true" data-netlify-recaptcha="true">
          <Fields>
            <input
              type="text"
            
              placeholder="Name"
              name="name"
            />
            <input
              type="text"
        
              placeholder="Subject"
              name="subject"
            />
            <input
              type="email"
           
              placeholder="Email Address"
              name="email"
            />
            <input
              type="text"
             
              placeholder="Phone Number"
              name="phone"
            />
            <textarea
           
              placeholder="Enter Message"
              name="message"
            ></textarea>
            <div>
              <div data-netlify-recaptcha="true"></div>
            </div>
          </Fields>
          <button type="submit" class="btn-dark">Submit</button>
        </form>
      </div>
    )
}
export default ContactForm