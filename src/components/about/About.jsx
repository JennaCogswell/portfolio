import React from 'react'

const About = () => {

  const openNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <div id='about' className='flex py-10 md:h-[900px] h-fit md:max-h-screen'>
      <div className='m-auto font-code text-primary flex flex-col text-center items-center gap-6 w-4/5 md:w-2/3 text-lg'>
        <p className='w-4/5'>
          Analyst, <button className='text-accent font-semibold' onClick={() => openNewTab('https://www.mongodb.com/resources/basics/full-stack-development')}>Full-Stack Developer</button> at <button onClick={() => openNewTab('https://www.avanade.com/en-ca')} className='text-accent font-semibold'>Avanade</button>’s Halifax Engineering Hub. Recent Computer Science graduate from <button onClick={() => openNewTab('https://www.dal.ca/')} className='text-accent font-semibold'>Dalhousie</button> University.
        </p>

        <p>
          This portfolio showcases the projects I worked on over the last few years of university, highlighting some of my technical expertise.
        </p>

        <p className='w-4/5'>
          My current areas of interest include <span className='text-accent'>Web & Mobile Development, User Experience & Design, Machine Learning, and Cloud Computing.</span>
        </p>
      </div>
    </div>
  )
}

export default About