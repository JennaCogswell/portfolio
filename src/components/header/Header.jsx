import React from 'react'
import { IoHome } from "react-icons/io5";
import { IoInformationCircleSharp } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoFileTrayFull } from "react-icons/io5";
import { IoPaperPlane } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import { Link } from 'react-scroll';



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <div className=''>
      <header className='fixed w-full h-14 bg-background/[0.8] '>
        <nav className='p-2 w-full h-fit'>
          <Link className='absolute left-3 hover:text-accent font-parisienne text-secondary text-3xl' smooth spy to='home'>JC</Link>

          <div className='hidden lg:flex justify-center items-center'>
            <ul className='flex font-code text-primary '>
              <li className='ml-4 mr-4'>
                <Link className='flex items-center px-2 gap-1 hover:text-accent' activeClass='bg-primary/[0.9] text-background rounded-full hover:text-background hover:bg-accent/[0.9]' smooth spy to='home'>
                  <IoHome/> Home
                </Link>
              </li>

              <li className='ml-4 mr-4'>
                <Link className='flex items-center px-2 gap-1 hover:text-accent' activeClass='bg-primary/[0.9] text-background rounded-full hover:text-background hover:bg-accent/[0.9]' smooth spy to='about'>
                  <IoInformationCircleSharp/> About
                </Link>
              </li>

              <li className='ml-4 mr-4'>
                <Link className='flex items-center px-2 gap-1 hover:text-accent' activeClass='bg-primary/[0.9] text-background rounded-full hover:text-background hover:bg-accent/[0.9]' smooth spy to='tools'>
                  <IoBuild/> Tools
                </Link>
              </li>

              <li className='ml-4 mr-4'>
                <Link className='flex items-center px-2 gap-1 hover:text-accent' activeClass='bg-primary/[0.9] text-background rounded-full hover:text-background hover:bg-accent/[0.9]' smooth spy to='projects'> 
                  <IoFileTrayFull/> Projects
                </Link>
              </li>

              <li className='ml-4 mr-3'>
                <Link className='flex items-center px-2 gap-1 hover:text-accent' activeClass='bg-primary/[0.9] text-background rounded-full hover:text-background hover:bg-accent/[0.9]' smooth spy to='contact'>
                  <IoPaperPlane/> Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <button className='text-3xl z-30 items-center lg:hidden absolute right-3 hover:text-accent text-secondary' onClick={toggleMenu}>
          <IoMenu/>
        </button>
      </header>

      {isOpen && (
        <div className='fixed w-full h-screen bg-background z-20'>
          
          <nav className='p-2 w-full h-full '>

            <Link className='absolute left-3 hover:text-accent font-parisienne text-secondary text-3xl' smooth spy to='home'>JC</Link>

            <button className='text-3xl mt-2 items-center lg:hidden absolute right-3 hover:text-accent text-secondary' onClick={toggleMenu}>
              <IoMenu/>
            </button>

            <div className='mt-10 w-full h-full'>
              <ul className='flex-col flex h-fit font-code items-center text-primary'>
                <li className='my-4'>
                  <Link onClick={toggleMenu} className='flex items-center px-2 gap-1 justify-center hover:text-accent ' activeClass='bg-primary/[0.9] text-background rounded-full hover:text-background hover:bg-accent/[0.9]' smooth spy to='home'>
                    <IoHome/> Home
                  </Link>
                </li>

                <li className='my-4' >
                  <Link onClick={toggleMenu} className='flex items-center px-2 gap-1 justify-center hover:text-accent ' activeClass='bg-primary/[0.9] text-background rounded-full hover:text-background hover:bg-accent/[0.9]' smooth spy to='about'>
                    <IoInformationCircleSharp/> About
                  </Link>
                </li>

                <li className='my-4'>
                  <Link onClick={toggleMenu} className='flex items-center px-2 gap-1 justify-center hover:text-accent ' activeClass='bg-primary/[0.9] text-background rounded-full hover:text-background hover:bg-accent/[0.9]' smooth spy to='tools'>
                    <IoBuild/> Tools
                  </Link>
                </li>

                <li className='my-4'>
                  <Link onClick={toggleMenu} className='flex items-center gap-1 px-2 justify-center hover:text-accent ' activeClass='bg-primary/[0.9] text-background rounded-full hover:text-background hover:bg-accent/[0.9]' smooth spy to='projects'> 
                    <IoFileTrayFull/> Projects
                  </Link>
                </li>

                <li className='my-4'>
                  <Link onClick={toggleMenu} className='flex items-center gap-1 px-2 justify-center hover:text-accent ' activeClass='bg-primary/[0.9] text-background rounded-full hover:text-background hover:bg-accent/[0.9]' smooth spy to='contact'>
                    <IoPaperPlane/> Contact
                  </Link>
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