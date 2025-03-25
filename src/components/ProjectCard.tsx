
import React from 'react';
import { Project } from '@/lib/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <div className={`glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] ${className}`}>
      <div className="relative aspect-video bg-gradient-to-br from-primary/30 to-secondary">
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl p-4">
          {project.title}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-medium">
              {tag}
            </Badge>
          ))}
        </div>
        
        <p className="text-muted-foreground mb-6">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 justify-between items-center">
          <div className="text-sm text-muted-foreground">
            {new Date(project.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short'
            })}
          </div>
          
          <div className="flex gap-2">
            {project.githubUrl && (
              <Button variant="outline" size="sm" className="btn-hover" onClick={() => window.open(project.githubUrl, '_blank')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                Code
              </Button>
            )}
            
            {project.liveUrl && (
              <Button size="sm" className="btn-hover" onClick={() => window.open(project.liveUrl, '_blank')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
