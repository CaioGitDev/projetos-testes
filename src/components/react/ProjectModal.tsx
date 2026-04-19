import { useEffect } from "react";
import type { Project } from "@/lib/cms";

interface Props {
  project: Project | null;
  onClose: () => void;
  locale: string;
}

export default function ProjectModal({ project, onClose, locale }: Props) {
  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-dark/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="bg-white w-full md:max-w-4xl max-h-[90vh] overflow-y-auto rounded-t-2xl md:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover rounded-t-2xl"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/90 rounded-full text-dark hover:bg-white transition-colors text-2xl leading-none"
            aria-label={locale === "pt" ? "Fechar" : "Close"}
          >
            &times;
          </button>
        </div>

        <div className="p-8">
          <p className="text-primary text-xs font-medium uppercase tracking-wider mb-2">
            {project.category}
          </p>
          <h2 className="text-3xl font-bold text-dark mb-6">{project.title}</h2>

          <div className="grid grid-cols-3 gap-4 border-t border-b border-gray-200 py-6 mb-8">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                {locale === "pt" ? "Localização" : "Location"}
              </p>
              <p className="font-medium text-dark text-sm">{project.location}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                {locale === "pt" ? "Ano" : "Year"}
              </p>
              <p className="font-medium text-dark text-sm">{project.year}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                {locale === "pt" ? "Área" : "Area"}
              </p>
              <p className="font-medium text-dark text-sm">{project.area}</p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">{project.description}</p>

          {project.images.length > 1 && (
            <div>
              <h3 className="text-lg font-semibold text-dark mb-4">
                {locale === "pt" ? "Galeria" : "Gallery"}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {project.images.slice(1).map((img, i) => (
                  <div key={i} className="aspect-video overflow-hidden rounded-lg">
                    <img
                      src={img}
                      alt={`${project.title} ${i + 2}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
