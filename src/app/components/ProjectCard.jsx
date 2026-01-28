import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

      {/* Card */}
      <div className="relative bg-surface border border-white/5 rounded-xl overflow-hidden hover:border-primary-500/50 transition-colors duration-300 h-full flex flex-col">
        {/* Image */}
        <div
          className="h-52 md:h-64 relative group/image overflow-hidden"
        >
          <div
             className="absolute inset-0 transition-transform duration-500 group-hover/image:scale-110"
             style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-surface/80 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <Link
              href={gitUrl}
              className="w-12 h-12 rounded-full border-2 border-slate-400 hover:border-white text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 bg-slate-900/50 backdrop-blur-sm"
              target="_blank"
            >
              <CodeBracketIcon className="w-6 h-6" />
            </Link>
            <Link
              href={previewUrl}
              className="w-12 h-12 rounded-full border-2 border-slate-400 hover:border-white text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 bg-slate-900/50 backdrop-blur-sm"
              target="_blank"
            >
              <EyeIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col pt-8">
          <h5 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
            {title}
          </h5>
          <p className="text-gray-400 text-sm leading-relaxed flex-1">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
