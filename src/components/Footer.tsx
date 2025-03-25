
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-display font-medium transition-all hover:text-primary">
              C<span className="text-primary">.</span>Ndavi
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>© {currentYear} Cornelius Ndavi. All rights reserved.</p>
            <p className="mt-1">Data Science Portfolio</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
