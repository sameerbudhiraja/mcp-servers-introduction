'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function HowItWorksSection() {
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

  const steps = [
    {
      number: '01',
      title: 'Installation & Configuration',
      description: 'Install the MCP server and configure API credentials for your development platform using straightforward environment-based setup.',
      details: ['Node.js 18+', 'API Token/PAT', 'Environment Config'],
    },
    {
      number: '02',
      title: 'Automated Tool Discovery',
      description: 'The MCP server automatically discovers and registers all available platform tools with comprehensive, type-safe schemas using Zod.',
      details: ['57 GitHub tools', '25 Bitbucket tools', '28 GitLab tools', '31 Jira tools'],
    },
    {
      number: '03',
      title: 'LLM Integration',
      description: 'Configure your large language model client to communicate with the MCP server using the standardized protocol for seamless tool access.',
      details: ['MCP Protocol', 'JSON Config', 'Auto-Discovery'],
    },
    {
      number: '04',
      title: 'Intelligent Operations',
      description: 'Your LLM now has comprehensive access to read, modify, and intelligently manage your development workflows and repositories.',
      details: ['Real-time Data', 'Full Operations', 'Context Aware'],
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get your AI assistant connected to your development tools in four simple steps.
          </p>
        </div>

        {/* Steps visualization */}
        <div className="relative">
          {/* Steps grid */}
          <div className="grid md:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group transition-all duration-700 h-full ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? `${index * 150}ms` : '0ms' }}
              >
                {/* Step card */}
                <div className="relative mb-8 h-full flex flex-col">
                  {/* Number circle */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-primary/50 transition-all duration-300 z-20">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="pt-12 px-6 py-8 rounded-xl border border-primary/20 bg-primary/5 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{step.description}</p>

                    {/* Details */}
                    <div className="space-y-2 pt-4 border-t border-primary/10 min-h-[120px]">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-primary/70">
                          <ChevronRight size={14} className="text-primary" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture overview */}
        <div className={`mt-24 rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-12 transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold mb-8 text-foreground">System Architecture Layers</h3>

          {/* Architecture stack */}
          <div className="space-y-3">
            {[
              { layer: 'MCP Tools Layer', description: 'Tool registration, Zod schema validation, comprehensive error handling' },
              { layer: 'Services Layer', description: 'Business logic, API operations, platform-specific implementations' },
              { layer: 'Configuration Layer', description: 'Environment management, API endpoints, data schemas' },
              { layer: 'Foundation', description: 'Structured logging, Zod validation, LLM API client integration' },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="flex items-start gap-4 p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 bg-primary/5 hover:bg-primary/10">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{item.layer}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
