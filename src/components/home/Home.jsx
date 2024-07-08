import React from 'react'

const Home = () => {
  return (
    <div id='home' className='flex py-4 md:h-[900px] h-fit md:max-h-screen'>
      <div className='m-auto mt-7 md:mt-auto flex-col md:flex-row flex items-center text-primary w-4/5 md:w-2/3'>
        <div className='md:w-2/3 flex-grow items-center md:items-start md:text-start text-center'>
          
          <p className='font-code text-lg sm:text-xl pb-12 mt-12'>
            Print("Hello, World!")
          </p>

          <div className='flex flex-col w-fit m-auto md:m-0 pb-12'>

            <p className='font-parisienne text-4xl text-accent sm:text-6xl md:pr-8 flex-shrink'>
              Jenna Cogswell
            </p>

            <p className='text-end items-end font-code text-lg md:pr-9'>(She/her)</p>
            
            
          </div>

          <p>

          </p>

          <p className='font-code text-lg sm:text-xl pb-14 md:pr-8'>
          Full-Stack Developer, Dalhousie University Bachelor’s of Computer Science graduate 2024.
          </p>
        </div>

        <div className='flex items-center justify-center md:items-start md:justify-start w-4/5 md:w-2/5 lg:w-3/12'>
          <div className='w-full flex items-center justify-center'>
            <img
              className="inset-0 object-cover"
              src="/profile.png"
              alt="profile of author"
            />
          </div>
          
        </div>
      
      </div>
    </div>
  )
}

export default Home