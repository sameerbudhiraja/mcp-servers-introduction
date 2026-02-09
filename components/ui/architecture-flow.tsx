
'use client';

import { useCallback } from 'react';
import { motion } from 'framer-motion';
import ReactFlow, {
  Background,
  Controls,
  Edge,
  Node,
  useNodesState,
  useEdgesState,
  Position,
  MarkerType,
  Handle,
  NodeProps,
} from 'reactflow';
import 'reactflow/dist/style.css';
import {
  Bot,
  Plug,
  Server,
  Database,
  LayoutTemplate,
  Github,
  Gitlab,
  Trello,
  FolderGit2,
} from 'lucide-react';

/* ============================= */
/*        Gradient Node          */
/* ============================= */

const GradientNode = ({ data, isConnectable }: NodeProps) => {
  return (
    <div className="relative group transition-all duration-300 hover:-translate-y-1">
      {/* Glow */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${
          data.gradient || 'from-primary to-accent'
        } opacity-30 group-hover:opacity-100 transition duration-500 blur-xl rounded-2xl`}
      />

      {/* Glass Card */}
      <div
        className="
        relative flex flex-col items-center justify-center
        bg-white/[0.04] backdrop-blur-2xl
        border border-white/10
        p-6 rounded-2xl
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        min-w-[200px]
        transition-all duration-300
        group-hover:scale-105
        group-hover:border-white/20
      "
      >
        {data.label}
      </div>

      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        className="!bg-white/40 !w-3 !h-3"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        className="!bg-white/40 !w-3 !h-3"
      />
    </div>
  );
};

const nodeTypes = {
  gradient: GradientNode,
};

/* ============================= */
/*           Nodes               */
/* ============================= */

const initialNodes: Node[] = [
  {
    id: 'client',
    type: 'gradient',
    data: {
      gradient: 'from-blue-500 to-cyan-400',
      label: (
        <>
          <div className="p-3 rounded-full bg-blue-500/10 mb-3 border border-blue-500/20">
            <Bot size={32} className="text-blue-400" />
          </div>
          <strong className="text-lg text-white">AI Assistant</strong>
          <span className="text-xs text-blue-300/70 mt-1 font-mono">
            Client
          </span>
        </>
      ),
    },
    position: { x: 350, y: 0 },
  },

  {
    id: 'transport',
    type: 'gradient',
    data: {
      gradient: 'from-purple-500 to-pink-500',
      label: (
        <>
          <div className="p-3 rounded-full bg-purple-500/10 mb-3 border border-purple-500/20">
            <Plug size={32} className="text-purple-400" />
          </div>
          <strong className="text-lg text-white">MCP Protocol</strong>
          <span className="text-xs text-purple-300/70 mt-1 font-mono">
            JSON-RPC Transport
          </span>
        </>
      ),
    },
    position: { x: 350, y: 200 },
  },

  {
    id: 'router',
    type: 'gradient',
    data: {
      gradient: 'from-teal-500 to-emerald-400',
      label: (
        <>
          <div className="p-3 rounded-full bg-teal-500/10 mb-3 border border-teal-500/20">
            <Server size={28} className="text-teal-400" />
          </div>
          <strong className="text-lg text-white">MCP Server</strong>
          <span className="text-xs text-teal-300/70 mt-1 font-mono">
            Router + Zod Validation
          </span>
        </>
      ),
    },
    position: { x: 350, y: 420 },
  },

  {
    id: 'tools',
    type: 'gradient',
    data: {
      gradient: 'from-emerald-500 to-green-600',
      label: (
        <>
          <Database size={28} className="mb-2 text-white" />
          <strong className="text-white">Tools</strong>
        </>
      ),
    },
    position: { x: 100, y: 650 },
  },

  {
    id: 'resources',
    type: 'gradient',
    data: {
      gradient: 'from-indigo-500 to-blue-600',
      label: (
        <>
          <FolderGit2 size={28} className="mb-2 text-white" />
          <strong className="text-white">Resources</strong>
        </>
      ),
    },
    position: { x: 350, y: 650 },
  },

  {
    id: 'prompts',
    type: 'gradient',
    data: {
      gradient: 'from-pink-500 to-rose-500',
      label: (
        <>
          <LayoutTemplate size={28} className="mb-2 text-white" />
          <strong className="text-white">Prompts</strong>
        </>
      ),
    },
    position: { x: 600, y: 650 },
  },

  {
    id: 'github',
    type: 'gradient',
    data: {
      gradient: 'from-gray-700 to-gray-900',
      label: (
        <>
          <Github size={28} className="mb-2 text-white" />
          <strong className="text-white">GitHub</strong>
        </>
      ),
    },
    position: { x: 100, y: 900 },
  },

  {
    id: 'gitlab',
    type: 'gradient',
    data: {
      gradient: 'from-orange-500 to-red-600',
      label: (
        <>
          <Gitlab size={28} className="mb-2 text-white" />
          <strong className="text-white">GitLab</strong>
        </>
      ),
    },
    position: { x: 350, y: 900 },
  },

  {
    id: 'jira',
    type: 'gradient',
    data: {
      gradient: 'from-blue-600 to-blue-400',
      label: (
        <>
          <Trello size={28} className="mb-2 text-white" />
          <strong className="text-white">Jira</strong>
        </>
      ),
    },
    position: { x: 600, y: 900 },
  },
];

/* ============================= */
/*            Edges              */
/* ============================= */

const glow = (color: string) => ({
  stroke: color,
  strokeWidth: 2.5,
  filter: `drop-shadow(0 0 8px ${color})`,
});

const initialEdges: Edge[] = [
  {
    id: 'e1',
    source: 'client',
    target: 'transport',
    animated: true,
    style: glow('#3b82f6'),
    markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' },
  },
  {
    id: 'e2',
    source: 'transport',
    target: 'router',
    animated: true,
    style: glow('#a855f7'),
    markerEnd: { type: MarkerType.ArrowClosed, color: '#a855f7' },
  },
  {
    id: 'e3',
    source: 'router',
    target: 'tools',
    animated: true,
    style: glow('#22c55e'),
    markerEnd: { type: MarkerType.ArrowClosed, color: '#22c55e' },
  },
  {
    id: 'e4',
    source: 'router',
    target: 'resources',
    animated: true,
    style: glow('#6366f1'),
    markerEnd: { type: MarkerType.ArrowClosed, color: '#6366f1' },
  },
  {
    id: 'e5',
    source: 'router',
    target: 'prompts',
    animated: true,
    style: glow('#ec4899'),
    markerEnd: { type: MarkerType.ArrowClosed, color: '#ec4899' },
  },
  {
    id: 'e6',
    source: 'tools',
    target: 'gitlab',
    animated: true,
    style: glow('#ec4899'),
    markerEnd: { type: MarkerType.ArrowClosed, color: '#ec4899' },
  },
  {
    id: 'e7',
    source: 'tools',
    target: 'github',
    animated: true,
    style: glow('#ec4899'),
    markerEnd: { type: MarkerType.ArrowClosed, color: '#ec4899' },
  },
  {
    id: 'e8',
    source: 'tools',
    target: 'jira',
    animated: true,
    style: glow('#ec4899'),
    markerEnd: { type: MarkerType.ArrowClosed, color: '#ec4899' },
  },
];

/* ============================= */
/*        Main Component         */
/* ============================= */

export default function ArchitectureFlow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="relative w-full h-[1050px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.7)]">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0b1020] to-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.15),transparent_40%)] animate-pulse opacity-70" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full h-full"
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          minZoom={0.5}
          maxZoom={1.5}
          className="bg-transparent"
        >
          <Background
            color="#333"
            gap={24}
            size={1.5}
            className="opacity-40"
          />
          <Controls className="!bg-black/60 backdrop-blur-xl !border !border-white/10 !rounded-xl shadow-xl" />
        </ReactFlow>
      </motion.div>
    </div>
  );
}
