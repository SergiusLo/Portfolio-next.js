"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { Element } from 'react-scroll';

const projectsData = [
  {
    id: 1,
    title: "Shot-app",
    description: "Dribble clone",
    image: "/images/projects/shoot-app.png",
    tag: ["All", "App"],
    gitUrl: "https://github.com/SergiusLo/Shot-app",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "DFG",
    description: "Landing page",
    image: "/images/projects/dfg.png",
    tag: ["All", "Markup"],
    gitUrl: "https://github.com/SergiusLo/DFG_website",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Amazon",
    description: "Amazon clone",
    image: "/images/projects/amazon-app.png",
    tag: ["All", "App"],
    gitUrl: "https://github.com/SergiusLo/amazon-clone-next",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Elden Ring Blog",
    description: "Blog about Elden Ring",
    image: "/images/projects/elden-blog.png",
    tag: ["All", "App"],
    gitUrl: "https://github.com/SergiusLo/Elden_blog",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Meetups App",
    description: "Meetups App on React.js",
    image: "/images/projects/meets-app.png",
    tag: ["All", "App"],
    gitUrl: "https://github.com/SergiusLo/meetups-app-react",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Pig Game",
    description: "Pig game for 2 local-players",
    image: "/images/projects/pig-game.png",
    tag: ["All", "Markup"],
    gitUrl: "https://github.com/SergiusLo/Pig_game",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariant = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        ProjectsSection
      </h2>
      <div className="text-white flex flex-grow justify-center items-center gap-2  py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="App"
          isSelected={tag === "App"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Markup"
          isSelected={tag === "Markup"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProject.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariant}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  
  );
};

export default ProjectsSection;
