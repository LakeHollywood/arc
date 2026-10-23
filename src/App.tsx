import { useState } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Architecture from './components/Architecture';
import CerlDemo from './components/CerlDemo';
import ChainOfCustody from './components/ChainOfCustody';
import Stakeholders from './components/Stakeholders';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Problem />
      <Architecture />
      <CerlDemo />
      <ChainOfCustody />
      <Stakeholders />
      <Footer />
    </div>
  );
}
