import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/mazzy.jpeg';
import HeaderSocials from './HeaderSocials';

function Header() {
  return (
    <header>
            <div className="container header__container">
                <h5 className='text-light'>Hello I'm</h5>
                <h1 className='text-light'>Maz Chowdury</h1>
                <h5 className="text-light">Operations Manager</h5>
                <CTA />
                <HeaderSocials />

                <div className='me'>
                    <img src={ME} alt="selfie"/>
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
  )
}

export default Header
