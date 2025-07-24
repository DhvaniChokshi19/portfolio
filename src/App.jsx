import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Header from './Pages/Header';
import About from './Pages/About';
import Iridescence from '../ReactBits/Iridescence/Iridescence';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Footer from './Pages/Footer';
const Home = () => {
  return (
    <>
    < Header />
    < HomePage />
    <About />
    <Skills />
    <Projects />
    <Footer />
    </>
  )
}
function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      
      </Routes>
   </Router>
  );
}
export default App;
