import React from 'react'
import { IoHome } from "react-icons/io5";
import { IoInformationCircleSharp } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoFileTrayFull } from "react-icons/io5";
import { IoPaperPlane } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';




const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <div className='z-16'>
      <header className='fixed w-full h-fit'>
        <nav className='p-2 w-full'>
          <a href='index.html' className='absolute left-3 hover:text-accent font-parisienne text-secondary text-3xl'>JC</a>

          <div className='hidden lg:flex justify-center items-center'>
            <ul className='flex font-code text-primary '>
              <li className='ml-4 mr-4'>
                <a href='#home' className='flex items-center gap-1 hover:text-accent'>
                  <IoHome/> Home
                </a>
              </li>

              <li className='ml-4 mr-4'>
                <a href='#about' className='flex items-center gap-1 hover:text-accent'>
                  <IoInformationCircleSharp/> About
                </a>
              </li>

              <li className='ml-4 mr-4'>
                <a href='#tools' className='flex items-center gap-1 hover:text-accent'>
                  <IoBuild/> Tools
                </a>
              </li>

              <li className='ml-4 mr-4'>
                <a href='#projects' className='flex items-center gap-1 hover:text-accent'>
                  <IoFileTrayFull/> Projects
                </a>
              </li>

              <li className='ml-4 mr-3'>
                <a href='#contact' className='flex items-center gap-1 hover:text-accent'>
                  <IoPaperPlane/> Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <button className='text-2xl items-center lg:hidden absolute right-3 hover:text-accent text-secondary' onClick={toggleMenu}>
          <IoMenu/>
        </button>
      </header>

      {isOpen && (
        <div className='mt-10 fixed w-full h-full '>
          
          <nav className='p-2 w-full h-full'>

            <div className=' w-full h-full'>
              <ul className='flex-col flex h-full font-code text-primary hover:text-accent'>
                <li className='mb-8'>
                  <a href='#home' className='flex items-center gap-1 justify-center'>
                    <IoHome/> Home
                  </a>
                </li>

                <li className='mb-8' >
                  <a href='#about' className='flex items-center gap-1 justify-center'>
                    <IoInformationCircleSharp/> About
                  </a>
                </li>

                <li className='mb-8'>
                  <a href='#tools' className='flex items-center gap-1 justify-center'>
                    <IoBuild/> Tools
                  </a>
                </li>

                <li className='mb-8'>
                  <a href='#projects' className='flex items-center gap-1 justify-center'>
                    <IoFileTrayFull/> Projects
                  </a>
                </li>

                <li className='mb-8'>
                  <a href='#contact' className='flex items-center gap-1 justify-center'>
                    <IoPaperPlane/> Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          
        </div>
      )}

    </div>
  )
}

export default Header