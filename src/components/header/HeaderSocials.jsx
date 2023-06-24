import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { AiOutlineFacebook } from 'react-icons/ai';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/maz-chowdury-846878212/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
            <a href="https://www.facebook.com/profile.php?id=100009574725930" target='_blank' rel="noreferrer"><AiOutlineFacebook /></a>
        </div>
    );
}

export default HeaderSocials;