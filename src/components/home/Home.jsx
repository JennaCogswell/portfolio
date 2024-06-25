import React from 'react'

const Home = () => {
  return (
    <div className='flex h-screen'>
      <div className='m-auto flex-col md:flex-row flex text-primary w-4/5 md:w-2/3'>
        <div className='md:w-2/3 flex-grow items-center md:items-start md:text-start text-center'>
          
          <p className='font-code text-lg sm:text-xl pb-12 mt-12'>
            Print("Hello, World!")
          </p>

          <div className='flex flex-col w-fit m-auto md:m-0 pb-12'>

            <div className='flex'>
              <p className='font-code text-lg sm:text-xl pr-5 pt-5'>
                I am, 
              </p>

              <p className='font-parisienne text-4xl sm:text-6xl md:pr-8 flex-shrink'>
                Jenna Cogswell
              </p>
            </div>

            <p className='text-end items-end font-code text-lg md:pr-9'>(She/her)</p>
            
            
          </div>

          <p>

          </p>

          <p className='font-code text-lg sm:text-xl pb-14 md:pr-8'>
          Full-Stack Developer, Dalhousie University Bachelor’s of Computer Science graduate 2024.
          </p>
        </div>

        <div className='w-fit flex-shrink m-auto'>
          <img
            className="max-h-64 md:max-h-72 lg:max-h-80 w-full object-cover object-center "
            src="/profile.png"
            alt="profile of author"
          />
        </div>
      
      </div>
    </div>
  )
}

export default Home