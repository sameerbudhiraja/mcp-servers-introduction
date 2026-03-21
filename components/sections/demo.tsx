'use client';

import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

export default function DemoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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

  return (
    <section ref={sectionRef} className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Witness <span className="text-primary">Integration in Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Observe how MCP servers seamlessly connect large language models with development platforms to automate complex workflows.
          </p>
        </div>

        {/* Video showcase */}
        <div className={`group relative rounded-2xl border border-primary/20 bg-primary/5 overflow-hidden transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          {/* Video container */}
          <div className="relative aspect-video bg-slate-900 flex items-center justify-center overflow-hidden">
            {/* Play button overlay */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-b from-black/0 via-black/0 to-black/40 group-hover:from-black/20 group-hover:via-black/20 group-hover:to-black/60 transition-all duration-300 cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-2xl shadow-primary/50 hover:shadow-3xl hover:shadow-primary/70 transform hover:scale-110 transition-all duration-300 group-hover:scale-100 scale-90">
                  <Play size={32} className="text-white fill-white ml-1" />
                </div>
              </div>
            )}

            {/* Video frame simulation - showing demo content */}
            <div className="absolute inset-0 z-0">
              {/* Terminal-like interface */}
              <div className="h-full w-full bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
                {/* Code lines animation */}
                <div className="absolute inset-0 space-y-2 p-6 font-mono text-sm opacity-40">
                  <div className="text-green-400">$ npm start</div>
                  <div className="text-white/60">Starting MCP Server...</div>
                  <div className="text-blue-400">✓ GitHub Server listening on port 3000</div>
                  <div className="text-white/60">Registered 57 tools</div>
                  <div className="text-cyan-400">✓ AI Integration Ready</div>
                </div>

                {/* Animated grid */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="grid-demo" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-demo)" />
                  </svg>
                </div>

                {/* Floating elements */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-500/30 rounded-lg animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 border border-cyan-500/30 rounded-lg animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* YouTube embed fallback */}
            {!isPlaying && (
              <div className="absolute inset-0 z-5 flex items-center justify-center text-center">
                <div className="px-8">
                  <p className="text-white/70 mb-4 text-sm">Watch the demo video</p>
                  <p className="text-white/50 text-xs">Click play to see MCP servers in action</p>
                </div>
              </div>
            )}

            {/* Actual video if playing */}
            {isPlaying && (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/TYS4y-TeAv8?autoplay=1&rel=0"
                title="MCP Servers Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>

          {/* Info bar */}
          <div className="border-t border-blue-500/20 px-8 py-6 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-white mb-1">MCP Servers Integration Demo</h3>
              <p className="text-sm text-muted-foreground">Complete walkthrough of setting up and using MCP servers with AI systems</p>
            </div>
            <button
              onClick={() => setIsPlaying(true)}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-smooth whitespace-nowrap"
            >
              Watch Demo
            </button>
          </div>
        </div>

        {/* Demo highlights */}
        <div className={`grid md:grid-cols-3 gap-6 mt-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          {[
            {
              title: 'Setup in Minutes',
              description: 'Install, configure environment variables, and start the server. Zero complexity.',
            },
            {
              title: 'Instant AI Access',
              description: 'AI assistants immediately have access to all 141 tools across 4 platforms.',
            },
            {
              title: 'Production Ready',
              description: 'Enterprise logging, error handling, and type-safe operations out of the box.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 p-6 hover:border-blue-500/40 transition-all duration-300"
            >
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
