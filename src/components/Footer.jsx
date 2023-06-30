import React from 'react'
import img2 from "../assets/ico-instagram.png";
import img3 from "../assets/ico-tiktok.png";
import img4 from "../assets/ico-whatsapp.png";
const Footer = () => {
  return (
    <footer >
        <h3>
         Powered By Marcos Grimoldi && Constantino Strada.
        </h3>
        
            
        <div className='icons' >
            <img src={img2} ></img>
            <img src={img3} ></img>
            <img src={img4} ></img>
        </div>
    </footer>
  )
}
export default Footer;