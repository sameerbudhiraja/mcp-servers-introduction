'use client';

import { useEffect, useRef, useState } from 'react';
import { GitBranch, Zap } from 'lucide-react';

export default function ServersSection() {
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

  const servers = [
    {
      name: 'GitHub',
      icon: '🐙',
      tools: 57,
      description: '37 GitHub API + 20 Git CLI tools for complete repository management',
      features: ['Repositories', 'Pull Requests', 'Issues', 'Branches', 'Commits', 'Search'],
      gradient: 'from-gray-500/20 to-slate-500/20',
      borderColor: 'border-gray-500/30',
      accentColor: 'text-gray-300',
    },
    {
      name: 'Bitbucket',
      icon: '🪣',
      tools: 25,
      description: '25+ Bitbucket Cloud REST API v2 tools for seamless integration',
      features: ['Repositories', 'Pull Requests', 'Branches', 'Issues', 'Commits', 'Search'],
      gradient: 'from-gray-600/20 to-slate-600/20',
      borderColor: 'border-gray-600/30',
      accentColor: 'text-gray-300',
    },
    {
      name: 'GitLab',
      icon: '🦊',
      tools: 28,
      description: '28 GitLab REST API v4 tools for project management excellence',
      features: ['Projects', 'Merge Requests', 'Issues', 'Branches', 'Files', 'Search'],
      gradient: 'from-gray-500/20 to-gray-600/20',
      borderColor: 'border-gray-500/30',
      accentColor: 'text-gray-300',
    },
    {
      name: 'Jira',
      icon: '⚡',
      tools: 31,
      description: '31 Jira Cloud REST API v3 tools for issue tracking mastery',
      features: ['Projects', 'Issues', 'Workflows', 'Sprints', 'Attachments', 'Worklogs'],
      gradient: 'from-gray-600/20 to-slate-600/20',
      borderColor: 'border-gray-600/30',
      accentColor: 'text-gray-300',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Integrated <span className="text-primary">Development Platforms</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Production-validated MCP servers for the platforms developers rely on. Each offering comprehensive tool coverage and enterprise-grade performance.
          </p>
        </div>

        {/* Servers grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {servers.map((server, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl border border-primary/20 bg-primary/5 hover:border-primary/40 transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105 p-8 hover:shadow-lg hover:shadow-primary/20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-primary to-accent blur-xl"></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-5xl mb-3 block">{server.icon}</span>
                    <h3 className="text-2xl font-bold text-foreground">{server.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary">{server.tools}</p>
                    <p className="text-xs text-muted-foreground mt-1">Tools</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">{server.description}</p>

                {/* Features */}
                <div className="mb-6 pb-6 border-b border-primary/10">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Capabilities</p>
                  <div className="flex flex-wrap gap-2">
                    {server.features.map((feature, idx) => (
                      <span key={idx} className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 border border-primary/20 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300`}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <p className="text-sm font-medium text-primary">Production Ready</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className={`grid md:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center hover:border-primary/40 transition-all duration-300">
            <p className="text-4xl font-bold text-primary mb-2">141</p>
            <p className="text-muted-foreground">Total Tools Available</p>
          </div>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center hover:border-primary/40 transition-all duration-300">
            <p className="text-4xl font-bold text-primary mb-2">4</p>
            <p className="text-muted-foreground">Enterprise Platforms</p>
          </div>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center hover:border-primary/40 transition-all duration-300">
            <p className="text-4xl font-bold text-primary mb-2">100%</p>
            <p className="text-muted-foreground">Type-Safe Operations</p>
          </div>
        </div>
      </div>
    </section>
  );
}
