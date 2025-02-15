import MainProjects from "../components/MainProjects";
import SectionHeader from "../components/SectionHeader";
import WrapCard from "../components/WrapCard";
import { main_projects } from "../constants/main_projects";

const MainProjectsSection = () => {
  return (
    <section id="work" className="py-12 px-4 bg-background">
      <SectionHeader sectionKey="projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {main_projects.map((projects, index) => (
          <WrapCard key={index}>
            <MainProjects project={projects} />
          </WrapCard>
        ))}
      </div>
    </section>
  );
};

export default MainProjectsSection;
