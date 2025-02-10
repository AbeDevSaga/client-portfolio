import ProjectCard from "../components/ProjectCard";
import RoleSection from "../components/RoleSection";
import { projects } from "../constants/project";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="w-full mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}