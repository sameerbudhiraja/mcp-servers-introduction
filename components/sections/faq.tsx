'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqs = [
    {
      question: 'What is the Model Context Protocol (MCP)?',
      answer: 'MCP is a standard protocol that enables AI assistants to securely connect to external tools and data sources. It provides a unified way for large language models to interact with development platforms like GitHub, Bitbucket, GitLab, and Jira through type-safe, validated operations.'
    },
    {
      question: 'How long does it take to set up an MCP server?',
      answer: 'Setup typically takes 5-10 minutes. You need to clone the repository, install dependencies with npm, configure your API tokens in a .env file, and add the server to your MCP client configuration. The entire process is straightforward and well-documented.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes. MCP servers run locally on your machine and communicate directly with platform APIs using your personal access tokens. No data is sent to third parties. All API communications use HTTPS, and tokens are stored securely in environment variables.'
    },
    {
      question: 'Which AI assistants support MCP?',
      answer: 'MCP is supported by Claude Desktop, VS Code with MCP extensions, and other MCP-compatible clients. The protocol is designed to be client-agnostic, so any application implementing the MCP specification can use these servers.'
    },
    {
      question: 'Can I use multiple servers simultaneously?',
      answer: 'Absolutely! You can configure multiple MCP servers in your client to access different platforms at the same time. For example, you can have GitHub, Jira, and GitLab servers running concurrently, allowing your AI assistant to work across all platforms seamlessly.'
    },
    {
      question: 'What are the API rate limits?',
      answer: 'Rate limits depend on the platform and your account type. GitHub has 5,000 requests/hour for authenticated users, Bitbucket has 1,000 requests/hour, GitLab has 2,000 requests/minute, and Jira varies by plan. The servers handle rate limiting gracefully with appropriate error messages.'
    },
    {
      question: 'Do I need to be a developer to use this?',
      answer: 'Basic technical knowledge is helpful for initial setup (installing Node.js, configuring environment variables), but once configured, the servers are designed to be used through natural language conversations with your AI assistant. No coding required for day-to-day use.'
    },
    {
      question: 'Can I use this with self-hosted platforms?',
      answer: 'Yes! The GitLab server supports self-hosted instances via the GITLAB_BASE_URL configuration. For other platforms, you can modify the base URL configuration in the server code to point to your self-hosted instance.'
    }
  ];

  return (
    <section id="faq" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Frequently Asked Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about MCP servers
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={`max-w-3xl mx-auto space-y-4 transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-primary/20 bg-background overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-primary/5 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                <ChevronDown
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6 text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
