'use client';

import { useEffect, useRef, useState } from 'react';
import { Code2, Zap, Shield, Layers } from 'lucide-react';

export default function WhatIsSection() {
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

  const features = [
    {
      icon: Code2,
      title: 'Unified Protocol',
      description: 'MCP provides a standardized interface allowing large language models to interact seamlessly with external tools and development platforms.',
    },
    {
      icon: Zap,
      title: 'Zero-Configuration Deployment',
      description: 'Connect AI systems to GitHub, Bitbucket, GitLab, and Jira with production-ready server implementations requiring minimal setup.',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Reliability',
      description: 'Production-validated servers featuring comprehensive error handling, structured logging, and secure authentication mechanisms.',
    },
    {
      icon: Layers,
      title: 'Composable Architecture',
      description: 'Layered design enabling clean separation of concerns, ensuring maintainability and seamless extensibility for custom workflows.',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What is the <span className="text-primary">Model Context Protocol?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            MCP is an open-source standardized protocol that enables large language models to seamlessly interact with development platforms and external tools. It provides AI assistants with the ability to read and write code, manage issues, execute Git operations, and automate complex development workflows with precision and reliability.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-xl border border-primary/20 bg-primary/5 hover:border-primary/40 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 transition-all duration-500"></div>
                <div className="relative z-10">
                  <Icon className="w-12 h-12 text-primary mb-4 group-hover:text-accent transition-colors" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Capabilities section */}
        <div className={`rounded-2xl border border-primary/20 bg-primary/10 p-12 transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold mb-8 text-foreground">AI-Powered Development Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Read and write code repositories with full context awareness',
              'Manage issues, pull requests, and merge requests across platforms',
              'Execute Git operations and version control workflows',
              'Access repository metadata and perform intelligent code search',
              'Manage Jira tickets, sprints, and agile workflows',
              'Deliver context-aware AI assistance for development tasks',
            ].map((capability, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <p className="text-muted-foreground">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
