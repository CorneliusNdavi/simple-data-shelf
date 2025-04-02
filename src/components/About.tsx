
import React, { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="bg-secondary/50">
      <div ref={aboutRef} className="container mx-auto section-animate-in">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Who I Am</h2>
          <div className="mt-4 w-20 h-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <h3 className="text-2xl font-bold">Data Scientist & Analyst</h3>
            <p className="text-muted-foreground">
              I'm Cornelius Ndavi, a passionate data scientist with a strong foundation in statistical analysis and machine learning. My journey in data science began with a curiosity about how data can be used to solve complex problems and drive decision-making.
            </p>
            <p className="text-muted-foreground">
              I specialize in data analysis, visualization, and building predictive models. My goal is to extract meaningful insights from data and communicate them effectively to stakeholders.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Education</h4>
                <p className="text-sm text-muted-foreground">B.Sc. in Data Science</p>
              </div>
              
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Experience</h4>
                <p className="text-sm text-muted-foreground">1+ year working with data</p>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="font-semibold mb-4">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'R', 'SQL', 'Machine Learning', 'Data Visualization', 'Statistical Analysis', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Tableau'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-background rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full animate-rotate-slow -z-10"></div>
            <div className="glass-card rounded-2xl overflow-hidden shadow-xl">
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Data Analysis</h4>
                      <div className="mt-1 w-full bg-secondary rounded-full h-1.5">
                        <div className="bg-primary h-1.5 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Machine Learning</h4>
                      <div className="mt-1 w-full bg-secondary rounded-full h-1.5">
                        <div className="bg-primary h-1.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                        <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Data Visualization</h4>
                      <div className="mt-1 w-full bg-secondary rounded-full h-1.5">
                        <div className="bg-primary h-1.5 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Statistical Modeling</h4>
                      <div className="mt-1 w-full bg-secondary rounded-full h-1.5">
                        <div className="bg-primary h-1.5 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
