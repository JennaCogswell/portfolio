import React from 'react'

const Tool = ({tool}) => {

  

  return (
    <div className='h-fit w-fit border-2  md:text-lg border-primary shadow-inner rounded-full px-3 bg-primary/[0.9]  shadow-background/40 text-background font-code '>
      {tool}
    </div>
  )
}

export default Tool