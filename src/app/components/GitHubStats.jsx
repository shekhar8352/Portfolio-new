"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const GitHubStats = () => {
    const username = "shekhar8352";

    return (
        <section className="py-16 bg-gradient-to-b from-transparent to-slate-900/20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-center text-4xl font-bold text-white mb-4">
                        <span className="text-gradient">GitHub Activity</span>
                    </h2>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                        My open-source contributions and coding activity
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-8">
                    {/* GitHub Stats Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="grid md:grid-cols-2 gap-6"
                    >
                        {/* Stats Card */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                                <Image
                                    src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=00000000&title_color=3b82f6&icon_color=06b6d4&text_color=e5e7eb&ring_color=3b82f6`}
                                    alt="GitHub Stats"
                                    width={495}
                                    height={195}
                                    className="w-full h-auto"
                                    unoptimized
                                />
                            </div>
                        </div>

                        {/* Top Languages */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                                <Image
                                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=00000000&title_color=8b5cf6&text_color=e5e7eb`}
                                    alt="Top Languages"
                                    width={495}
                                    height={195}
                                    className="w-full h-auto"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Streak Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 hover:border-green-500/50 transition-all duration-300 overflow-hidden">
                            <Image
                                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=00000000&ring=3b82f6&fire=06b6d4&currStreakLabel=e5e7eb&sideLabels=e5e7eb&currStreakNum=3b82f6&sideNums=06b6d4`}
                                alt="GitHub Streak"
                                width={800}
                                height={220}
                                className="w-full h-auto"
                                unoptimized
                            />
                        </div>
                    </motion.div>

                    {/* Contribution Graph */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                Contribution Calendar
                            </h3>
                            <div className="overflow-x-auto">
                                <Image
                                    src={`https://ghchart.rshah.org/3b82f6/${username}`}
                                    alt="GitHub Contribution Graph"
                                    width={800}
                                    height={150}
                                    className="w-full h-auto min-w-[600px]"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GitHubStats;
