import React from 'react';
import { myInfo } from '../../Data/Data';
import './Footer.css'

const Footer = () => {
    const correntYear = new Date().getFullYear()
    return (
        <div className='footer'>
            <h6>Copyright <i className="fal fa-copyright"></i> 2021 - {correntYear} | All rights reserved by {myInfo.name}</h6>
        </div>
    );
};

export default Footer;