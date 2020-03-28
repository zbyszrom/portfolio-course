import React from 'react'
import Envato from '../images/about-logos/envato.png'
import Woocommerce from '../images/about-logos/woocommerce.png'
import Magento from '../images/about-logos/magento.png'
import Wordpress from '../images/about-logos/wordpress.png'


const Logos = ()=>{
    return(
        <div className = 'container'>
            <div>
            <img src={Envato} alt="" />
            <img src={Wordpress} alt="" />
            <img src= {Woocommerce} alt="" />
            <img src={Magento} alt="" /> 
            </div>
        </div>
    )
}

export default Logos