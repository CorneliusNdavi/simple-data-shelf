
import React, { useEffect, useRef, useState } from 'react';
import { getAllProjects, Project } from '@/lib/projects';
import ProjectCard from './ProjectCard';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  
  useEffect(() => {
    const projectsData = getAllProjects();
    setProjects(projectsData);
    
    // Extract all unique tags
    const tags = Array.from(new Set(projectsData.flatMap(project => project.tags)));
    setAllTags(tags);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };
  
  const filteredProjects = selectedTags.length > 0
    ? projects.filter(project => 
        selectedTags.some(tag => project.tags.includes(tag))
      )
    : projects;

  return (
    <section id="projects">
      <div ref={projectsRef} className="container mx-auto section-animate-in">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Recent Work</h2>
          <div className="mt-4 w-20 h-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            {allTags.map(tag => (
              <Badge 
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className={`cursor-pointer ${selectedTags.includes(tag) ? '' : 'hover:bg-secondary'}`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
          {selectedTags.length > 0 && (
            <div className="text-center mt-2">
              <button 
                onClick={() => setSelectedTags([])}
                className="text-sm text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project}
                className="opacity-0 animate-fade-up"
                style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No projects match the selected filters.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
