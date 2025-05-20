import React from 'react';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <main>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;