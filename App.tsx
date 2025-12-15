import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Publications from './components/Publications';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen selection:bg-primary-500/30 selection:text-white font-sans">
      <Navbar />
      
      <main>
        <About />
        <Skills />
        <Education />
        <Experience />
        <Publications />
        <Contact />
      </main>

      <ChatWidget />
    </div>
  );
}

export default App;