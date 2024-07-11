import React from 'react'

const ProjectCard = ({title, description, imagePath, techStack, githubLink, projectLink}) => {

  

  return (
    <div className='h-fit w-fit border-2 shrink-0 md:text-lg border-primary rounded-full px-3 bg-primary/[0.9] shadow-inner shadow-background/40 text-background font-code hover:border-[#BF761C]'>
      {title}
    </div>
  )
}

export default ProjectCard