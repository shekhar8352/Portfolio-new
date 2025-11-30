import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

      {/* Card */}
      <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div
          className="h-52 md:h-64 relative group/image overflow-hidden"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-60 group-hover/image:opacity-90 transition-opacity duration-300"></div>

          {/* Action buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover/image:opacity-100 transition-all duration-300 transform translate-y-4 group-hover/image:translate-y-0">
            <Link
              href={gitUrl}
              className="w-12 h-12 rounded-full bg-slate-800/90 border-2 border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <CodeBracketIcon className="w-6 h-6 text-blue-400" />
            </Link>
            <Link
              href={previewUrl}
              className="w-12 h-12 rounded-full bg-slate-800/90 border-2 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <EyeIcon className="w-6 h-6 text-cyan-400" />
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h5 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {title}
          </h5>
          <p className="text-gray-400 text-sm leading-relaxed flex-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
