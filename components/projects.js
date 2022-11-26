import ProjectCard from "./project_card";
import { projects } from "../data/projects";

function Projects(props) {
  return (
    <div
      className="flex flex-col gap-4 overflow-scroll max-w-7xl mx-auto px-8 py-20"
      id="projects"
    >
      <h2 className="mb-20 whitespace-nowrap leading-[1.1] font-semibold text-slate-300 text-step-5">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => {
          return <ProjectCard key={project.title} project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
