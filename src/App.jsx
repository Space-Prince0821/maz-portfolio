import React from 'react';
import Header from  './components/header/Header';
// import Nav from './components/nav/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
        <Header />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
        {/* <Nav /> */}
    </>
  )
}


export default App;