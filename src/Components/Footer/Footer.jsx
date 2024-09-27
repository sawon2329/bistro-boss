import React from 'react';
import './footer.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faSquareFacebook, faXTwitter} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className='footer-container '>
            <div className='container-flex'>
                <div className='footer-contact-data container-flex'>
                    <h2>
                        Contact us
                    </h2>
                    <p>
                        Jhenaidha Sadar, Jhenaidah, Khulna
                        <br />
                        +880 170707585
                        <br />
                        Mon - Friday 08.00 - 10.00
                        <br />
                        Sat - Sunday 10.00 - 23.00
                    </p>
                    </div>
                <div className='footer-social-data container-flex'>
                    <h2>
                        Follow Us
                    </h2>
                    <p>Join us with social media</p>
                    <div className='footer-social-icon'>
                        <a href="https://www.facebook.com"><FontAwesomeIcon className='footer-icon' icon={faSquareFacebook}/></a>
                        <a href="https://www.instagram.com/"><FontAwesomeIcon className='footer-icon' icon={faInstagram} /></a>
                        <a href="https://x.com/"><FontAwesomeIcon className='footer-icon' icon={faXTwitter}/></a>
                    </div>
                </div>
            </div>
            <div className='copywrite-owner container-flex'>
                <h4>Copywrite Sawon</h4>
            </div>
        </div>
    );
};

export default Footer;