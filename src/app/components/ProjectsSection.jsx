"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 0,
    title: "PostEaze",
    description: "Social media management platform with AI-driven content optimization (Golang, PostgreSQL, Redis, React)",
    image: "/images/projects/posteaze.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shekhar8352/PostEaze",
    previewUrl: "https://github.com/shekhar8352/PostEaze",
  },
  {
    id: 1,
    title: "PostCard",
    description: "Social media web app with communities, real-time notifications, and 99 Lighthouse score (Next.js, MongoDB, TypeScript)",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shekhar8352/PostCard",
    previewUrl: "https://post-card-xuog.vercel.app/",
  },
  {
    id: 2,
    title: "ShareMe",
    description: "An image sharing social media platform (ReactJS, Sanity.io)",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shekhar8352/ShareMe",
    previewUrl: "https://shareme8352.netlify.app/",
  },
  {
    id: 3,
    title: "NextJS Portfolio",
    description: "Portfolio developed using react (NextJS)",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shekhar8352/Portfolio-new",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Movie-Carusel",
    description: "Movie recommendation website (React)",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shekhar8352/Movie-Carousel",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Emojipedia",
    description: "Encyclopedia of emijis (React)",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shekhar8352/EmojiPedia",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Keeper",
    description: "Clone of Google keep (ReactJS)",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shekhar8352/Keeper-App",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Leetcode",
    description: "my leetcode profile (knight)",
    image: "/images/projects/7.jpg",
    tag: ["All", "Platform"],
    gitUrl: "/",
    previewUrl: "https://leetcode.com/sudhanshu_8352/",
  },
  {
    id: 8,
    title: "Codeforces",
    description: "My codeforces profile (specialist)",
    image: "/images/projects/8.png",
    tag: ["All", "Platform"],
    gitUrl: "/",
    previewUrl: "https://codeforces.com/profile/shekharsudhanshu8352",
  },
  {
    id: 9,
    title: "Codechef",
    description: "My codechef profile (4 star)",
    image: "/images/projects/9.jpg",
    tag: ["All", "Platform"],
    gitUrl: "/",
    previewUrl: "https://www.codechef.com/users/sudhanshu8352",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-white mb-4">
          <span className="text-gradient">Projects & Coding Platforms</span>
        </h2>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          Showcasing full-stack applications and competitive programming achievements
        </p>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Platform"
            isSelected={tag === "Mobile"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
