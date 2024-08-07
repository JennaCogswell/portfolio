import React from 'react'
import Tool from './Tool'

const Tools = () => {

  const toolsList = [
    "JavaScript", "HTML5", "CSS3", "Java", "Kotlin", "Python", "C++/C", "Terraform", "React", "React Native", "Node.js", "Express.js", "Next.js", "Tailwind CSS", "Microsoft Azure", "AWS", "Docker", "MySQL", "MongoDB", "Powershell", "GitHub", "Jupyter Notebook", "Android Studio"
, "Firebase", "Figma" ]

  

  return (
    <div id='tools' className='flex py-10 md:h-[900px] h-fit md:max-h-screen'>
      <div className='m-auto w-3/5'>
        <div className='flex flex-wrap gap-3 items-center justify-center'>
          {toolsList.map((tool) => <Tool tool={tool}/>)}

        </div>
      </div>
      
      
    </div>
  )
}

export default Tools