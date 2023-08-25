import React from 'react'
import './Footer.css'
import {AiFillYoutube ,AiOutlineTwitter , AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoFacebook , BiLogoTiktok} from 'react-icons/bi'
const Footer = () => {
  return (
   <div className="footer">
    <div className="subscribe">
        <div className='subscribe-txt'>SUBSCRIBE TO GET THE LATEST PRODUCT UPDATES</div>
        <div className="subscribe-input">
        <input type="text" placeholder='Enter your email'/>
        <button className='subscribe-btn'>Subscribe</button>
        </div>
    </div>
    <div className="footer-down">
        <div className="links-icon">
            <div className="icon">
            <AiFillYoutube size={25}/>
            </div >
            <div className="icon">
            <AiOutlineTwitter size={25}/>
            </div>
            <div className="icon">
            <BiLogoFacebook size={25}/>
            </div>
            <div className="icon">
            <AiOutlineInstagram size={25}/>
            </div>
            <div className="icon">
            <BiLogoTiktok size={25}/>
            </div>
          
          
        </div>
        <div className="copyright">
            <p>© 2023 Webflow, Inc. All rights reserved.</p>
        </div>
    </div>
   </div>
  )
}

export default Footer
