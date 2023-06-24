import React from 'react';
import './Experience.css';

const Experience = () => {
  const bullet = (company, title, date) => (
    <div className='bullet__container'>
        <div className='line'>
            <div className='company__container'>
                <h4 className='text-light'>{company}</h4>
                <h5 className='text-light'>{title}</h5>
                <h5 className='text-light'>{date}</h5>
            </div>
        </div>
    </div>
  );

  return (
    <section id="experience">
      <h5 className='text-light'>My Experience So Far</h5>
      <h2>Experience</h2>

      <div className='container timeline__container'>
          {bullet('Kyte', 'Operations Manager', '03/2022 - Present')}
          {bullet('Amazon', 'Operations Manager', '07/2020 - 03/2022')}
          {bullet('Tesla', 'Operations Manager', '01/2016 - 05/2020')}
      </div>
    </section>
  )
}

export default Experience
