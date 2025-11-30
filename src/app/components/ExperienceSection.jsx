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
        <section id="experience" className="py-8 px-4 xl:px-16 sm:py-16">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                Professional Experience
            </h2>
            <div className="space-y-8">
                {experienceData.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-[#181818] rounded-lg p-6 border border-[#33353F] hover:border-yellow-500 transition-all duration-300"
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                <p className="text-xl text-yellow-500 font-semibold">{exp.company}</p>
                            </div>
                            <div className="text-[#ADB7BE] mt-2 md:mt-0 md:text-right">
                                <p className="font-medium">{exp.duration}</p>
                                <p className="text-sm">{exp.location}</p>
                            </div>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-[#ADB7BE]">
                            {exp.highlights.map((highlight, idx) => (
                                <li key={idx} className="text-base leading-relaxed">
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
