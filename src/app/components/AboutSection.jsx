"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="tech-card group">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h4 className="font-semibold text-blue-400 text-lg">Languages</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Python", "JavaScript", "TypeScript", "Golang", "SQL", "C/C++"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm font-mono hover:bg-slate-600/50 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="tech-card group">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h4 className="font-semibold text-green-400 text-lg">Backend</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Node.js", "Express.js", "FastAPI", "Django", "PostgreSQL", "MongoDB", "Redis"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm font-mono hover:bg-slate-600/50 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="tech-card group">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h4 className="font-semibold text-purple-400 text-lg">Frontend</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {["React.js", "Next.js", "Angular.js", "Tailwind CSS"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm font-mono hover:bg-slate-600/50 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="tech-card group">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="font-semibold text-orange-400 text-lg">DevOps & AI</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Docker", "AWS", "Nginx", "Caddy", "LangChain", "Pinecone", "OpenAI", "RAG", "RabbitMQ", "Kafka"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-md text-sm font-mono hover:bg-slate-600/50 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-4">
        <div className="tech-card">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Indian Institute of Information Technology, Surat</h4>
              <p className="text-blue-400 font-medium">B.Tech in Electronics and Communication</p>
              <p className="text-gray-400 text-sm">2020 - 2024</p>
              <p className="text-cyan-400 font-mono mt-1">CGPA: 8.54/10.00</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-3">
        {[
          { name: "Full Stack Web Development", provider: "Udemy" },
          { name: "Prompt Engineering", provider: "deeplearning.ai" }
        ].map((cert, idx) => (
          <div key={idx} className="tech-card flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium">{cert.name}</p>
              <p className="text-gray-400 text-sm">{cert.provider}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-16" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center text-4xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Full-stack engineer passionate about building scalable solutions
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Introduction Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative tech-card text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Senior Engineer</h3>
                <p className="text-gray-400 text-sm">Marsh McLennan</p>
                <p className="text-blue-400 text-xs mt-1">May 2025 - Present</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative tech-card text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Engineer</h3>
                <p className="text-gray-400 text-sm">RAG & LangChain</p>
                <p className="text-purple-400 text-xs mt-1">30% faster responses</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative tech-card text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Competitive Coder</h3>
                <p className="text-gray-400 text-sm">LeetCode Knight</p>
                <p className="text-yellow-400 text-xs mt-1">Top 5.2% • 1867 rating</p>
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="tech-card p-8 mb-8"
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I am a <span className="text-blue-400 font-semibold">Senior Engineer</span> at Marsh McLennan with expertise in <span className="text-cyan-400">full-stack development</span> and <span className="text-cyan-400">AI-powered solutions</span>.
              I specialize in building scalable applications using <code>React</code>, <code>FastAPI</code>, <code>Django</code>, and <code>Golang</code>.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              My experience includes developing <code>RAG algorithms</code>, <code>LangChain agents</code>, microservices architecture, and enterprise-level platforms.
              Previously at Chat360, I engineered AI chatbots, voice bots, and marketing automation systems serving <span className="text-green-400 font-semibold">100,000+ daily users</span>.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m passionate about competitive programming with a <span className="text-yellow-400 font-semibold">LeetCode Knight</span> title (top 5.2%) and <span className="text-yellow-400 font-semibold">Codeforces Specialist</span> rating.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {TAB_DATA.map((item) => (
                <TabButton
                  key={item.id}
                  selectTab={() => handleTabChange(item.id)}
                  active={tab === item.id}
                >
                  {item.title}
                </TabButton>
              ))}
            </div>

            <div className="min-h-[300px]">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
