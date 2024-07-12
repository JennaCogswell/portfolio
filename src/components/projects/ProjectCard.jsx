import React from 'react'

const ProjectCard = ({title, description, imagePath, techStack, githubLink, projectLink}) => {

  

  return (
    <div className='min-h-fit min-w-fit h-[500px] md:h-full w-[335px] md:w-[600px] lg:w-[800px] xl:w-[1000px] shrink-0 p-5 snap-center'>
      <div className='w-full h-full rounded-[40px] p-4 bg-secondary/10 shadow-inner drop-shadow-lg shadow-accent/40 text-primary font-code'>
        {title}
      </div>
    </div>
    
  )
}

export default ProjectCard