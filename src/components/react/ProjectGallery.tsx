import { useState } from "react";

interface Project {
  id: string;
  slug: string;
  title: string;
  category: "residential" | "commercial" | "cultural";
  location: string;
  year: number;
  images: string[];
  featured: boolean;
}

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

export default function ProjectGallery({ projects, labels, locale }: Props) {
  const [filter, setFilter] = useState<"all" | Project["category"]>("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filters: Array<{ key: typeof filter; label: string }> = [
    { key: "all", label: labels.filterAll },
    { key: "residential", label: labels.filterResidential },
    { key: "commercial", label: labels.filterCommercial },
    { key: "cultural", label: labels.filterCultural },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="flex flex-wrap gap-4 mb-8">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === key ? "bg-primary text-dark" : "bg-gray-100 text-dark hover:bg-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <a key={project.id} href={`/${locale}/projetos/${project.slug}`} className="group block">
            <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-primary text-xs font-medium uppercase tracking-wider mb-1">
              {project.category}
            </p>
            <h3 className="text-xl font-semibold text-dark mb-1 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm">
              {project.location} • {project.year}
            </p>
          </a>
        ))}
      </div>

      {lightboxImage && (
        <dialog
          className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-6"
          onClick={() => setLightboxImage(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightboxImage(null)}
          aria-modal="true"
          open
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white text-4xl hover:text-primary transition-colors"
            aria-label="Close lightbox"
            onClick={() => setLightboxImage(null)}
          >
            &times;
          </button>
          <img
            src={lightboxImage}
            alt=""
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          />
        </dialog>
      )}
    </>
  );
}
