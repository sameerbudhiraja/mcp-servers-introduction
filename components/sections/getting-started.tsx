'use client';

import { useState, useEffect } from 'react';
import { Code, Terminal, Settings, Shield } from 'lucide-react';

export default function GettingStartedSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="getting-started" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Getting Started</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get up and running with MCP servers in minutes. Follow these simple steps to integrate AI with your development platforms.
          </p>
        </div>

        {/* Prerequisites */}
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Settings className="text-primary" size={28} />
              Prerequisites
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Code size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Node.js v18.0.0+</h4>
                  <p className="text-sm text-muted-foreground">Required for running the MCP servers</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Terminal size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Git CLI</h4>
                  <p className="text-sm text-muted-foreground">Required for GitHub server's 20 Git CLI tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Installation Steps */}
        <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          {[
            {
              step: '01',
              title: 'Clone the Repository',
              description: 'Get the MCP servers source code from GitHub',
              code: 'git clone https://github.com/sameerbudhiraja/mcp_servers.git\ncd mcp_servers'
            },
            {
              step: '02',
              title: 'Install Dependencies',
              description: 'Navigate to your desired server and install required packages',
              code: 'cd github  # or bitbucket, gitlab, jira\nnpm install'
            },
            {
              step: '03',
              title: 'Configure Environment',
              description: 'Create a .env file with your API credentials',
              code: '# For GitHub\nGITHUB_TOKEN=your_personal_access_token\n\n# For Bitbucket\nBITBUCKET_TOKEN=your_api_token\n\n# For GitLab\nGITLAB_TOKEN=your_personal_access_token\nGITLAB_BASE_URL=https://gitlab.com  # Optional for self-hosted\n\n# For Jira\nJIRA_BASE_URL=https://your-domain.atlassian.net\nJIRA_EMAIL=your-email@example.com\nJIRA_API_TOKEN=your_api_token'
            },
            {
              step: '04',
              title: 'Configure MCP Client',
              description: 'Add the server to your MCP client configuration (e.g., Claude Desktop)',
              code: '{\n  "mcpServers": {\n    "github": {\n      "command": "node",\n      "args": ["/path/to/mcp_servers/github/src/index.js"],\n      "env": {\n        "GITHUB_TOKEN": "your_token_here"\n      }\n    }\n  }\n}'
            }
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl border border-primary/20 bg-background/50 p-8 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="rounded-lg bg-black/50 p-4 overflow-x-auto">
                    <pre className="text-sm text-green-400 font-mono whitespace-pre">{item.code}</pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Authentication Note */}
        <div className={`mt-12 transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-6">
            <div className="flex items-start gap-4">
              <Shield className="text-yellow-500 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Authentication & Permissions</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Each platform requires specific API token permissions. Visit the documentation for detailed permission requirements:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li><strong>GitHub:</strong> repo, read:repo, contents:write scopes</li>
                  <li><strong>Bitbucket:</strong> Repositories (Read/Write), Pull requests (Read/Write), Issues (Read/Write)</li>
                  <li><strong>GitLab:</strong> api, read_api, read_repository, write_repository scopes</li>
                  <li><strong>Jira:</strong> Basic Auth with email + API token</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
