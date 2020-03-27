import React from 'react'

const ContactForm = ()=>{
    return(
      <div className = 'container'>
      <h2>Contact</h2>
      <div className = 'line'></div>
      <p>Here is how you can reach me</p>
      <form method="POST" data-netlify="true" data-netlify-recaptcha="true">
          <div>
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
          </div>
          <button type="submit" class="btn-dark">Submit</button>
        </form>
      </div>
    )
}
export default ContactForm