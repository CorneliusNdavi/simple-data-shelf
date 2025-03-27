
import React, { useState } from 'react';
import { Project } from '@/lib/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Code, ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  className?: string;
  style?: React.CSSProperties;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className, style }) => {
  const [showCode, setShowCode] = useState(false);

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className={`glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] ${className}`}
      style={style}
    >
      <div className="relative aspect-video overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        ) : (
          <div className="bg-gradient-to-br from-primary/30 to-secondary w-full h-full"></div>
        )}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h3 className="text-white font-bold text-xl p-4 text-center">{project.title}</h3>
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
        
        {project.codeSnippet && (
          <div className="mb-6">
            <Button 
              variant="outline" 
              size="sm" 
              className="mb-2 w-full flex items-center justify-center gap-2"
              onClick={() => setShowCode(!showCode)}
            >
              <Code size={16} />
              {showCode ? 'Hide Code Snippet' : 'View Code Snippet'}
            </Button>
            
            {showCode && (
              <Card className="bg-slate-950 text-slate-50 overflow-x-auto">
                <CardContent className="p-4">
                  <pre className="text-xs md:text-sm">
                    <code>{project.codeSnippet}</code>
                  </pre>
                </CardContent>
              </Card>
            )}
          </div>
        )}
        
        <div className="flex flex-wrap gap-3 justify-between items-center">
          <div className="text-sm text-muted-foreground">
            {new Date(project.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short'
            })}
          </div>
          
          <div className="flex gap-2">
            {project.githubUrl && (
              <Button 
                variant="outline" 
                size="sm" 
                className="btn-hover"
                onClick={() => handleExternalLink(project.githubUrl || '')}
              >
                <Github size={16} className="mr-2" />
                Code
              </Button>
            )}
            
            {project.liveUrl && (
              <Button 
                size="sm" 
                className="btn-hover"
                onClick={() => handleExternalLink(project.liveUrl || '')}
              >
                <ExternalLink size={16} className="mr-2" />
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
