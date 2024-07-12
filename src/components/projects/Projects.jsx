import React from 'react'
import ProjectCard from './ProjectCard';


const Projects = () => {

  const projects = [
    {
      "title": "The Grapevine Chronicles",
      "description": "A React and Next.js web application for users to sign up, log in, browse, create, and interact with posts such as short stories, blog posts, and articles. The application is built and hosted using AWS services such as Elastic Container Registry + Service, RDS, S3, Amazon Polly (for an audiobook style feature), and more. This was a solo course project for Cloud Computing which recieved a 15/15.",
      "imagePath": "/grapevinechronicles.png",
      "techStack": ["JavaScript (jsx)", "HTML5", "CSS3", "SQL", "React", "Next.js/NextAuth", "TailwindCSS", "Docker", "AWS VPC", "AWS ECR", "AWS ECS", "AWS CloudFront", "AWS EC2", "AWS RDS (MySQL)", "AWS S3", "AWS Secrets Manager", "Amazon Polly"],
      "githubLink": "https://github.com/JennaCogswell/CloudComputingProject",
      "projectLink": ""
    },
    {
      "title": "Culinary Explorer",
      "description": "A React and Next.js web application hosted on Vercel, for users to sign up, log in, post, search, and interect with recipe posts. This application used MongoDB Atlas/Mongoose for storing and retrieving user and post information. This was a 6 person group project for a Web Development course which recieved a 91%. (The application link is live, however the database is no longer active, resulting in no data being loaded on the pages.)",
      "imagePath": "/culinaryexplorer.png",
      "techStack": ["JavaScript (jsx)", "HTML5", "CSS3", "React", "Next.js/NextAuth", "Vercel", "TailwindCSS", "MongoDB Atlas", "Figma"],
      "githubLink": "https://github.com/JennaCogswell/CulinaryExplorer",
      "projectLink": "https://culinary-explorer-iota.vercel.app/"
    },
    {
      "title": "Classifying Images of Facial Emotions",
      "description": "A Machine Learning Convolutional Neural Network for classifying images of facial emotions, created using Python with Tensorflow to create the model, numpy for data preprocessing, matplotlib for plotting the results, and more. This project was a 2 person group project for a Machine Learning course, which recieved a 100%.",
      "imagePath": "/machinelearning.png",
      "techStack": ["Python", "Jupyter Notebook", "CNN", "Tensorflow", "numpy", "pandas", "pyplot", "seaborn"],
      "githubLink": "https://github.com/JennaCogswell/MachineLearningGroupProjectCNN",
      "projectLink": ""
    },
    {
      "title": "Flip & Find",
      "description": "An Android Studio front-end only game application, catered towards children, for users to choose their game settings and flip over tiles to match the words to their images. This was a 5 person group project for a Mobile Development course, which recieved a 100%.",
      "imagePath": "/flipnfind.png",
      "techStack": ["Kotlin", "Java", "XML", "Android Studio", "OOP"],
      "githubLink": "https://github.com/JennaCogswell/FlipAndFind",
      "projectLink": ""
    },
    {
      "title": "Notes App",
      "description": "A React Native application created using Expo, to create, search, edit, and delete notes with a title and a body. Notes are saved and updated locally using Redux Tollkit and RTK Query. This project was done solo, instructed by Shiftkey Academy Up to result in a Shiftkey Labs React Native Certification. ",
      "imagePath": "/notesapp.png",
      "techStack": ["JavaScript (jsx)", "HTML5", "CSS3", "React Native", "Redux Toolkit", "RTK Query", "Expo"],
      "githubLink": "https://github.com/JennaCogswell/SKNotesApp",
      "projectLink": ""
    },
    {
      "title": "Portfolio",
      "description": "You're looking at it! I created this front-end only web app using React and TailwindCSS, to showcase my projects, coding skills, and UX design. Feel free to reach out with any feedback or inqueries!",
      "imagePath": "/portfolio.png",
      "techStack": ["JavaScript (jsx)", "HTML5", "CSS3", "React", "TailwindCSS", "Vercel", "Figma"],
      "githubLink": "https://github.com/JennaCogswell/portfolio",
      "projectLink": "https://jennacogswellportfolio.vercel.app/"
    }
  ]

  

  return (
    <div id='projects' className='flex md:h-[900px] h-fit md:max-h-screen'>
      <div class='w-full h-5/6 m-auto flex flex-row overflow-x-scroll overflow-visible snap-x snap-mandatory md:px-48'>
        {projects.map((project) => <ProjectCard title={project.title} description={project.description} imagePath={project.imagePath} techStack={project.techStack} githubLink={project.githubLink} projectLink={project.projectLink}/>)}
      </div>
      
    </div>
  )
}

export default Projects