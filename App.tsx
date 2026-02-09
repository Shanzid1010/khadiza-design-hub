
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Projects } from './sections/Projects';
import { WhyChooseMe } from './sections/WhyChooseMe';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyChooseMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
