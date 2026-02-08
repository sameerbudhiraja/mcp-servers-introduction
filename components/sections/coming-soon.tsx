'use client';

import { useEffect, useRef, useState } from 'react';
import { Lock } from 'lucide-react';

export default function ComingSoonSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const upcomingPlatforms = [
    {
      name: 'Azure DevOps',
      icon: '☁️',
      description: 'Full MCP integration for Azure Repos, Boards, and Pipelines',
    },
    {
      name: 'Slack',
      icon: '💬',
      description: 'AI-powered development collaboration and notifications',
    },
    {
      name: 'Linear',
      icon: '📋',
      description: 'Seamless issue tracking and project management',
    },
    {
      name: 'Figma',
      icon: '🎨',
      description: 'AI-assisted design collaboration and asset management',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block mb-4 px-4 py-2 rounded-lg border border-secondary/30 bg-secondary/5 backdrop-blur-sm">
            <p className="text-sm font-medium text-secondary">Coming Soon</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            More Platforms <span className="text-secondary">on the Horizon</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Expanding our MCP server ecosystem to integrate with additional development platforms. More servers launching soon.
          </p>
        </div>

        {/* Upcoming platforms grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {upcomingPlatforms.map((platform, index) => (
            <div
              key={index}
              className={`group relative rounded-xl border border-secondary/20 bg-secondary/5 hover:border-secondary/40 transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105 p-8 hover:shadow-lg hover:shadow-secondary/20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-secondary to-gray-500 blur-xl"></div>

              <div className="relative z-10 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="relative">
                    <span className="text-5xl">{platform.icon}</span>
                    <div className="absolute -top-2 -right-2 bg-secondary/20 rounded-full p-1.5 border border-secondary/40">
                      <Lock size={12} className="text-secondary/60" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{platform.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
          <p className="text-muted-foreground mb-4">Have a platform suggestion?</p>
          <button className="px-8 py-3 rounded-lg border border-secondary/50 text-secondary hover:border-secondary/80 hover:bg-secondary/10 transition-smooth font-medium">
            <a href="https://www.linkedin.com/in/sameer-budhiraja" target="_blank" rel="noopener noreferrer">Request Platform</a>
          </button>
        </div>
      </div>
    </section>
  );
}
