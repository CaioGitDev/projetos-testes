import { useState, useEffect } from "react";

interface Props {
  projects: Array<{
    id: string;
    slug: string;
    title: string;
    category: string;
    location: string;
    year: number;
    images: string[];
  }>;
}

export default function ProjectCarousel({ projects }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [projects.length]);

  if (projects.length === 0) return null;

  const project = projects[currentIndex];

  return (
    <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg">
      <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent flex items-end">
        <div className="max-w-7xl mx-auto px-6 pb-12 w-full">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">
            {project.category}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h2>
          <p className="text-white/80 text-lg">
            {project.location} • {project.year}
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 flex gap-2"> 
        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-primary w-8" : "bg-white/50 hover:bg-white"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
