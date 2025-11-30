"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CodeBracketIcon, ArrowTopRightOnSquareIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const projectsData = [
  {
    id: 0,
    title: "PostEaze",
    description: "Social media management platform enabling businesses to integrate and manage multiple social channels from a unified dashboard",
    tech: ["Golang", "PostgreSQL", "Redis", "React", "Mantine UI", "Docker"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shekhar8352/PostEaze",
    previewUrl: "https://github.com/shekhar8352/PostEaze",
    highlights: ["AI-driven content optimization", "Multi-platform scheduling", "Analytics & reporting"],
  },
  {
    id: 1,
    title: "PostCard",
    description: "Social media web app with topic-based communities, real-time notifications, and 99 Lighthouse score",
    tech: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS", "Clerk"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shekhar8352/PostCard",
    previewUrl: "https://post-card-xuog.vercel.app/",
    highlights: ["Community-based access control", "Real-time notifications", "25+ active users"],
  },
  {
    id: 2,
    title: "ShareMe",
    description: "Image sharing social media platform with pin-style content organization",
    tech: ["React.js", "Sanity.io", "Tailwind CSS"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shekhar8352/ShareMe",
    previewUrl: "https://shareme8352.netlify.app/",
    highlights: ["Google OAuth", "Image upload & sharing", "Category-based browsing"],
  },
  {
    id: 3,
    title: "NextJS Portfolio",
    description: "Modern portfolio website with dark theme and smooth animations",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shekhar8352/Portfolio-new",
    previewUrl: "/",
    highlights: ["Responsive design", "Email integration", "SEO optimized"],
  },
  {
    id: 4,
    title: "Movie Carousel",
    description: "Movie recommendation website with TMDB API integration",
    tech: ["React", "TMDB API", "CSS"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shekhar8352/Movie-Carousel",
    previewUrl: "#",
    highlights: ["Movie search", "Trending movies", "Detailed info cards"],
  },
  {
    id: 5,
    title: "Emojipedia",
    description: "Encyclopedia of emojis with search and categorization",
    tech: ["React", "JavaScript"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shekhar8352/EmojiPedia",
    previewUrl: "#",
    highlights: ["Emoji database", "Search functionality", "Clean UI"],
  },
  {
    id: 6,
    title: "Keeper App",
    description: "Note-taking app inspired by Google Keep",
    tech: ["React", "JavaScript", "CSS"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shekhar8352/Keeper-App",
    previewUrl: "#",
    highlights: ["Add/delete notes", "Persistent storage", "Minimalist design"],
  },
  {
    id: 7,
    title: "LeetCode",
    description: "Knight badge • Top 5.2% • Contest Rating: 1867",
    tech: ["Python", "C++", "Algorithms", "Data Structures"],
    tag: ["All", "Platform"],
    gitUrl: "#",
    previewUrl: "https://leetcode.com/sudhanshu_8352/",
    highlights: ["1000+ problems solved", "Knight badge", "Contest rating 1867"],
  },
  {
    id: 8,
    title: "Codeforces",
    description: "Specialist badge • Max Rating: 1440",
    tech: ["C++", "Algorithms", "Competitive Programming"],
    tag: ["All", "Platform"],
    gitUrl: "#",
    previewUrl: "https://codeforces.com/profile/shekharsudhanshu8352",
    highlights: ["Specialist badge", "Max rating 1440", "Regular contests"],
  },
  {
    id: 9,
    title: "CodeChef",
    description: "4 Star coder with consistent performance",
    tech: ["C++", "Python", "Problem Solving"],
    tag: ["All", "Platform"],
    gitUrl: "#",
    previewUrl: "https://www.codechef.com/users/sudhanshu8352",
    highlights: ["4 star rating", "Long challenges", "Cook-offs"],
  },
];

const ITEMS_PER_PAGE = 3;

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

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

        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          <button
            onClick={() => handleTagChange("All")}
            className={`px-6 py-2.5 rounded-full border-2 text-sm font-semibold transition-all duration-300 hover:scale-105 ${tag === "All"
                ? "text-white bg-gradient-to-r from-blue-600 to-cyan-600 border-transparent shadow-lg shadow-blue-500/30"
                : "text-gray-400 border-slate-600 hover:border-blue-500 hover:text-white bg-slate-800/30"
              }`}
          >
            All ({projectsData.length})
          </button>
          <button
            onClick={() => handleTagChange("Web")}
            className={`px-6 py-2.5 rounded-full border-2 text-sm font-semibold transition-all duration-300 hover:scale-105 ${tag === "Web"
                ? "text-white bg-gradient-to-r from-blue-600 to-cyan-600 border-transparent shadow-lg shadow-blue-500/30"
                : "text-gray-400 border-slate-600 hover:border-blue-500 hover:text-white bg-slate-800/30"
              }`}
          >
            Web Projects ({projectsData.filter(p => p.tag.includes("Web")).length})
          </button>
          <button
            onClick={() => handleTagChange("Platform")}
            className={`px-6 py-2.5 rounded-full border-2 text-sm font-semibold transition-all duration-300 hover:scale-105 ${tag === "Platform"
                ? "text-white bg-gradient-to-r from-blue-600 to-cyan-600 border-transparent shadow-lg shadow-blue-500/30"
                : "text-gray-400 border-slate-600 hover:border-blue-500 hover:text-white bg-slate-800/30"
              }`}
          >
            Coding Platforms ({projectsData.filter(p => p.tag.includes("Platform")).length})
          </button>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.gitUrl !== "#" && (
                      <Link
                        href={project.gitUrl}
                        target="_blank"
                        className="w-8 h-8 rounded-lg bg-slate-700/50 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <CodeBracketIcon className="w-5 h-5 text-blue-400" />
                      </Link>
                    )}
                    {project.previewUrl !== "#" && (
                      <Link
                        href={project.previewUrl}
                        target="_blank"
                        className="w-8 h-8 rounded-lg bg-slate-700/50 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <ArrowTopRightOnSquareIcon className="w-5 h-5 text-cyan-400" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <ul className="space-y-1 mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-400 text-xs">
                        <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-700/50 text-blue-300 rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${currentPage === 1
                  ? "bg-slate-800/30 text-gray-600 cursor-not-allowed"
                  : "bg-slate-800/50 text-white hover:bg-blue-500/20 hover:border-blue-500/50 border border-slate-700/50"
                }`}
            >
              <ChevronLeftIcon className="w-5 h-5" />
              Previous
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${currentPage === page
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50 border border-slate-700/50"
                    }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${currentPage === totalPages
                  ? "bg-slate-800/30 text-gray-600 cursor-not-allowed"
                  : "bg-slate-800/50 text-white hover:bg-blue-500/20 hover:border-blue-500/50 border border-slate-700/50"
                }`}
            >
              Next
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Results info */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length} {tag !== "All" ? tag.toLowerCase() : ""} projects
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
