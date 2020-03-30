import React from 'react'
import styled from 'styled-components'
import Envato from '../images/about-logos/envato.png'
import Woocommerce from '../images/about-logos/woocommerce.png'
import Magento from '../images/about-logos/magento.png'
import Wordpress from '../images/about-logos/wordpress.png'

const Log = styled.div`
     display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 2rem;
`


const Logos = ()=>{
    return(
        <div className = 'container'>
            <Log>
            <img src={Envato} alt="" />
            <img src={Wordpress} alt="" />
            <img src= {Woocommerce} alt="" />
            <img src={Magento} alt="" /> 
            </Log>
        </div>
    )
}

export default Logos