"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const platformsData = [
    {
        id: 1,
        name: "LeetCode",
        badge: "Knight",
        rating: "1867",
        description: "Top 5.2% • Contest Rating: 1867",
        stats: ["1000+ problems solved", "Knight badge", "Regular contests"],
        url: "https://leetcode.com/sudhanshu_8352/",
        color: "from-yellow-500 to-orange-500",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
    },
    {
        id: 2,
        name: "Codeforces",
        badge: "Specialist",
        rating: "1440",
        description: "Specialist badge • Max Rating: 1440",
        stats: ["Specialist badge", "Max rating 1440", "Regular contests"],
        url: "https://codeforces.com/profile/shekharsudhanshu8352",
        color: "from-blue-500 to-cyan-500",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        id: 3,
        name: "CodeChef",
        badge: "4 Star",
        rating: "4★",
        description: "4 Star coder with consistent performance",
        stats: ["4 star rating", "Long challenges", "Cook-offs"],
        url: "https://www.codechef.com/users/sudhanshu8352",
        color: "from-purple-500 to-pink-500",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        ),
    },
];

const CodingPlatforms = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-slate-900/20 to-transparent">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-center text-4xl font-bold text-white mb-4">
                        <span className="text-gradient">Competitive Programming</span>
                    </h2>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                        Achievements and rankings on competitive coding platforms
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
                    {platformsData.map((platform, index) => (
                        <motion.div
                            key={platform.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>

                            {/* Card */}
                            <Link
                                href={platform.url}
                                target="_blank"
                                className="relative block h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                            >
                                {/* Icon Badge */}
                                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-lg`}>
                                    {platform.icon}
                                </div>

                                {/* Platform Name */}
                                <h3 className="text-2xl font-bold text-white text-center mb-2 group-hover:text-blue-400 transition-colors">
                                    {platform.name}
                                </h3>

                                {/* Badge */}
                                <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${platform.color} text-white text-sm font-semibold mb-3 mx-auto block w-fit`}>
                                    {platform.badge}
                                </div>

                                {/* Rating */}
                                <div className="text-center mb-4">
                                    <span className="text-3xl font-bold text-gradient">
                                        {platform.rating}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 text-sm text-center mb-4">
                                    {platform.description}
                                </p>

                                {/* Stats */}
                                <ul className="space-y-2">
                                    {platform.stats.map((stat, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-gray-400 text-xs">
                                            <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{stat}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Visit Link */}
                                <div className="mt-6 flex items-center justify-center gap-2 text-blue-400 text-sm font-semibold group-hover:text-cyan-400 transition-colors">
                                    <span>View Profile</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CodingPlatforms;
