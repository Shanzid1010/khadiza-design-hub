
import React from 'react';

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
