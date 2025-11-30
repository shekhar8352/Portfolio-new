"use client";
import React from "react";
import { motion } from "framer-motion";

const experienceData = [
    {
        id: 1,
        company: "Marsh McLennan",
        role: "Senior Engineer – Application Development",
        duration: "May 2025 – Present",
        location: "Pune, Maharashtra",
        color: "from-blue-500 to-cyan-500",
        highlights: [
            "Working on a global sourcing and procurement platform for the Marsh McLennan Global Procurement team",
            "Developed a comprehensive Supplier Management module using ReactJS and FastAPI",
            "Leading the development of a revamped UI with a modern, responsive design system",
            "Collaborating with cross-functional teams to optimize API performance",
        ],
    },
    {
        id: 2,
        company: "Chat360",
        role: "Software Engineer",
        duration: "June 2024 - Ongoing",
        location: "Pune, Maharashtra",
        color: "from-purple-500 to-pink-500",
        highlights: [
            "Engineered RAG algorithms, LangChain agents, and Agentic AI using OpenAI, LangChain, Pinecone, and AWS Boto, resulting in a 30% reduction in response time",
            "Designed a bulk email system using Django, Redis, PostgreSQL, RabbitMQ, Celery, and SparkPost, enabling over 100,000 emails per day with 99.9% reliability",
            "Developed an AI-powered voice bot solution on a Golang microservice architecture using Google Speech-to-Text and Text-to-Speech APIs",
            "Built features for live chat, bot-flows, and WhatsApp campaigns, leading to a 15% increase in user engagement",
            "Led the development of an end-to-end app for the Salesforce AppExchange marketplace, increasing client integration capabilities by 25%",
        ],
    },
];

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-4xl font-bold text-white mb-4">
                    <span className="text-gradient">Professional Experience</span>
                </h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                    Building scalable solutions and AI-powered applications
                </p>

                <div className="max-w-5xl mx-auto">
                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>

                        <div className="space-y-12">
                            {experienceData.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
                                >
                                    {/* Timeline dot */}
                                    <div className={`hidden md:block absolute top-8 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg transform ${index % 2 === 0 ? 'translate-x-1/2' : '-translate-x-1/2'}`}>
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r ${exp.color} animate-ping opacity-75"></div>
                                    </div>

                                    <div className="group relative">
                                        {/* Glow effect */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                                        {/* Card */}
                                        <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
                                            {/* Header */}
                                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                                                <div className="flex-1">
                                                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white text-xs font-semibold mb-2`}>
                                                        {exp.company}
                                                    </div>
                                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                                </div>
                                                <div className="text-gray-400 md:text-right">
                                                    <p className="font-medium text-sm flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        {exp.duration}
                                                    </p>
                                                    <p className="text-sm flex items-center gap-1 mt-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        {exp.location}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Highlights */}
                                            <ul className="space-y-3">
                                                {exp.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
                                                        <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
