import React from 'react'

const Tool = ({tool}) => {

  

  return (
    <div className='h-fit w-fit border-2  md:text-lg border-primary rounded-full px-3 bg-primary/[0.9] shadow-inner shadow-background/40 text-background font-code hover:border-[#BF761C]'>
      {tool}
    </div>
  )
}

export default Tool