
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
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
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div ref={heroRef} className="container mx-auto section-animate-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
              Data Science Student
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Hello, I'm<br />
              <span className="text-primary">Cornelius Ndavi</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Exploring and visualizing data to uncover insights and create impactful solutions. Passionate about using data science to solve real-world problems.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="btn-hover">
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="btn-hover">
                Contact Me
              </Button>
            </div>
          </div>
          <div className="relative lg:ml-auto">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-full animate-rotate-slow absolute -z-10 w-[90%] h-[90%] top-[5%] left-[5%]"></div>
            <div className="aspect-square bg-gradient-to-tl from-primary/20 to-primary/5 rounded-full animate-rotate-slow absolute -z-10 w-[85%] h-[85%] top-[7.5%] left-[7.5%]" style={{ animationDirection: 'reverse' }}></div>
            <div className="glass-card rounded-2xl overflow-hidden shadow-xl p-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="rounded-lg overflow-hidden aspect-square md:aspect-[4/3] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-500/30 mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-display text-2xl md:text-3xl font-bold">
                  Cornelius Ndavi
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16 md:mt-20 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <a href="#about" className="flex flex-col items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <span>Scroll Down</span>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="mt-2 animate-bounce"
            >
              <path 
                d="M12 5V19M12 19L5 12M12 19L19 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
