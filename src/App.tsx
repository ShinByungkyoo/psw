import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PortalLinks from './components/PortalLinks';
import Pledges from './components/Pledges';
import Profile from './components/Profile';
import CheerBoard from './components/CheerBoard';
import Footer from './components/Footer';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Share2, Heart, ExternalLink } from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);

  // Scroll smooth helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyLink = () => {
    // Copy current URL
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans"
    >
      {/* Sticky Header */}
      <Header 
        onScrollTo={scrollToSection} 
        copied={copied} 
        onCopyLink={handleCopyLink} 
      />

      {/* Main Campaign Platform Content */}
      <main className="flex-grow">
        
        {/* Banner Announcement Bar */}
        <div className="bg-blue-600 px-4 py-3 text-center text-xs font-bold border-b border-blue-700 shadow-sm">
          <span className="inline-flex items-center gap-1.5 text-white">
            <Sparkles size={13} className="text-amber-300 animate-pulse" />
            <span>더불어민주당 최고위원 후보 <strong className="text-amber-300">박승원</strong>의 4대 핵심 분석·자료집 통합 포털 사이트입니다.</span>
          </span>
        </div>

        {/* Hero Area */}
        <Hero />

        {/* 4 Portal Links requested by user */}
        <PortalLinks />

        {/* 5 Campaign Pledges from the poster image */}
        <Pledges />

        {/* Candidate Profile / Resume */}
        <Profile />

        {/* Supporter Interactive Cheer Board */}
        <CheerBoard />

      </main>

      {/* Footer */}
      <Footer onScrollToTop={scrollToTop} />
    </motion.div>
  );
}
