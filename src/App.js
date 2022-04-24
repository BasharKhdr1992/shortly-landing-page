import React from 'react';
import './App.css';
import Appendix from './components/footer/Appendix';
import Footer from './components/footer/Footer';
import Intro from './components/Intro/Intro';
import Navigation from './components/Navigation/Navigation';
import ShortenComponent from './components/ShortenComponent/ShortenComponent';

const App = () => {
  return (
    <div>
      <Navigation />
      <Intro />
      <ShortenComponent />
      <Footer />
      <Appendix />
    </div>
  );
};

export default App;
