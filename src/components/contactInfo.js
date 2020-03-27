import React from 'react'

const ContactInfo = ()=>{
    return(
    <div className = 'container'>
        <div>
          <div>
            <h3>Email</h3>
            <p>john@something.com</p>
          </div>
          <div>          
            <h3>Phone</h3>
            <p>(555) 555-5555</p>
          </div>
          <div>     
            <h3>Address</h3>
            <p>50 Main st, Boston MA</p>
          </div>
        </div>
    </div>
    )
}

export default ContactInfo