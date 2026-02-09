'use client';

import { useEffect, useRef, useState } from 'react';
import { Github, Mail, ArrowRight } from 'lucide-react';

export default function FooterSection() {
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

  return (
    <footer ref={sectionRef} className="relative border-t border-secondary/10 bg-background py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className={`rounded-2xl border border-secondary/20 bg-secondary/5 p-12 md:p-16 text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Ready to Empower Your <span className="text-primary">AI Development?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Provide your large language models full access to your development platforms. Deploy production-ready MCP servers in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="relative group px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/40 transition-smooth transform hover:scale-105 flex items-center justify-center gap-2">
              <a href="https://github.com/sameerbudhiraja/mcp_servers" target="_blank" rel="noopener noreferrer">Deploy Now</a>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-secondary/10">
          {/* Brand */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '100ms' : '0ms' }}>
            <h3 className="text-2xl font-bold text-secondary mb-3">MCP Servers</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Enterprise-grade Model Context Protocol servers enabling seamless AI integration with development platforms.
            </p>
            <p className="text-xs text-muted-foreground">Production-ready infrastructure for AI development</p>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '200ms' : '0ms' }}>
            <h4 className="font-semibold text-foreground mb-4">Servers</h4>
            <ul className="space-y-2">
              {['GitHub', 'Bitbucket', 'GitLab', 'Jira'].map((item) => (
                <li key={item}>
                  <a href={`https://github.com/sameerbudhiraja/mcp_servers/tree/main/${item.toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors text-sm">
                    {item} Server
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '300ms' : '0ms' }}>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/sameerbudhiraja/mcp_servers#readme" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com/sameerbudhiraja/mcp_servers/tree/main/github#tools-reference" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors text-sm">
                  Tools Reference
                </a>
              </li>
              <li>
                <a href="https://github.com/sameerbudhiraja/mcp_servers#quick-start" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors text-sm">
                  Examples
                </a>
              </li>
              <li>
                <a href="https://github.com/sameerbudhiraja/mcp_servers/issues" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors text-sm">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '400ms' : '0ms' }}>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/sameerbudhiraja/mcp_servers" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors text-sm">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://github.com/sameerbudhiraja/mcp_servers/discussions" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors text-sm">
                  Discussions
                </a>
              </li>
              <li>
                <a href="https://github.com/sameerbudhiraja/mcp_servers/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors text-sm">
                  Contributing
                </a>
              </li>
              <li>
                <a href="https://github.com/sameerbudhiraja/mcp_servers/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors text-sm">
                  MIT License
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Statistics */}
        <div className={`grid md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-blue-500/10 transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400 mb-2">4</p>
            <p className="text-muted-foreground text-sm">Major Platforms Supported</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-cyan-400 mb-2">141</p>
            <p className="text-muted-foreground text-sm">AI Tools Available</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-300 mb-2">Production</p>
            <p className="text-muted-foreground text-sm">Enterprise Grade</p>
          </div>
        </div>

        {/* Bottom footer */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          {/* Copyright */}
          <div className="text-center sm:text-left text-sm text-muted-foreground">
            <p>&copy; 2024 MCP Servers Collection. All rights reserved.</p>
            <p className="mt-1 text-xs">Crafted by <span className="text-blue-300">Sameer Budhiraja</span></p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sameerbudhiraja"
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group"
            >
              <Github size={18} className="text-muted-foreground group-hover:text-white transition-colors" />
            </a>
            <a
              href="mailto:iamsameer2006@gmail.com"
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group"
            >
              <Mail size={18} className="text-muted-foreground group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              Privacy
            </a>
            <span className="text-blue-500/30">•</span>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              Terms
            </a>
            <span className="text-blue-500/30">•</span>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              License
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 opacity-50"></div>
      </div>
    </footer>
  );
}
