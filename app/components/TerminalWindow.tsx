"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function TerminalWindow({ 
  title = "terminal", 
  children, 
  className = "",
  delay = 0 
}: TerminalWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`border border-terminal-border rounded-lg overflow-hidden bg-terminal-dark/80 backdrop-blur-sm border-glow ${className}`}
    >
      {/* Title Bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-terminal-gray border-b border-terminal-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
        </div>
        <span className="ml-2 text-xs text-terminal-muted font-medium">{title}</span>
      </div>

      {/* Content */}
      <div className="p-6">
        {children}
      </div>
    </motion.div>
  );
}
