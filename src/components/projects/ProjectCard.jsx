import React from 'react'

const Tech= ({tech}) => {

  return (
    <div className='h-fit w-fit border-2 text-sm border-primary rounded-full px-3 bg-primary/[0.9] shadow-inner shadow-background/40 text-background font-code hover:border-[#BF761C]'>
      {tech}
    </div>
  )
}

const ProjectCard = ({title, description, imagePath, techStack, githubLink}) => {

  const openNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <div className='min-h-fit min-w-fit h-fit md:h-full w-[335px] md:w-[600px] lg:w-[800px] xl:w-[1000px] shrink-0 p-5 snap-center'>
      <div className='w-full min-h-fit md:h-full rounded-[40px] p-4 bg-secondary/10 shadow-inner drop-shadow-lg shadow-accent/40 text-primary font-code flex flex-col md:flex-row'>
        <div className='flex flex-col w-full md:w-2/3 lg:w-3/5 h-full min-h-fit max-h-full items-center justify-center md:items-start md:justify-start'>
          <div className='items-center justify-center md:items-start md:justify-start'>
            <h3 className='font-code font-semibold text-2xl p-2 text-secondary text-center md:text-start'>{title}</h3>
          </div>

          <div className='px-2 py-1 justify-center items-center md:items-start md:justify-start'>
            <div className='h-fit text-sm w-fit border-2 border-accent rounded-full px-3 bg-primary/[0.9] shadow-inner shadow-background/40 text-background font-code'>
              <button onClick={() => openNewTab(githubLink)} className='hover:text-accent'>GitHub Repo</button>
            </div>
          </div>

          <div className='p-2 font-code text-sm text-primary flex-grow items-center justify-center md:items-start md:justify-start'>
            <p className='text-center md:text-start'>{description}</p>
          </div>

          <div className='px-2 py-4 min-h-fit'>
            <div className='flex flex-wrap gap-2 items-center justify-center md:items-start md:justify-start'>
              {techStack.map((tech) => <Tech tech={tech}/>)}

            </div>
          </div>
        </div>

        <div className='flex items-center justify-center md:items-start md:justify-start w-full md:w-1/3 lg:w-2/5 px-1 py-2'>
          <div className='w-full flex items-center justify-center'>
            <img
              className="inset-0 object-cover rounded-2xl"
              src={imagePath}
              alt="collage of project visuals"
            />
          </div>
          
        </div>
      </div>
    </div>
    
  )
}

export default ProjectCard