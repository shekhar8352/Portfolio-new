"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-yellow-500 mb-2">Languages</h4>
          <ul className="list-disc pl-2">
            <li>Python</li>
            <li>JavaScript/TypeScript</li>
            <li>Golang</li>
            <li>SQL</li>
            <li>C/C++</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-yellow-500 mb-2">Backend</h4>
          <ul className="list-disc pl-2">
            <li>Node.js/Express.js</li>
            <li>FastAPI</li>
            <li>Django</li>
            <li>PostgreSQL/MongoDB</li>
            <li>Redis</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-yellow-500 mb-2">Frontend</h4>
          <ul className="list-disc pl-2">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Angular.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-yellow-500 mb-2">DevOps & AI</h4>
          <ul className="list-disc pl-2">
            <li>Docker/AWS</li>
            <li>Nginx/Caddy</li>
            <li>LangChain/Pinecone</li>
            <li>OpenAI/RAG</li>
            <li>RabbitMQ/Kafka</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Indian Institute of Information Technology, Surat</li>
        <li>B.Tech in Electronics and Communication (2020-2024)</li>
        <li>CGPA: 8.54/10.00</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Full stack web developement (Udemy)</li>
        <li>Prompt Engineering (www.deeplearning.ai)</li>
      </ul>
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Senior Engineer at Marsh McLennan with expertise in full-stack development
            and AI-powered solutions. I specialize in building scalable applications using
            React, FastAPI, Django, and Golang. My experience includes developing RAG algorithms,
            LangChain agents, microservices architecture, and enterprise-level platforms.
            Previously at Chat360, I engineered AI chatbots, voice bots, and marketing automation
            systems serving 100,000+ daily users. I'm passionate about competitive programming
            with a LeetCode Knight title (top 5.2%) and Codeforces Specialist rating.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
