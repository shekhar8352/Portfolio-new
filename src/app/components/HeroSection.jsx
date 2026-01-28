"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          {/* Terminal-style greeting */}
          <div className="mb-4 font-mono text-sm text-secondary-400">
            <span className="text-secondary-400">$</span> whoami
          </div>

          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-gradient">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Sudhanshu",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gradient"
            />
          </h1>

          <p className="text-gray-300 text-base sm:text-lg mb-6 lg:text-xl max-w-2xl">
            <span className="text-primary-400 font-semibold">Software Engineer</span> at Marsh McLennan |
            Full Stack Developer specializing in{" "}
            <code className="text-secondary-400">React</code>,{" "}
            <code className="text-secondary-400">FastAPI</code>, and{" "}
            <code className="text-secondary-400">AI-powered solutions</code>
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center sm:justify-start">
            {["Python", "TypeScript", "Golang", "React", "AI/ML"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono bg-surface/50 border border-primary-500/30 text-primary-300 rounded-full hover:border-primary-400 hover:shadow-[0_0_10px_rgba(99,102,241,0.3)] transition-all"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="group px-8 py-3 w-full sm:w-fit rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white font-semibold shadow-lg hover:shadow-primary-500/50 transition-all duration-300 text-center"
            >
              <span className="flex items-center justify-center gap-2">
                Hire Me
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              href="https://drive.google.com/file/d/184SIkQi_L5rAGNQPt_V_bswt7o9ypq0V/view"
              className="group px-8 py-3 w-full sm:w-fit rounded-lg border-2 border-primary-500 hover:bg-primary-500/10 text-primary-400 hover:text-primary-300 font-semibold transition-all duration-300 text-center"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative">
            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>

            <div className="relative rounded-full bg-gradient-to-br from-surface to-background w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] border-2 border-primary-500/30 shadow-[0_0_30px_rgba(99,102,241,0.3)] overflow-hidden animate-float">
              <Image
                src="/images/hero2-image.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
