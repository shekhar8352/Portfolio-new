"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "25",
    postfix: "+",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-500",
  },
  {
    metric: "DSA Problems",
    value: "1000",
    postfix: "+",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    color: "from-green-500 to-emerald-500",
  },
  {
    metric: "LeetCode",
    value: "1867",
    postfix: "",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    color: "from-yellow-500 to-orange-500",
  },
  {
    metric: "Codeforces",
    value: "1440",
    postfix: "",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "from-purple-500 to-pink-500",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 sm:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievementsList.map((achievement, index) => {
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>

                {/* Card */}
                <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4 text-white shadow-lg`}>
                    {achievement.icon}
                  </div>

                  {/* Number */}
                  <h2 className="text-white text-3xl md:text-4xl font-bold flex flex-row mb-2">
                    {achievement.prefix}
                    <AnimatedNumbers
                      includeComma
                      animateToNumber={parseInt(achievement.value)}
                      locale="en-US"
                      className="text-white text-3xl md:text-4xl font-bold"
                      configs={(_, index) => {
                        return {
                          mass: 1,
                          friction: 100,
                          tensions: 140 * (index + 1),
                        };
                      }}
                    />
                    {achievement.postfix}
                  </h2>

                  {/* Label */}
                  <p className="text-gray-400 text-sm font-medium">{achievement.metric}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
