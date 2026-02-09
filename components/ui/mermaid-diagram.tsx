'use client';

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export default function MermaidDiagram({ chart, className = '' }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      themeVariables: {
        darkMode: true,
        background: '#0d0d0d',
        primaryColor: '#808080',
        primaryTextColor: '#f5f5f5',
        secondaryColor: '#666666',
        tertiaryColor: '#0d0d0d',
        lineColor: '#525252',
        fontSize: '16px',
        fontFamily: 'Inter, sans-serif',
      },
      securityLevel: 'loose',
    });
  }, []);

  useEffect(() => {
    if (isMounted && containerRef.current) {
      const renderDiagram = async () => {
        try {
          // Generate a unique ID for each render to avoid conflicts
          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
          const { svg } = await mermaid.render(id, chart);
          setSvg(svg);
        } catch (error) {
          console.error('Failed to render mermaid diagram:', error);
          // Fallback or error state could be handled here
        }
      };

      renderDiagram();
    }
  }, [isMounted, chart]);

  return (
    <div 
      ref={containerRef} 
      className={`mermaid-container flex justify-center w-full overflow-x-auto ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
}
