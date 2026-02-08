'use client';

import { useEffect, useState } from 'react';
import HeroSection from '@/components/sections/hero';
import WhatIsSection from '@/components/sections/what-is';
import HowItWorksSection from '@/components/sections/how-it-works';
import ServersSection from '@/components/sections/servers';
import ComingSoonSection from '@/components/sections/coming-soon';
import DemoSection from '@/components/sections/demo';
import ArchitectureSection from '@/components/sections/architecture';
import FooterSection from '@/components/sections/footer';

export default function Page() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gray-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection scrollY={scrollY} />
        <WhatIsSection />
        <HowItWorksSection />
        <ServersSection />
        <ComingSoonSection />
        <DemoSection />
        <ArchitectureSection />
        <FooterSection />
      </div>
    </main>
  );
}
