import React, { useRef } from 'react'
import ProjectCard from './ProjectCard';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";




const Projects = () => {

  const scrollContainerRef = useRef(null);

  const projects = [
    {
      "title": "The Grapevine Chronicles",
      "description": "A React and Next.js web application for users to sign up, log in, browse, create, and interact with posts such as short stories, blog posts, and articles. The application is built and hosted using AWS services such as Elastic Container Registry + Service, RDS, S3, Amazon Polly, and more. This was a solo course project for Cloud Computing which recieved a 15/15.",
      "imagePath": "/grapevinechronicles.png",
      "techStack": ["JavaScript (jsx)", "HTML5", "CSS3", "SQL", "React", "Next.js/NextAuth", "TailwindCSS", "Docker", "AWS VPC", "AWS ECR", "AWS ECS", "AWS CloudFront", "AWS EC2", "AWS RDS (MySQL)", "AWS S3", "AWS Secrets Manager", "Amazon Polly"],
      "githubLink": "https://github.com/JennaCogswell/CloudComputingProject",
    },
    {
      "title": "Culinary Explorer",
      "description": "A React and Next.js web application hosted on Vercel, for users to sign up, log in, post, search, and interect with recipe posts. This application used MongoDB Atlas/Mongoose for storing and retrieving user and post information. This was a six person group project for a Web Development course which recieved a 91%.",
      "imagePath": "/culinaryexplorer.png",
      "techStack": ["JavaScript (jsx)", "HTML5", "CSS3", "React", "Next.js/NextAuth", "Vercel", "TailwindCSS", "MongoDB Atlas", "Figma"],
      "githubLink": "https://github.com/JennaCogswell/CulinaryExplorer",
    },
    {
      "title": "Classifying Images of Facial Emotions",
      "description": "A Machine Learning Convolutional Neural Network for classifying images of facial emotions, created using Python with Tensorflow to create the model, numpy for data preprocessing, matplotlib for plotting the results, and more. This project was a two person group project for a Machine Learning course, which recieved a 100%.",
      "imagePath": "/machinelearning.png",
      "techStack": ["Python", "Jupyter Notebook", "CNN", "Tensorflow", "numpy", "pandas", "pyplot", "seaborn"],
      "githubLink": "https://github.com/JennaCogswell/MachineLearningGroupProjectCNN",
    },
    {
      "title": "Flip & Find",
      "description": "An Android Studio front-end only game application, catered towards children, for users to choose their game settings and flip over tiles to match the words to their images. This was a five person group project for a Mobile Development course.",
      "imagePath": "/flipnfind.png",
      "techStack": ["Kotlin", "Java", "XML", "Android Studio", "OOP"],
      "githubLink": "https://github.com/JennaCogswell/FlipAndFind",
    },
    {
      "title": "Notes App",
      "description": "A React Native application created using Expo, to create, search, edit, and delete notes with a title and a body. Notes are saved and updated locally using Redux Tollkit and RTK Query. This project was done solo, instructed by Shiftkey Academy Up, resulting in a Shiftkey Labs React Native Certification.",
      "imagePath": "/notesapp.png",
      "techStack": ["JavaScript (jsx)", "HTML5", "CSS3", "TailwindCSS", "React Native", "Redux Toolkit", "RTK Query", "Expo"],
      "githubLink": "https://github.com/JennaCogswell/SKNotesApp",
    },
    {
      "title": "Portfolio",
      "description": "You're looking at it! I created this front-end only web app using React and TailwindCSS, to showcase my projects, coding skills, and UX design. Feel free to reach out with any feedback or inqueries!",
      "imagePath": "/portfolio.png",
      "techStack": ["JavaScript (jsx)", "HTML5", "CSS3", "React", "TailwindCSS", "Vercel", "Figma"],
      "githubLink": "https://github.com/JennaCogswell/portfolio",
    }
  ]

  const scroll = (direction) => {
    const { current } = scrollContainerRef;
    if (direction === 'left') {
      current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  

  return (
    <div id='projects' className='relative flex md:h-[900px] h-fit md:max-h-screen'>
      <IoArrowBackCircleOutline className='absolute left-1 md:left-14 top-1/2 transform -translate-y-1/2 cursor-pointer text-4xl z-10 text-secondary hover:text-accent'
        onClick={() => scroll('left')}/>

      <div ref={scrollContainerRef} class='w-full h-5/6 m-auto flex flex-row overflow-x-scroll overflow-visible snap-x snap-mandatory md:px-48'>
        {projects.map((project) => <ProjectCard title={project.title} description={project.description} imagePath={project.imagePath} techStack={project.techStack} githubLink={project.githubLink}/>)}
      </div>

      <IoArrowForwardCircleOutline className='absolute right-1 md:right-14 top-1/2 transform -translate-y-1/2 cursor-pointer text-4xl z-10 text-secondary hover:text-accent'
        onClick={() => scroll('right')}/>

      
    </div>
  )
}

export default Projects