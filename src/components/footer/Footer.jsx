/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>MAZ</a>
            
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href='https://www.facebook.com/profile.php?id=100009574725930'><FaFacebookF /></a>
                <a href='https://www.linkedin.com/in/maz-chowdury-846878212/'><BsLinkedin /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Maz's Portfolio, all rights reserved</small>
            </div>
        </footer>
    );
}

export default Footer;