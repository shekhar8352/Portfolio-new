import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-gradient-to-r from-blue-600 to-cyan-600 border-transparent shadow-lg shadow-blue-500/30"
    : "text-gray-400 border-slate-600 hover:border-blue-500 hover:text-white bg-slate-800/30";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-2.5 text-sm font-semibold cursor-pointer transition-all duration-300 hover:scale-105`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
