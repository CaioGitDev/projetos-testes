import { useState } from "react";
import type { Project } from "@/lib/cms";
import ProjectGallery from "./ProjectGallery";
import ProjectModal from "./ProjectModal";

interface Props {
  projects: Project[];
  labels: {
    filterAll: string;
    filterResidential: string;
    filterCommercial: string;
    filterCultural: string;
  };
  locale: string;
}

export default function ProjectsSection({ projects, labels, locale }: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <ProjectGallery
        projects={projects}
        labels={labels}
        locale={locale}
        onProjectClick={setSelectedProject}
      />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        locale={locale}
      />
    </>
  );
}
