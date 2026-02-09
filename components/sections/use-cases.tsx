'use client';

import { useState, useEffect } from 'react';
import { GitPullRequest, FileText, GitCommit, Zap } from 'lucide-react';

export default function UseCasesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const useCases = [
    {
      icon: GitPullRequest,
      title: 'Automate PR Reviews',
      description: 'Let AI analyze pull requests, suggest improvements, and automatically comment on code quality issues.',
      platforms: ['GitHub', 'Bitbucket', 'GitLab']
    },
    {
      icon: FileText,
      title: 'Generate Release Notes',
      description: 'Automatically create comprehensive release notes from commit history and pull request descriptions.',
      platforms: ['GitHub', 'GitLab']
    },
    {
      icon: GitCommit,
      title: 'Sync Jira with Commits',
      description: 'Keep Jira tickets in sync with code changes, automatically updating status based on commits and PRs.',
      platforms: ['Jira', 'GitHub', 'Bitbucket', 'GitLab']
    },
    {
      icon: Zap,
      title: 'Intelligent Issue Triage',
      description: 'Automatically categorize, label, and assign issues based on content analysis and team patterns.',
      platforms: ['GitHub', 'Jira', 'GitLab']
    },
    {
      icon: FileText,
      title: 'Documentation Generation',
      description: 'Generate and update documentation automatically from code comments and repository structure.',
      platforms: ['GitHub', 'GitLab']
    },
    {
      icon: GitCommit,
      title: 'Code Migration Assistant',
      description: 'Analyze codebases and assist with migrations, refactoring, and dependency updates.',
      platforms: ['GitHub', 'Bitbucket', 'GitLab']
    }
  ];

  return (
    <section id="use-cases" className="relative py-20 overflow-hidden bg-background/50">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Use Cases</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how AI-powered MCP servers can transform your development workflow
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className="group rounded-xl border border-primary/20 bg-background p-8 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <useCase.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
              <p className="text-muted-foreground mb-4">{useCase.description}</p>
              <div className="flex flex-wrap gap-2">
                {useCase.platforms.map((platform, pidx) => (
                  <span
                    key={pidx}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
