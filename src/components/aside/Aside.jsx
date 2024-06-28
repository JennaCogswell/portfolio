import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

const Aside = () => {

  const openNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <div className='z-10 my-10 md:my-0 justify-center md:justify-start flex flex-row md:flex-col gap-4 md:fixed md:right-3 md:inset-y-0 md:transform md:translate-y-1/2 text-3xl text-primary'>
      <button onClick={() => openNewTab('https://www.linkedin.com/in/jenna-cogswell-1608771b7/')} className='hover:text-accent'><IoLogoLinkedin/></button>
      <button onClick={() => openNewTab('https://github.com/JennaCogswell')} className='hover:text-accent'><IoLogoGithub/></button>
      <button onClick={() => {
        window.location.href = `mailto:cogswejg@gmail.com?subject=&body=`;
      }} className='hover:text-accent'><IoMail/></button>
    </div>
  )
}

export default Aside