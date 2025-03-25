
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4',
        {
          'py-2 bg-background/80 backdrop-blur-md shadow-sm': scrolled,
          'bg-transparent': !scrolled
        }
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-display font-medium transition-all hover:text-primary">
          C<span className="text-primary">.</span>Ndavi
        </a>
        
        <button 
          className="md:hidden flex items-center" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300"
          >
            {mobileMenuOpen ? (
              <path 
                d="M18 6L6 18M6 6L18 18" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            ) : (
              <path 
                d="M4 6H20M4 12H20M4 18H20" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
        
        <nav className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md md:backdrop-blur-none md:bg-transparent md:relative md:inset-auto flex items-center justify-center transition-all duration-300 ease-in-out",
          {
            "opacity-100 pointer-events-auto": mobileMenuOpen,
            "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto": !mobileMenuOpen
          }
        )}>
          <ul className="flex flex-col md:flex-row gap-8 md:gap-6 text-center">
            <li>
              <a href="#home" className="relative text-lg md:text-base font-medium hover:text-primary transition-colors py-1 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:bg-primary after:transition-all hover:after:w-full" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="relative text-lg md:text-base font-medium hover:text-primary transition-colors py-1 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:bg-primary after:transition-all hover:after:w-full" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="relative text-lg md:text-base font-medium hover:text-primary transition-colors py-1 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:bg-primary after:transition-all hover:after:w-full" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="relative text-lg md:text-base font-medium hover:text-primary transition-colors py-1 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:bg-primary after:transition-all hover:after:w-full" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
