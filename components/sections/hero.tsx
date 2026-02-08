'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  scrollY: number;
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className={`inline-block mb-8 px-4 py-2 rounded-lg border border-primary/30 bg-primary/5 backdrop-blur-sm transition-all duration-700 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
          <p className="text-sm font-medium text-primary">Model Context Protocol Servers</p>
        </div>

        {/* Main heading */}
        <h1 className={`text-5xl md:text-7xl font-bold mb-8 leading-tight transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          <span className="text-primary">Enterprise AI Integration</span>
          <span className="block text-foreground">for Development Platforms</span>
        </h1>

        {/* Subheading */}
        <p className={`text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          Connect large language models to GitHub, Bitbucket, GitLab, and Jira using production-ready MCP servers. Enable AI-powered workflows to intelligently manage repositories, track issues, and automate development processes.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
          <button className="relative group px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/40 transition-smooth transform hover:scale-105 flex items-center justify-center gap-2">
            {/* <span>Explore Servers</span> */}
            <a href="https://github.com/sameerbudhiraja/mcp_servers" target="_blank" rel="noopener noreferrer">Explore Servers</a>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-3 gap-4 md:gap-8 transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-300">4</p>
            <p className="text-sm text-muted-foreground mt-1">Platforms</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-400">141+</p>
            <p className="text-sm text-muted-foreground mt-1">Tools</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-300">Production</p>
            <p className="text-sm text-muted-foreground mt-1">Ready</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-0 right-0 flex justify-center transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-muted-foreground">Scroll to explore</p>
          <div className="w-6 h-10 border border-white/20 rounded-full flex items-center justify-center animate-pulse">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
