import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

const Contact = () => {

  const openNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <div id='contact' className='h-fit md:h-screen flex flex-col items-center'>
      <div className='my-10 items-center flex flex-col md:flex-row gap-4 md:gap-0 justify-between text-primary basis-11/12 w-4/5'>
        <button onClick={() => openNewTab('https://www.linkedin.com/in/jenna-cogswell-1608771b7/')} className='flex flex-col hover:text-accent items-center' ><IoLogoLinkedin className='text-6xl md:text-7xl lg:text-9xl'/><p className='font-code text-md'>LinkedIn/jennacogswell</p></button>
        <button onClick={() => openNewTab('https://github.com/JennaCogswell')} className='flex flex-col items-center hover:text-accent '><IoLogoGithub className='text-6xl md:text-7xl lg:text-9xl'/><p className='font-code text-md'>GitHub/jennacogswell</p></button>
        <button onClick={() => {
          window.location.href = `mailto:cogswejg@gmail.com?subject=&body=`;
        }} className='hover:text-accent flex flex-col items-center'><IoMail className='text-6xl md:text-7xl lg:text-9xl'/><p className='font-code text-md'>cogswejg@gmail.com</p></button>
      </div>

      <div className='basis-1/12'>
        <p className='font-parisienne text-accent text-6xl text-center py-10'>JC</p>
      </div>
    </div>
    
  )
}

export default Contact