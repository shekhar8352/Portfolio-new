import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t border-blue-500/10 text-white bg-[#0a0e1a]/80 backdrop-blur-md">
      <div className="container p-12 flex justify-between items-center">
        <span className="text-2xl font-bold text-gradient">Sudhanshu Shekhar</span>
        <p className="text-slate-400">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
