"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const titles = [
  "Full-Stack Developer",
  "AI Engineer",
  "Robotics Enthusiast",
  "Problem Solver",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const stats = [
    { value: "4.667", label: "GPA" },
    { value: "114", label: "AMC 12B" },
    { value: "$400", label: "Hackathon Win" },
    { value: "250+", label: "Hours Volunteered in HS" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="border border-terminal-border rounded-lg overflow-hidden bg-terminal-dark/50 backdrop-blur-sm border-glow"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-terminal-gray border-b border-terminal-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
            </div>
            <span className="ml-2 text-xs text-terminal-muted">kautik@portfolio ~ </span>
          </div>

          {/* Terminal Content */}
          <div className="p-8 md:p-12 font-mono">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-terminal-muted text-sm">
                Last login: {new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })} on ttys000
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-start">
                <span className="text-terminal-green mr-2">❯</span>
                <span className="text-terminal-muted">whoami</span>
              </div>

              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="text-4xl md:text-6xl font-bold"
              >
                <span className="text-terminal-text">Kautik </span>
                <span className="text-terminal-green text-glow-green">Mandve</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center text-xl md:text-2xl text-terminal-cyan"
              >
                <span className="mr-2">&gt;</span>
                <span>{displayText}</span>
                <span className="animate-cursor-blink ml-1">▊</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-start mt-6"
              >
                <span className="text-terminal-green mr-2">❯</span>
                <span className="text-terminal-muted">cat intro.txt</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="text-terminal-text/80 max-w-2xl leading-relaxed"
              >
                Driven high school student with a strong foundation in computer engineering, 
                robotics, and AI. Building full-stack applications, AI-powered hardware systems, 
                and competing at state-level competitions.
              </motion.p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-terminal-border"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-terminal-gray/30 border border-terminal-border/50 hover:border-terminal-green/50 transition-colors"
                >
                  <div className="text-2xl md:text-3xl font-bold text-terminal-green">
                    {stat.value}
                  </div>
                  <div className="text-xs text-terminal-muted mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a
                href="#projects"
                className="btn-terminal-filled inline-flex items-center gap-2"
              >
                <span>./view_projects.sh</span>
                <span>→</span>
              </a>
              <a
                href="#contact"
                className="btn-terminal inline-flex items-center gap-2"
              >
                <span>./contact_me.sh</span>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="flex justify-center mt-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-terminal-muted text-sm"
          >
            <span>scroll down</span>
            <span className="text-terminal-green mt-2">↓</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
