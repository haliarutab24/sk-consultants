import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Intro from './components/Intro';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      <Navbar />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Intro />
        <Services />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;