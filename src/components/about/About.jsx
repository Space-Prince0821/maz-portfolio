import React from 'react';
import './About.css';
import ME from '../../assets/mazzy2.jpeg';
import { FaAward } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about">
            <h5 className='text-light'>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className='about__me'>
                    <div className="about__me-image">
                        <img src={ME} alt="selfie number 2"/>
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Bachelor's</h5>
                            <small>in Business Management</small>
                        </article>
                    </div>

                    <p>
                        Graduated with a bachelor's in Business Management and Finance. To create & collaborate with like minded individuals in the industry so that our strategies and solutions can be implemented into the company for future growth, sustainability & prosperity. Over 8 Years of experience in Operations. From being a part of the first 1,000 Tesla's being built and shipped in Silicone Valley. Ensured 80K customers received their packages on time at Amazon on a daily basis.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;