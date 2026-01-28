import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ExperienceSection from "./components/ExperienceSection";
import GitHubStats from "./components/GitHubStats";
import CodingPlatforms from "./components/CodingPlatforms";
import SectionWrapper from "./components/SectionWrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0e1a]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <SectionWrapper>
          <HeroSection />
        </SectionWrapper>
        <SectionWrapper delay={0.1}>
          <AchievementsSection />
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <AboutSection />
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <ExperienceSection />
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <GitHubStats />
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <ProjectsSection />
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <CodingPlatforms />
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <EmailSection />
        </SectionWrapper>
      </div>
      <Footer />
    </main>
  );
}
