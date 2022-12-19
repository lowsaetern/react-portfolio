import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import About from './components/About';

function App() {

  const [currentPage, setCurrentPage] = useState('about');

  return (
    <div>

      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Header>

      <main>
        {currentPage === 'about'
          && <About />}

        {currentPage === 'portfolio'
          && <Portfolio />}

        {currentPage === 'contact'
          && <Contact />}

        {currentPage === 'resume'
          && <Resume />}

      </main>
      <Footer />
    </div>
  );
}

export default App;