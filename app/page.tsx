import HeroSection from "./hero/page";
import AboutSection from "./about/page";
import ExperienceSection from "./WorkExperiance/page";
import ContactSection from "./contact/page";
import RoleAndSkills from "./skills/page";
import CertificationSection from "./Certification/page";
import MainProjects from "./MainProjects/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white">
      <HeroSection />
      <AboutSection />
      <CertificationSection/>
      <RoleAndSkills/>
      <MainProjects/>
      <ExperienceSection/>
      <ContactSection/>
    </main>
  );
}