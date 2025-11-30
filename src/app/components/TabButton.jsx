import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b-2 border-blue-500 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
    : "text-gray-400 hover:text-white border-b-2 border-transparent hover:border-gray-500";

  return (
    <button onClick={selectTab}>
      <p className={`px-6 py-3 font-semibold transition-all duration-300 ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
