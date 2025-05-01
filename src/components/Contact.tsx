
import React from 'react';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import useAnimateOnIntersect from './contact/useAnimateOnIntersect';

const Contact = () => {
  const contactRef = useAnimateOnIntersect<HTMLDivElement>();

  return (
    <section id="contact" className="bg-secondary/50">
      <div ref={contactRef} className="container mx-auto section-animate-in">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
          <div className="mt-4 w-20 h-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
