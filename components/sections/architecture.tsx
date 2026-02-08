'use client';

import { useEffect, useRef, useState } from 'react';
import { Database, Lock, Zap, LogInIcon as LogsIcon, ArrowDown, ArrowRight } from 'lucide-react';

export default function ArchitectureSection() {
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

  const pillars = [
    {
      icon: Database,
      title: 'Modular Architecture',
      description: 'Clean separation of concerns with layered design. Services, tools, configuration, and utilities completely decoupled for maximum maintainability.',
      benefits: ['Easy maintenance', 'Extensible design', 'Reusable components'],
    },
    {
      icon: Lock,
      title: 'Type-Safe Validation',
      description: 'End-to-end input validation using Zod with comprehensive error handling and environment-based secrets management.',
      benefits: ['Type-safe validation', 'Secure credentials', 'Error resilience'],
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Production-optimized architecture with efficient API client integration, tool registration, and minimal latency overhead.',
      benefits: ['Fast responses', 'Low latency', 'Scalable'],
    },
    {
      icon: LogsIcon,
      title: 'Structured Logging',
      description: 'Comprehensive observability with structured logging outputs. Full transparency into server operations, requests, and error conditions.',
      benefits: ['Full observability', 'Error tracking', 'Debug mode'],
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Enterprise-Grade <span className="text-primary">Architecture</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Production-ready infrastructure with structured logging, comprehensive error handling, and end-to-end type-safe validation.
          </p>
        </div>

        {/* Visual Architecture Flow Diagram */}
        <div className={`mb-20 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-12 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Architecture Flow</h3>
          
          <div className="flex flex-col items-center gap-6">
            {/* Layer 1: LLM */}
            <div className="w-full max-w-2xl">
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border-2 border-blue-500/50 rounded-xl p-6 text-center shadow-lg shadow-blue-500/20">
                <div className="text-3xl mb-2">🤖</div>
                <h4 className="text-xl font-bold text-foreground mb-1">Large Language Model</h4>
                <p className="text-sm text-muted-foreground">OpenAI, Claude, Gemini, etc.</p>
              </div>
            </div>

            <ArrowDown className="text-primary animate-bounce" size={32} />

            {/* Layer 2: MCP Protocol */}
            <div className="w-full max-w-2xl">
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 border-2 border-purple-500/50 rounded-xl p-6 text-center shadow-lg shadow-purple-500/20">
                <div className="text-3xl mb-2">🔌</div>
                <h4 className="text-xl font-bold text-foreground mb-1">Model Context Protocol</h4>
                <p className="text-sm text-muted-foreground">Standardized communication layer</p>
              </div>
            </div>

            <ArrowDown className="text-primary animate-bounce" size={32} />

            {/* Layer 3: MCP Server Layers */}
            <div className="w-full max-w-4xl">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/50 rounded-xl p-8 shadow-lg shadow-primary/20">
                <h4 className="text-xl font-bold text-foreground mb-6 text-center">MCP Server Architecture</h4>
                
                <div className="space-y-4">
                  {/* Tools Layer */}
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 hover:bg-primary/20 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/30 flex items-center justify-center">
                        <span className="text-lg">🛠️</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-foreground">Tools Layer</h5>
                        <p className="text-xs text-muted-foreground">141+ registered MCP tools</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowDown className="text-primary/50" size={24} />
                  </div>

                  {/* Services Layer */}
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 hover:bg-primary/20 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/30 flex items-center justify-center">
                        <span className="text-lg">🔧</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-foreground">Services Layer</h5>
                        <p className="text-xs text-muted-foreground">Business logic & API operations</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowDown className="text-primary/50" size={24} />
                  </div>

                  {/* Config & Utils Layer */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 hover:bg-primary/20 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/30 flex items-center justify-center">
                          <span className="text-lg">⚙️</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-foreground">Configuration</h5>
                          <p className="text-xs text-muted-foreground">Environment & schemas</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 hover:bg-primary/20 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/30 flex items-center justify-center">
                          <span className="text-lg">⚡</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-foreground">Utilities</h5>
                          <p className="text-xs text-muted-foreground">Logging & validation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ArrowDown className="text-primary animate-bounce" size={32} />

            {/* Layer 4: Platform APIs */}
            <div className="w-full max-w-4xl">
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border-2 border-green-500/50 rounded-xl p-6 shadow-lg shadow-green-500/20">
                <h4 className="text-xl font-bold text-foreground mb-4 text-center">Platform REST APIs</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'GitHub', icon: '🐙', tools: '57 tools' },
                    { name: 'Bitbucket', icon: '🪣', tools: '25 tools' },
                    { name: 'GitLab', icon: '🦊', tools: '28 tools' },
                    { name: 'Jira', icon: '📋', tools: '31 tools' },
                  ].map((platform, idx) => (
                    <div key={idx} className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center hover:bg-green-500/20 transition-all">
                      <div className="text-2xl mb-1">{platform.icon}</div>
                      <p className="font-semibold text-foreground text-sm">{platform.name}</p>
                      <p className="text-xs text-muted-foreground">{platform.tools}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture pillars */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-xl border border-primary/20 bg-primary/5 hover:border-primary/40 transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105 p-8 hover:shadow-lg hover:shadow-primary/20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? `${index * 100 + 200}ms` : '0ms' }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-primary to-accent blur-xl"></div>

                <div className="relative z-10">
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-primary group-hover:text-accent transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{pillar.description}</p>

                  {/* Benefits */}
                  <div className="space-y-2 pt-6 border-t border-primary/10">
                    {pillar.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm text-primary/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Folder Structure */}
        <div className={`rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-12 transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold mb-8 text-foreground">Project Structure</h3>

          {/* Folder structure */}
          <div className="space-y-1 font-mono text-sm bg-slate-950/50 rounded-lg p-6 border border-primary/10">
            {[
              { name: 'index.js', description: 'Main entry point', indent: 0, icon: '📄', color: 'text-blue-400' },
              { name: 'src/', description: 'Application source', indent: 0, icon: '📁', color: 'text-yellow-400' },
              { name: 'config/', description: 'Environment configuration', indent: 1, icon: '⚙️', color: 'text-purple-400' },
              { name: 'constants/', description: 'API endpoints, schemas', indent: 1, icon: '📋', color: 'text-cyan-400' },
              { name: 'services/', description: 'Business logic layer', indent: 1, icon: '🔧', color: 'text-green-400' },
              { name: '<platform>/', description: 'Platform-specific operations', indent: 2, icon: '🌐', color: 'text-green-300' },
              { name: 'tools/', description: 'MCP tool registration', indent: 1, icon: '🛠️', color: 'text-orange-400' },
              { name: '<platform>/', description: 'Tool handlers', indent: 2, icon: '📦', color: 'text-orange-300' },
              { name: 'utils/', description: 'Logging & validation', indent: 1, icon: '⚡', color: 'text-pink-400' },
              { name: 'logs/', description: 'Auto-generated log files', indent: 0, icon: '📊', color: 'text-yellow-400' },
              { name: '.env.example', description: 'Environment template', indent: 0, icon: '🔐', color: 'text-red-400' },
              { name: 'package.json', description: 'Dependencies', indent: 0, icon: '📦', color: 'text-blue-400' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 py-2 px-3 rounded hover:bg-primary/10 transition-colors duration-300 group">
                <span style={{ marginLeft: `${item.indent * 1.5}rem` }} className="flex items-center gap-2 flex-1">
                  <span className="text-lg">{item.icon}</span>
                  <span className={`${item.color} font-semibold group-hover:text-accent transition-colors`}>{item.name}</span>
                </span>
                <span className="text-muted-foreground text-xs hidden md:block">{item.description}</span>
              </div>
            ))}
          </div>

          {/* Key technologies */}
          <div className="mt-12 pt-8 border-t border-primary/10">
            <h4 className="font-bold text-foreground mb-6">Core Technologies</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: 'Model Context Protocol', version: '@modelcontextprotocol/sdk', type: 'AI Integration Framework' },
                { name: 'Large Language Models', version: 'OpenAI, Claude, etc.', type: 'AI Assistants' },
                { name: 'Zod', version: '^3.25.76', type: 'Schema Validation' },
                { name: 'Simple Git', version: 'Latest', type: 'Git Operations' },
                { name: 'REST APIs', version: 'GitHub, Bitbucket, GitLab, Jira', type: 'Platform Integration' },
              ].map((tech, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 bg-primary/5 hover:bg-primary/10">
                  <p className="font-semibold text-foreground text-sm mb-1">{tech.name}</p>
                  <p className="text-xs text-primary/60 mb-2">{tech.version}</p>
                  <p className="text-xs text-muted-foreground">{tech.type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Design principles */}
        <div className={`mt-16 rounded-xl border border-primary/20 bg-primary/5 p-8 transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold text-foreground mb-6">Core Design Principles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { principle: 'Modularity', description: 'Clean separation of concerns across all architectural layers' },
              { principle: 'Type Safety', description: 'End-to-end Zod validation for comprehensive data integrity' },
              { principle: 'Resilience', description: 'Robust error handling with detailed operational visibility' },
              { principle: 'Integration', description: 'Seamless connectivity with REST APIs across all platforms' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">{idx + 1}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.principle}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
